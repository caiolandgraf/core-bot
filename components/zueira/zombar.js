module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = null;
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    if (usuario == null) {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} zombou de si mesmo!`)
            .setImage("https://img.ibxk.com.br/2015/05/29/29131059399104.gif")
            .setColor("44475a")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} zombou de ${usuario}!`)
            .setImage("https://img.ibxk.com.br/2015/05/29/29130519988082.gif")
            .setColor("44475a")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    }
}