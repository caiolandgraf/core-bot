module.exports = async (client, Discord, message, args, db, config) => {
    var usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setDescription(`${message.author} deu um tapão em ${usuario1}!`)
        .setImage("https://media1.tenor.com/images/0cdae41362d61073f6322f31f8061e9a/tenor.gif?itemid=15133965")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}