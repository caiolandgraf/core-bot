module.exports = async (client, Discord, message, args, db, config) => {
    var usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setDescription(`${message.author} fez fuc fuc com ${usuario1}`)
        .setImage("https://33.media.tumblr.com/62c34daeef3233ab8cbd4aba313dd5d1/tumblr_nccmq6vn6r1tgv7igo6_500.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}