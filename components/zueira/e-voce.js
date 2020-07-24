module.exports = async (clien, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setDescription(`${usuario1} é você que... o/a ${message.author}`)
        .setImage("https://media1.tenor.com/images/6e817cb96215c3a18973e708ea09e16c/tenor.gif?itemid=8826760")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}