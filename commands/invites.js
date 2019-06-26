const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let iUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.member;
    let Invites = 0;
    message.guild.fetchInvites().then(res => {
        res.forEach(inv => {
            if (inv.inviter.id == iUser.id) {
                inv.Count += inv.uses
            }
        })
    }).then(g => {
        let embed = new Discord.RichEmbed()
            .setAuthor("Invite System")
            .setColor("#2A5B5F")
            .setDescription(message.member + " has " + Invites + " invites ")
            .setTimestamp()
            .setFooter("Shaa's Bot©", bot.user.avatarURL);
        message.channel.send(embed);
    });
}
