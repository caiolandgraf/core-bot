module.exports = async (client, Discord, message, args, db, config) => {
    var usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = message.author;


	let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle("Clique aqui para baixar a foto!")
        .setDescription(`Foto de perfil de ${usuario1}`)
        .setImage(avatar)
        .setURL(avatar)
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}