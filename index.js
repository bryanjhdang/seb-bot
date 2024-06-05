import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async(message) => {
  console.log(message)

  if (!message?.author.bot) {
    message.author.send(`Echo ${message.content}`);
  } 
})