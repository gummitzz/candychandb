const randomPuppy = require("random-puppy");
const request = require("snekfetch");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let sReddits = [`${args.join(" ")}`];
  if (args.join(" ").toLowerCase().includes("nsfw") && !message.channel.nsfw) {
    return message.reply("Please use this in a NSFW channel.");
  } else {
    let s = sReddits[Math.round(Math.random() * (sReddits.length - 1))];
    try {
      randomPuppy(s)
        .then(async url => {
          let fileType = url.slice(-3);

          if (fileType == "gif") {
            request.get(url).then(async r => {
              let x = await fs.writeFile("./download.gif", r.body);
              message.channel.send({
                file: "./download.gif"
              });
            });
          } else {
            request.get(url).then(async r => {
              message.channel.send({
                file: r.body
              });
            });
          }
        });
    } catch (e) {
      message.reply(`An error ocurred. Are you sure this is a valid subreddit?\nConsole error:${e}`);
    }
  }
}