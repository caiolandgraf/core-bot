module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = message.author;
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("4affe4")
        .setDescription(`${message.author} usou protego diabolica`)
        .setImage("https://cdn.discordapp.com/attachments/719728764237643808/724249718284353597/Protego_Diabolica_0.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}