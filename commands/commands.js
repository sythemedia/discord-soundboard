const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  const commandNames = Array.from(client.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

  let embed = new Discord.RichEmbed()
  .setTitle('Commands')
  .setThumbnail('http://www.techiwarehouse.com/userfiles/Batch%20File%20Commands.png')
  .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
  .setDescription(`Prefix: ${config.prefix}\n\n${client.commands.map(commands => `${config.prefix}${commands.help.name}`).join('\n')}`);
  message.channel.send(embed);
};

module.exports.help = {
  name: 'commands'
};
