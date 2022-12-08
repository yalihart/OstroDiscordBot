const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("python")
    .setDescription("Get information about the Python programming language"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Python")
      .setURL("https://www.python.org/")
      .setColor(0xb711fa)
      .setDescription(
        "Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
      )
      .addFields(
        {
          name: "Official Website",
          value: "https://www.python.org/",
        },
        {
          name: "Official Documentation",
          value: "https://docs.python.org/",
        },
        {
          name: "Official Tutorials",
          value: "https://docs.python.org/3/tutorial/",
        },
        {
          name: "Official Python Downloads",
          value: "https://www.python.org/downloads/",
        },
        {
          name: "Object Oriented Programming",
          value: "https://www.w3schools.com/python/python_classes.asp",
        },
        {
          name: "W3 Schools Python Tutorial",
          value: "https://www.w3schools.com/python/",
        }
      )
      .setFooter({
        text: "Python is a registered trademark of the Python Software Foundation.",
      })
      .setTimestamp()
      .setImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
      );
    interaction.channel.send({ embeds: [embed] });
  },
};
