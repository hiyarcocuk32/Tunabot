const Discord = require('discord.js');
const client = new Discord.Client();



var prefix = '&'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === 'Pingim') {
    message.reply('Bu Pingin!' + client.ping + 'ms');
  }
  
    if (message.content === 'sa') {
    message.reply('as');
  }
  
  if (message.content === prefix + 'avatarım') {  
	message.channel.send(message.author.avatarURL);
  }
  
  
  
});

client.login('process.env.BOT_TOKEN');
