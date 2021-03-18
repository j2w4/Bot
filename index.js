const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODIwNzE2MjYzMjYwMTYwMDQx.YE5NlQ.hcYxWp_R9QVLN5WgNXG8JaQhd5E');