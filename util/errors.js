const Discord = require('discord.js');
const config = require('../config.json');

module.exports.userNotInChannel = (message, perm) => {
  let embed = new Discord.RichEmbed()
  .setTitle('An error has occurred!')
  .setColor(config.yellow)
  .setDescription('You need to be in a voice channel to use this.');

  message.channel.send(embed).then(message => message.delete(config.errortimeout));
};
