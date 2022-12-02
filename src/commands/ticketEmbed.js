const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const ticketChannel = "1048024298545217586";
const row = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setCustomId("createTicket")
    .setLabel("Create Ticket 📇")
    .setStyle(ButtonStyle.Primary)
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticketembedmsg")
    .setDescription("Send a ticket embed message with the start ticket button")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const client = interaction.client;
    const embed = new EmbedBuilder()
      .setTitle("Create a ticket  🎫")
      .setDescription(
        "If you need help from staff, click the button below to create a support ticket! **Please note that abuse of this system will result in a ban.**"
      )
      .setColor(0xb711fa);
    const channel = interaction.guild.channels.cache.get(ticketChannel);
    console.log(channel.id);
    interaction.reply({
      content: "Ticket embed message sent!",
      ephemeral: true,
    });
    const message = await channel.send({ embeds: [embed], components: [row] });
  },
};
