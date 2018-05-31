const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const voiceChannel = message.member.voiceChannel;

  if (!message.member.voiceChannel) {
    return errors.userNotInChannel(message);
  } else {
    console.log(`[${message.guild}] ${message.author.username} has issued the ${module.exports.help.name} command.`)
    voiceChannel.leave();
  }
};

module.exports.help = {
  name: 'leave'
};
