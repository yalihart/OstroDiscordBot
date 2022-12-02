// Require the necessary discord.js classes
const {
  Client,
  GatewayIntentBits,
  ActivityType,
  Collection,
  Events,
} = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const { createTicket, deleteTicket } = require("./utils/tickets/ticketHandler");
require("dotenv").config();

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
});
// Getting all commands in commands folder automatically
const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
  client.user.setActivity("the teacher", { type: ActivityType.Listening });
  console.log("Logged in as " + client.user.tag);
  const CLIENT_ID = client.user.id;

  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

  // noinspection BadExpressionStatementJS
  (async () => {
    try {
      if (process.env.ENV === "production") {
        await rest.put(Routes.applicationCommands(CLIENT_ID)),
          {
            body: commands,
          };
        console.log(`Successfully registered application commands (globally).`);
      } else {
        await rest.put(
          Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID),
          {
            body: commands,
          }
        );
        console.log(
          `Successfully registered ${commands.length} application commands (guild).`
        );
      }
    } catch (error) {
      if (error) console.error(error);
    }
  })();
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isButton()) return;
  if (interaction.customId === "createTicket") {
    createTicket(interaction);
  } else if (interaction.customId === "closeTicket") {
    deleteTicket(interaction);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    if (error) console.error(error);
    await interaction.reply({
      content: "**There was an error while executing this command!**",
      ephemeral: true,
    });
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
