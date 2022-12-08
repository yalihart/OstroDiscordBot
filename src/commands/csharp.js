const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("csharp")
    .setDescription("Get information about the C# programming language"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("C#")
      .setURL("https://docs.microsoft.com/en-us/dotnet/csharp/")
      .setColor(0xb711fa)
      .setDescription(
        'C# (pronounced "See Sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.'
      )
      .addFields(
        {
          name: "Official Website",
          value: "https://dotnet.microsoft.com/en-us/",
        },
        {
          name: "Official Documentation",
          value: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        },
        {
          name: "Official Tutorials",
          value: "https://dotnet.microsoft.com/en-us/learn/csharp",
        },
        {
          name: "Official C# Downloads",
          value: "https://dotnet.microsoft.com/download/dotnet",
        },
        {
          name: "Object Oriented Programming",
          value:
            "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/object-oriented-programming",
        },
        {
          name: "W3 Schools C# Tutorial",
          value: "https://www.w3schools.com/cs/",
        }
      )
      .setFooter({
        text: "C# is a registered trademark of Microsoft Corporation.",
      })
      .setTimestamp()
      .setImage(
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
      );
    interaction.channel.send({ embeds: [embed] });
  },
};
