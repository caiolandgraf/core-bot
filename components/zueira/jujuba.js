module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL().replace("webp", "png")
    
    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle(`Jujubinha!`)
        .setDescription(`Jujuba é a uma pessoa incrível desse mundo inteiro! Amo ela`)
        .setFooter(config.footer, avatar)
        .setImage("https://cdn.dribbble.com/users/118459/screenshots/1638452/heartgif.gif")
        .setThumbnail("https://cdn.discordapp.com/avatars/627846465653571605/d6bd4e6a15c6244ecc5e39019a3a89f5.webp")
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)


}