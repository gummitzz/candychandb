  const Discord = require("discord.js");
const discord_token = process.env.TOKEN;
const client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
if (message.author.id !== '266561198303084544') return message.channel.send("u cant use this")
    // Your Command Here
 await message.channel.send("user confirmed as Shaa , bot restarting...")
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(discord_token));
    
}


};  
        
        
    


 
