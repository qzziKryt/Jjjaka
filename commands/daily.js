module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 10);
    let daily = client.eco.daily(client.ecoAddUser, amount);
    if (daily.onCooldown) return message.reply(`${daily.time.hours} ч ${daily.time.minutes} мин ${daily.time.seconds} сек.`);
    else return message.reply(`Ваша писька на **${daily.amount}** см больше! Теперь ее длина **${daily.after}** см.`);
};

module.exports.help = {
    name: "daily",
    aliases: ["d"],
    usage: "daily"
}
