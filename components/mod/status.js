module.exports = async (client, Discord, message, args, db, config) => {
    // const m = await message.channel.send("Carregando...")
    // m.edit(`${config.status} - Eu estou em ${client.guilds.cache.size} servers! Com ${client.users.cache.size} membros!`)

    let avatar = message.author.displayAvatarURL().replace("webp", "png")
    const m = await message.channel.send("Carregando...")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle("Status! :ping_pong:")
        .addField(":grinning: Ping Externo:",
         "`"+(m.createdTimestamp - message.createdTimestamp)+"ms`", true)

        .addField(":robot: Ping Da API:", 
        "`"+Math.round(client.uptime)+"ms`", true)

         .addField(":white_check_mark: Estou em:", 
        "`"+client.guilds.cache.size+" servers`", false)

        .addField(":warning: Estou sendo usado por:", 
        "`"+client.users.cache.size+" pessoas`", false)

        .setFooter(config.footer, avatar)
        .setTimestamp()

    m.edit(``, embed)
}