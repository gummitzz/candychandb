const Discord = module.require("discord.js");
module.exports.run = async (client, message, args) => 
{
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  const serving =(`Serving ${client.guilds.size} servers`)
   await message.channel.send(serving);
  }

