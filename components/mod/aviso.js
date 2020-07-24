module.exports = async (client, Discord, message, args, db, config) => {
    let splitarg = args.join(" ").split(" / ");
	let avatar = message.author.displayAvatarURL().replace("webp", "png")

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("você não tem permissão pra criar um anuncio")
    }

    if (args.length === 0) {
        return message.reply(`utilize: /${command} <título> / <anúncio>`)
    }
    let aTitle = splitarg[1]
    let aAnnouncement = splitarg[2]

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setAuthor("📌 ANÚNCIO")
        .setTitle(aTitle)
        .setDescription(aAnnouncement)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(config.footer, avatar)
        .setTimestamp()

        .addField('**enviado por**', message.author.username)

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}