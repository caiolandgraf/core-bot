module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }

    let autoRole1 = db.get(message.guild.id).find().value().autoRole1;
    let autoRole2 = db.get(message.guild.id).find().value().autoRole2;
    let autoRole3 = db.get(message.guild.id).find().value().autoRole3;
	let avatar = message.author.displayAvatarURL().replace("webp", "png")

        let embed = new Discord.MessageEmbed()
            .setColor("44475a")
            .setTitle(`Cargos do auto role`)
            .setDescription(`Cargos do auto role`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")

            .addField("1 ➜", `<@&${autoRole1}>`)
            .addField("2 ➜", `<@&${autoRole2}>`)
            .addField("3 ➜",`<@&${autoRole3}>`)

            .setFooter(config.footer, avatar)
            .setTimestamp()

        const m = message.channel.send(embed)
}