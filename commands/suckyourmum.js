const Discord = require('discord.js');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {

  if (!message.member.voiceChannel) {
    return errors.userNotInChannel(message);
  } else {
    message.member.voiceChannel.join().then(connection => {
      console.log(`[${message.guild}] ${message.author.username} has issued the ${module.exports.help.name} command.`)
      const dispatcher = connection.playFile('./effects/suckyourmum.mp3');

      dispatcher.on('end', end => {
        message.member.voiceChannel.leave();
      });
    })
  }
};

module.exports.help = {
  name: 'ahh'
};
