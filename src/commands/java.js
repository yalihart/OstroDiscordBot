const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("java")
    .setDescription("Get information about the Java programming language"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Oracle Java")
      .setURL("https://www.java.com/en/")
      .setColor(0xb711fa)
      .setDescription(
        "Oracle Java is the #1 programming language and development platform. It reduces costs, shortens development time-frames, drives innovation, and improves application services. With millions of developers running more than 60 billion Java Virtual Machines worldwide, Java continues to be the development platform of choice for enterprises and developers."
      )
      .addFields(
        {
          name: "Official Website",
          value: "https://www.java.com",
        },
        {
          name: "Official Documentation",
          value: "https://docs.oracle.com/en/java/",
        },
        {
          name: "Official Tutorials",
          value: "https://docs.oracle.com/javase/tutorial/",
        },
        {
          name: "Official Java SE Downloads",
          value:
            "https://www.oracle.com/java/technologies/javase-downloads.html",
        },
        {
          name: "Object Oriented Programming",
          value: "https://www.oracle.com/java/technologies/oop.html",
        },
        {
          name: "W3 Schools Java Tutorial",
          value: "https://www.w3schools.com/java/",
        }
      )
      .setFooter({
        text: "Java is a registered trademark of Oracle and/or its affiliates.",
      })
      .setTimestamp()
      .setImage(
        "https://cdn.freebiesupply.com/logos/thumbs/2x/java-4-logo.png"
      );
    interaction.channel.send({ embeds: [embed] });
  },
};
