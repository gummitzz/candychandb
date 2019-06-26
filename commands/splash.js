const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
  
 

  
  let uCoins = coins[message.author.id].coins;

  let sCoins = coins[message.author.id].coins;
let min = 20
  if(uCoins < min) return message.reply("Not enough cummies!");

  coins[message.author.id] = {
    coins: sCoins - parseInt(20)
  };

const tomute= message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
const mutetime="240000"
let muterole = message.guild.roles.find(role => role.name === "splashu")

  message.channel.send(message.author+ " has splashed " +tomute )
    await(tomute.addRole(muterole.id));

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
    setTimeout(function(){
    tomute.removeRole(muterole.id);
   message.channel.send("splash has expired on"+`<@${tomute.id}>!`);
  }, ms("240000"));


   
  });


}