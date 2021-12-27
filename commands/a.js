const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Pilny Komunikat!")
        .setColor("GOLD")
        .setDescription("Przerwa techniczna w dostarczaniu usług przez ExecStudio")
        .setImage("https://i.imgur.com/V0hti2D.jpg");
    message.channel.send(embed);
}