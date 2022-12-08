const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cpp")
    .setDescription("Get information about the C++ programming language"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("C++")
      .setURL("https://en.wikipedia.org/wiki/C%2B%2B")
      .setColor(0xb711fa)
      .setDescription(
        'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, and IBM, so it is available on many platforms.'
      )
      .addFields(
        {
          name: "Website",
          value: "https://isocpp.org/",
        },
        {
          name: "Documentation",
          value: "https://en.cppreference.com/w/",
        },
        {
          name: "W3 Schools C++ Tutorial",
          value: "https://www.w3schools.com/cpp/",
        }
      )
      .setFooter({
        text: interaction.guild.name,
      })
      .setTimestamp()
      .setImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
      );
    interaction.channel.send({ embeds: [embed] });
  },
};
