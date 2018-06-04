const Discord = require('discord.js');
const config = require('../config.json');

module.exports.userNotInChannel = (message) => {
  let embed = new Discord.RichEmbed()
  .setTitle('User is not in channel!')
  .setColor(config.red)
  .setDescription(`${message.author}, you are not not in a voice channel, dummy..`);
  message.channel.send(embed);
};
