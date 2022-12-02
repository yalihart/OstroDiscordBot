const {
  ChannelType,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} = require("discord.js");

require("dotenv").config();

//TODO: Add ticket archives to a closed ticket category.

async function createTicket(interaction) {
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("closeTicket")
      .setLabel("Close Ticket 🗑️")
      .setStyle(ButtonStyle.Secondary)
  );
  const embed = new EmbedBuilder()
    .setTitle("New Ticket  🎫 |  " + interaction.user.username)
    .setDescription(
      "Please describe your issue and wait patiently for a staff/support member to respond."
    )
    .setColor(0xb711fa);
  const guild = interaction.guild;
  const member = interaction.member;
  const originChannel = interaction.channel;
  const client = interaction.client;
  const TICKET_CATEGORY_ID = process.env.TICKET_CATAGORY_ID;
  const TICKET_CHANNEL_NAME = `ticket-${member.user.username}-${member.user.discriminator}`;
  const TICKET_CHANNEL_TOPIC = `Ticket for ${member.user.tag}`;
  const supportRoleId = process.env.SUPPORT_ROLE_ID;
  const adminRoleId = process.env.ADMIN_ROLE_ID;

  const ticketCategory = guild.channels.cache.get(TICKET_CATEGORY_ID);

  // In Discord.js v14 Check if the channel exists before creating it
  const channelExists = guild.channels.cache.find((channel) =>
    channel.name.toLowerCase().includes(TICKET_CHANNEL_NAME.toLowerCase())
  );
  if (channelExists) {
    return interaction.reply({
      content: "You already have a ticket open!",
      ephemeral: true,
    });
  }

  const channel = await guild.channels
    .create({
      name: TICKET_CHANNEL_NAME,
      type: ChannelType.GuildText,
      topic: TICKET_CHANNEL_TOPIC,
      permissionOverwrites: [
        {
          id: member.user.id,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.AddReactions,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.ReadMessageHistory,
          ],
        },
        {
          id: supportRoleId,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.AddReactions,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.ReadMessageHistory,
            PermissionFlagsBits.ManageMessages,
          ],
        },
        {
          id: adminRoleId,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.AddReactions,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.ReadMessageHistory,
            PermissionFlagsBits.ManageMessages,
          ],
        },
      ],
    })
    .then((channel) => {
      channel.setParent(TICKET_CATEGORY_ID).then(() => {
        channel.permissionOverwrites.edit(member, {
          SendMessages: true,
          ViewChannel: true,
          AttachFiles: true,
          AddReactions: true,
          EmbedLinks: true,
          ReadMessageHistory: true,
        });
      });
      channel.send({ embeds: [embed], components: [row] });
      interaction.deferUpdate();
    });
}

function deleteTicket(interaction) {
  const guild = interaction.guild;
  const channel = interaction.channel;

  channel.delete();
}

module.exports = { createTicket, deleteTicket };
