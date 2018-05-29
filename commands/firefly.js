const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const voiceChannel = message.member.voiceChannel;

  if (!message.member.voiceChannel) {
    message.channel.send('Lol, I am not in a voice channel...');
  } else {
    voiceChannel.join().then(connection => {
      const dispatcher = connection.playFile('./effects/firefly.mp3');

      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    })
  }
};

module.exports.help = {
  name: 'firefly'
};
