const Discord = require ("discord.js");


module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(["ADMINISTRATOR"])) {
    return;
    }
    
    let toMessage = message.mentions.members.first();
    let messageToSend = args.slice(1).join(" ");

    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username} told be to send this message to you:**\n${messageToSend}`)
        .setColor("#2A5B5F");

    toMessage.send(embed);
    message.delete().catch();
}

