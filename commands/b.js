const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var user, dane, lmessage;
    let dane2;

    user = args[0];
    if(user != null) {
        user = user.replace('<@', '');
        user = user.replace('>', '');
    }

    dane = client.users.get(user);

    console.log(dane2);

    var embed = new Discord.RichEmbed()
        .setTitle("Debug użytkownika: "+dane.username)
        .setColor("GOLD")
        .addField("ClientID", dane.id)
        .addField("AvatarID", dane.avatar)
        .addField("isBot", dane.bot);
        if(dane.lastMessage != null) {
        embed
        .addBlankField()
        .addField("LastMessageID", dane.lastMessageID)
        .addField("LastMessage", dane.lastMessage.content)
        .addField("LastMessage_Channel", dane.lastMessage.channel.name)
        .addField("LastMessage_Type", dane.lastMessage.channel.type);
    }
    
    message.channel.send(embed);
}