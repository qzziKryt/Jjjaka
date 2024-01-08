const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Информация`)
        .addField(`Участник`, `<@${userBalance.user}>`)
        .addField(`Писька`, `${userBalance.amount} см`)
        .addField(`Место`, userBalance.position)
        .setColor("#rrggbb")
        .setThumbnail(user.displayAvatarURL())
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "balance",
    aliases: ["info", "bal"],
    usage: `bal @user`
}
