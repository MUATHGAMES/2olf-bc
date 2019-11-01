const Discord = require('discord.js');
const client = new Discord.Client();
console.log("2oLF");
const prefix = ".";
client.on("message", message => {

            if (message.content.startsWith(prefix + "la")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


const developers = ['536009907120504847','624551532431409152'];
 
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setGame(argresult);
      message.channel.send(`**→ | Changed the Bot PLAYING to » __${argresult}__**.`)
  } else
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**→ | Changed the Bot WATCHING to » __${argresult}__**.`)
  } else
  if (message.content.startsWith(prefix + 'setlisten')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**→ | Changed the Bot LISTENING to » __${argresult}__**.`)
  } else
  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/2olf");
      message.channel.send(`**→ | Changed the Bot STREAMING to » __${argresult}__**.`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**→ | Changed the Bot NAME to » __${argresult}__**.`)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**→ | Changed the Bot AVATAR to » __${argresult}__**.`);
}
});

client.login(process.env.BOT_TOKEN);
