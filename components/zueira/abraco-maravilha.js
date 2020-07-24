module.exports = async (clien, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");

    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setDescription(`${message.author} deu um abraço maravilha em ${usuario1}! O abraço com todo amor do mundo :3`)
        .setImage("https://pa1.narvii.com/6334/cc8671baffb228efcb4d90aa9bd51cac8bccf9da_hq.gif")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}