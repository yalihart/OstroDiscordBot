const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roleselect")
    .setDescription("Send a role select embed message")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Select Your Interests 📚")
      .setDescription(
        "Select the roles you are interested in below. You can select multiple roles."
      )
      .setColor(0xb711fa);
    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Nothing selected")
        .setMinValues(1)
        .setMaxValues(22)
        .addOptions([
          {
            label: "Node.js",
            value: "1050099977910751362",
          },
          {
            label: "JavaScript",
            value: "1050100047360032799",
          },
          {
            label: "HTML",
            value: "1050100115169361970",
          },
          {
            label: "CSS",
            value: "1050100125902585858",
          },
          {
            label: "Python",
            value: "1050127058493264011",
          },
          {
            label: "C#",
            value: "1050100175361818665",
          },
          {
            label: "C++",
            value: "1050100354617978880",
          },
          {
            label: "Java",
            value: "1050100181825237022",
          },
          {
            label: "PHP",
            value: "1050127558211014736",
          },
          {
            label: "C",
            value: "1050100381977428049",
          },
          {
            label: "Ruby",
            value: "1050127859739529296",
          },
          {
            label: "SQL",
            value: "1050100233452933260",
          },
          {
            label: "Redis",
            value: "1050100267401613312",
          },
          {
            label: "Front-end",
            value: "1050100451145699408",
          },
          {
            label: "Back-end",
            value: "1050100481374040165",
          },
          {
            label: "Full-stack",
            value: "1050131777592770670",
          },
          {
            label: "UI/UX",
            value: "1050100508058206288",
          },
          {
            label: "React",
            value: "1050100734881960087",
          },
          {
            label: "React Native",
            value: "1050100761977167922",
          },
          {
            label: "Flutter",
            value: "1050100817153241128",
          },
          {
            label: "Discord Bots",
            value: "1050100924460302377",
          },
          {
            label: "Game Development",
            value: "1050100932567892081",
          },
        ])
    );
    // interaction.channel.send({ embeds: [embed], components: [row] });
    interaction.reply({
      content: "This command is currently disabled.",
      ephemeral: true,
    });
  },
};
