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

  function setActivity() {
    const Gameinfo = ['Under Development', `Prefix: ${config.prefix}`, 'Repo: https://bit.ly/discordsoundboard', 'Discord: https://discord.io/chillcabin'];
    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)];

    client.user.setActivity(info);
    console.log(`[Console] Activity set to (${info})`);
  }
  setInterval(setActivity, 120000);
});

client.on('message', message => {
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

client.on('voiceStateUpdate', (oldMember, newMember, message) => {
  let oldUserChannel = oldMember.voiceChannel;
  let newUserChannel = newMember.voiceChannel;

  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    console.log('User Joins a voice channel');

  } else if (newUserChannel === undefined) {
    console.log('User leaves a voice channel');
  }
});

client.login(process.env.BOT_TOKEN);
