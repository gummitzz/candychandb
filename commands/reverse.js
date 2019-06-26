const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
const rev = reverseString(sayMessage);
    message.channel.send(rev);
  }



  
