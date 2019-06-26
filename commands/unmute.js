const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
 if(!message.member.roles.some(r=>["Administrator", "Moderator","mod","ADMIN","Owner","OWNER","WAIFU"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(role => role.name === "muted")
  //start of create role
  
  //end of create role
  //let mutetime = args[1];
  
 // if(!mutetime) return message.reply("couldnt do it hes too powerful than me !");


  

  
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
 


//end of module
  }