const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) 
  {
      return message.channel.send("У вас недостаточно прав!");
  }
  let user = message.mentions.users.first();
  if (!user) return message.channel.send("Пожалуйста, укажите пользователя!");
  let amount = args[1];
  if (!amount || isNaN(amount)) return message.reply("Пожалуйста, укажите действительную сумму.");
  let data = client.eco.addMoney(user.id, parseInt(amount));
  const embed = new MessageEmbed()
      .setTitle(`СМ добавлены!`)
      .addField(`Участник`, `<@${data.user}>`)
      .addField(`Добавлено`, `${data.amount} см`)
      .addField(`Писька`, data.after + ` см`)
      .setColor("#rrggbb")
      .setThumbnail(user.displayAvatarURL())
      .setTimestamp();
  return message.channel.send(embed);
}

exports.help = {
    name: "addcm",
    aliases: ["addbal"],
    usage: `addcm @user <количество>`
}
