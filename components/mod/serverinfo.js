module.exports = async (client, Discord, message, args, db, config) => {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    const region = {
        brazil: ':flag_br: Brazil'
    }

    let gAvatar = message.guild.iconURL();
    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setAuthor('🔍 Informações do servidor')
        .setTitle(`${message.guild.name}`)
        .setThumbnail(gAvatar)
        .setFooter(config.footer, avatar)
        .setTimestamp()

        .addField('**Nome**', message.guild.name)
        .addField('**ID**', message.guild.id)
        .addField('**Dono(a)**', `${message.guild.owner.user}`, false)
        .addField('**Região**', region[message.guild.region], true)

        .addField("** :man_mage: Humanos **", message.guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField("** :robot: Bots **", message.guild.members.cache.filter(member => member.user.bot).size, true)

        .addField('**Canais**', message.guild.channels.cache.size, true)
        .addField('**Cargos**', message.guild.roles.cache.size, true)
        .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
        .addField('**Você entrou em**', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}

function formatDate(template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
    }, template)
}
