module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();

    if (!args[1]) return message.channel.send("`Você não me informou em quem quer lançar esta mágia :/`")

    if (!usuario1) usuario1 = args[1];
     let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("4affe4")
        .setDescription(`${message.author} usou finite incantatem em ${usuario1}`)
        .setImage("https://pa1.narvii.com/6520/2d363f04b16fe31dff3b79675c78eba565061a4d_00.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}