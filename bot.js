const Discord = require('discord.js');
const client = new Discord.Client();
console.log("2oLF");
var prefix = ".";
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

client.login(process.env.BOT_TOKEN);
