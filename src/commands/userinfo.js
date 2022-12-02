/*

Discord.js v14 userinfo slash command
that gets user information and displays it in an embed.
Get the following Information: 
- Username
- User ID
- User Avatar
- User Status
- User Activity
- User Created At
- User Joined At
- User Roles
- User Permissions
- User Flags
- User Mention
- User Tag

*/
const moment = require("moment");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Get info about a user or yourself")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user's info you want to get")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user") || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);
    const permissions = member.permissions.toArray().join(", ");

    const roles = member.roles.cache
      .filter((r) => r.id !== interaction.guild.id)
      .map((role) => role.toString())
      .join(", ");

    const embed = new EmbedBuilder()
      .setTitle(`${member.displayName}'s Info`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setColor(0xb711fa)
      .addFields(
        { name: "Username  👤", value: user.tag, inline: true },
        { name: "User ID  🔢", value: user.id, inline: true },
        {
          name: "Joined Guild  📅",
          value: moment(member.joinedAt).format("MMMM Do, YYYY"),
          inline: false,
        },
        {
          name: "Account Created  📅",
          value: moment(user.createdAt).format("MMMM Do, YYYY"),
          inline: true,
        },

        { name: "Roles  🛡️", value: roles || "None", inline: false },
        { name: "User Permissions ⚔️", value: permissions, inline: false }
      );

    interaction.reply({ embeds: [embed] });
  },
};
