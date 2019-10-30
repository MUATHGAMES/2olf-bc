const Discord = require('discord.js');
const client = new Discord.Client();
console.log("3bker");
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

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : darkxx`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : black ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!bc |mahmod AR |server`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);
