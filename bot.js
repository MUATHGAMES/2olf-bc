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

client.on("message", msg =>{
 if(!msg.guild.member(msg.author).hasPermissions('ADMINISTRATOR')) return msg.reply('❌ **يجب ان تكون لديك صلاحيات كافية**');
if(!msg.guild.member(client.user).hasPermissions(['ADMINISTRATOR'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
var args = msg.content.split(" ").slice(1).join(" ")
if(!args) return;
if(msg.content.startsWith(prefix + "seticon")) {
msg.guild.setIcon(args)
 .then(msg.reply("**تم تغيير صورة السيرفر ✅ **"))
 .catch(msg.reply("**رابط الصورة غير صحيح**"));
}else if(msg.content.startsWith(prefix + "setname")) {
   msg.guild.setName(args)
 .then(g => msg.reply(`**تم تغيير الاسم الى   ${g} :white_check_mark:**`))
 .catch(console.error);
}
});

client.login(process.env.BOT_TOKEN);
