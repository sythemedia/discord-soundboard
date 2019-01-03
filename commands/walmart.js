const Discord = require('discord.js');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {

  if (!message.member.voiceChannel) {
    return errors.userNotInChannel(message);
  } else {
    message.member.voiceChannel.join().then(connection => {
      console.log(`[${message.guild}] ${message.author.username} has issued the ${module.exports.help.name} command.`)
      const dispatcher = connection.playFile('https://web015.mp3-youtube.download/tmp/20190103060708_1af75c01-093d-4316-be5b-0e2ca666cf4b/logan-jake-paul-shouting-walmart-for-1-minute-straight?md5=3RS3n8nqZ5pPPPPR5wqrVQ&expires=1546495645');

      dispatcher.on('end', end => {
        message.member.voiceChannel.leave();
      });
    })
  }
};

module.exports.help = {
  name: 'walmart'
};
