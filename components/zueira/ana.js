module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle(`Ana é muito gostosa!`)
        .setDescription(`${message.author.username} heheheh`)
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}