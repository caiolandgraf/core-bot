module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL().replace("webp", "png")
    const m = await message.channel.send("Ping?")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle("Pong! :ping_pong:")
        .addField(":grinning: Ping Externo:",
         "`"+(m.createdTimestamp - message.createdTimestamp)+"ms`", true)

        .addField(":robot: Ping Da API:", 
        "`"+Math.round(client.uptime)+"ms`", true)

        .setFooter(config.footer, avatar)
        .setTimestamp()

    m.edit(``, embed)
}