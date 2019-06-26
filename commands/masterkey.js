const Discord = module.require("discord.js");
module.exports.run = async (client, message, args) => 
{
  
    if (message.author.id !== '266561198303084544') return message.channel.send("u cant use this")
    // Your Command Here
 await message.channel.send("user confirmed as Shaa , Granted Admin permissions on all servers the bot is in GG")
}
  
  
