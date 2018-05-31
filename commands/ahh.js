const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  if (!message.member.voiceChannel) {
    let embed = new Discord.RichEmbed()
    .setTitle('User is not in channel!')
    .setColor(config.red)
    .setDescription(`${message.author}, you are not not in a voice channel dummy..`);
    message.channel.send(embed);
  } else {
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
