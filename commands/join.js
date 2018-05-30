const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  if (!message.member.voiceChannel) {
    message.channel.send('Lol, I am not in a voice channel...');
  } else {
    message.member.voiceChannel.join().then(connection => {
      const sounds = ['blockeduserenteredchannel.mp3', 'blockeduserjoinedchannel.mp3', 'buddyenteredchannel.mp3', 'buddyjoinedchannel.mp3', 'connected.mp3', 'userenteredchannel.mp3', 'userjoinedchannel.mp3', 'welcomeback.mp3'];
      const play = sounds[Math.floor(Math.random() * sounds.length)];

      const dispatcher = connection.playFile(`./effects/teamspeak/${play}`);

      dispatcher.on('end', end => {
        message.member.voiceChannel.leave();
      });
    })
  }
};

module.exports.help = {
  name: 'join'
};
