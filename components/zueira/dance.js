module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    let avatar = message.author.displayAvatarURL().replace("webp", "png")
    if (!usuario1) usuario1 = null;

    let msg = null;
    let gif = null;
    if (usuario1 == null) {
        msg = `${message.author} dançou sozinho!`;
        gif = "https://images.uncyc.org/pt/a/a1/Batima9.gif";
    } else {
        msg = `${message.author} dançou com ${usuario1}!`;
        gif = "https://i.makeagif.com/media/12-17-2015/TWuqTM.gif";
    }

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(msg)
        .setImage(gif)
        .setColor("44475a")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}