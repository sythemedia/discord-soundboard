const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();


fs.readdir('./commands/', (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    console.log('Couldn\'t find commands.');
    return
  }

jsfile.forEach((files, i) => {
    let props = require(`./commands/${files}`);
    console.log(`${files} has been loaded.`);
    client.commands.set(props.help.name, props);
  })
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', message => {
  const voiceChannel = message.member.voiceChannel;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!cmd.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(client,message,args);
});

client.login(config.token);
