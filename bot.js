
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const setupCMD = "!createrolemessage"
const yourID = "266561198303084544";
const reactions = ["☑", "☑", "☑", "☑","☑","☑","☑","☑","☑","☑","☑","☑"];
const roles = ["Blue", "White", "Pinky pink", "Red","belize-hole","lime-stone","wet-asphalt","wisteria","turquoise","alizarin","abestos","pome"];
let initialMessage = `**React to the messages below to receive the associated Color role. If you would like to remove the role, simply remove your reaction!**`;
const express = require("express");
const app = express();
let coins = require("./coins.json");
const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const http = require('http');
let xp = require("./xp.json");
let rob = require("./resp.json")

let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));


// This loop reads the /events/ folder and attaches each event file to the appropriate event.

client.on("ready", async () => {

  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  client.user.setActivity("Shaa", {type: "WATCHING"});

});

client.on("guildMemberAdd", (member) => {
let guild = member.guild; // Reading property `guild` of guildmember object.
let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send(memberTag + " has joined!");
}
});
client.on("message", message => {

let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

 if(coinAmt === baseAmt){
    coins[message.author.id] = {
     coins: coins[message.author.id].coins + coinAmt
   };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💦", `${coinAmt} cummies added!`);

return message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
    }

 

if(message.content.includes('nigger')) { 
      message.delete()
  message.channel.send("i suggest not using that word ;)");
  let reportschannel = message.guild.channels.find(`name`, "mod-log");
    if(!reportschannel) return message.channel.send("Couldn't find mod-log.");
return reportschannel.send("<@"+message.author.id +">"+ " has said something they shouldnt have ;)")
  }
    
let myRole = message.guild.roles.find(role => role.name === "mod");
  if(message.author.role=!myRole && message.content === "@everyone") {
 message.delete()
  }



  if (message.author.bot) return;
  
  if(message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
   

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  
  

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    // .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
    
  

      });


           
        
        
    


 
client.login(discord_token);