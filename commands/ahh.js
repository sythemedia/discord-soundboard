const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join().then(connection => {
      console.log(`[${message.guild}] ${message.author.username} has issues the ${module.exports.help.name} command.`)
      const dispatcher = connection.playFile('./effects/ahh.mp3');

      dispatcher.on('end', end => {
        message.member.voiceChannel.leave();
      });
    })
  }
};

module.exports.help = {
  name: 'ahh'
};
