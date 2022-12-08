const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("c")
    .setDescription("Get information about the C programming language"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("C")
      .setURL("https://en.wikipedia.org/wiki/C_(programming_language)")
      .setColor(0xb711fa)
      .setDescription(
        "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computers ranging from supercomputers to embedded systems."
      )
      .addFields(
        {
          name: "Official Working Group",
          value: "https://www.open-std.org/jtc1/sc22/wg14/",
        },
        {
          name: "W3 Schools C Tutorial",
          value: "https://www.w3schools.com/C/",
        }
      )
      .setFooter({
        text: interaction.guild.name,
      })
      .setTimestamp()
      .setImage(
        "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png"
      );
    interaction.channel.send({ embeds: [embed] });
  },
};
