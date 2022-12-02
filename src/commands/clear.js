const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Get info about a user or yourself")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount of messages to clear.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const amount = interaction.options.getInteger("amount");

    if (amount < 1 || amount > 100) {
      return interaction.reply({
        content: "You need to input a number between 1 and 99.",
        ephemeral: true,
      });
    }

    await interaction.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      interaction.reply({
        content: "There was an error trying to clear messages in this channel!",
        ephemeral: true,
      });
    });

    interaction.reply({
      content: `Successfully cleared **${amount}** messages!`,
      ephemeral: true,
    });
  },
};
