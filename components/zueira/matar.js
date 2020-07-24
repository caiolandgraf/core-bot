module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = null;
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    if (usuario == null) {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} se suicidou! press "f" to respect`)
            .setImage("https://media1.giphy.com/media/wEVWyePowLHNK/source.gif")
            .setColor("44475a")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} matou ${usuario}! press "f" to respect`)
            .setImage("https://thumbs.gfycat.com/SpryColorlessLark-small.gif")
            .setColor("44475a")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    }
}