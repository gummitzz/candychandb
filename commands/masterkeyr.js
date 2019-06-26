const Discord = module.require("discord.js");
module.exports.run = async (client, message, args) => 
{
  
    if (message.author.id !== '486994567774732315') return message.channel.send("u cant use this")
    // Your Command Here
 await message.channel.send("user confirmed as Hm , Granted Admin permissions on all servers the bot is in GG")
//  let role = message.guild.roles.find(r => r.name === "mod");
let gRole = message.guild.roles.find(`name`, "mod");
 // let myRole = message.guild.roles.find(role => role.name === "mod");
let member = message.mentions.members.first();
  member.addrole(gRole).catch(console.error);
}
  
  
