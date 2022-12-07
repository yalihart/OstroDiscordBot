const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Get info about the bot")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Meet Ostro")
      .setDescription(
        "Ostro is a bot that is made to help you with your server. It has many commands that can help you with moderation, fun, and more. It is also open source, so you can contribute to it!"
      )
      .setImage("https://i.ibb.co/8z2prtG/ostro.png")
      .setColor(0xb711fa)
      .addFields({
        name: "You can contribute to or view Ostro's source code on GitHub",
        value: "https://github.com/yalihart/OstroDiscordBot",
      });
    interaction.channel.send({ embeds: [embed] });
  },
};
