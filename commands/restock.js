const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345



  let sCoins = coins[message.author.id].coins;



  coins[message.author.id] = {
    coins: sCoins + parseInt(200)
  };




  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
    
  });


  }


module.exports.help = {
  name: "pay"
}