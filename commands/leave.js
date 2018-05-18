const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const voiceChannel = message.member.voiceChannel;

  if (!message.member.voiceChannel) {
    message.channel.send('Lol, I am not in a voice channel...');
  } else {
    voiceChannel.leave();
  }
};

module.exports.help = {
  name: 'leave'
};
