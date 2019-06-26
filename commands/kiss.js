const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    
    const sayMessage = args.join(" ");
    const er = message.author.tag
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server to kiss them :3");
  
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage +'has been kissed by '+ '@'+er);
  message.channel.send({file: 'https://images-ext-2.discordapp.net/external/jqbMG7I5LT9a19e8ChkcmbGFLksP5Id8F0YP3yEcR8M/https/cdn.weeb.sh/images/SJSr3TOv-.gif'});
  }



  
