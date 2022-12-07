const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Get the rules of the server")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Rules")
      .setDescription(
        "Failure to abide by the server rules will result in a warning, kick, or ban."
      )
      .setColor(0xb711fa)
      .addFields(
        {
          name: "1. Be respectful",
          value:
            "This means no mean, rude, or harassing comments. Treat others the way you want to be treated.",
        },
        {
          name: "2. No inappropriate language",
          value:
            "Use of profanity should be kept to a reasonable minimum. Any derogatory language towards any user is prohibited. Swearing is permitted in casual channels only, while the official help and code channels should be kept free of any profane language.",
        },
        {
          name: "3. No spamming",
          value:
            "Do not send a lot of small messages right after each other. These disrupt chat and make it hard to scroll through the server. Please keep your messages at least 5 words long while chatting.",
        },
        {
          name: "4. No pornographic/adult/other NSFW material",
          value:
            "The idea behind the server is to provide a safe place for us to convey information, learn, and other kinds of innovative material – not to share the aforementioned NSFW material.",
        },
        {
          name: "5. No advertisements",
          value:
            "No invasive advertising, whether it be for other communities or streams. You can post your content in the media channel if it’s relevant and provides actual value for the community.",
        },
        {
          name: "6. No offensive names and profile pictures",
          value:
            "Your nickname in this server must be your real name or first name and last initial eg. John D. / John Doe. Profile Pictures must be appropriate (NO NSFW)!",
        },
        {
          name: "7. Server Raiding",
          value:
            "Server raiding is against the Discord terms of service. Any attempt to circumvent or bypass them can result in a permanent ban.",
        },
        {
          name: "8. Threats are forbidden",
          value: "Threats are prohibited and disallowed.",
        },
        {
          name: "9. Follow the Discord Community Guidelines",
          value: "You can find them here: https://discordapp.com/guidelines",
        },
        {
          name: "10. Do not disrupt others",
          value:
            "Do not join voice chat channels without permission of the people already in there (unless it's a non-formal channel such as chilling-1 / chilling-2).",
        },
        {
          name: "Discretion: ",
          value:
            "**The Admins and Moderators will Mute/Kick/Ban per discretion. If you feel mistreated DM an Admin and we will resolve the issue.**",
        },
        {
          name: "Terms: ",
          value:
            "**Your presence in this server implies accepting these rules, including all further changes. These changes might be done at any time without notice, it is your responsibility to check for them.**",
        },
        {
          name: "Disclaimer: ",
          value:
            'This "Discord" server is not affiliated with "Ostrovsky High School" in any capacity. This discord is run by computer science students attending Ostrovsky High School.',
        }
      )
      .setFooter({
        text: "Last updated on Dec 7th, 2022",
      });
    await interaction.channel.send({ embeds: [embed] });
  },
};
