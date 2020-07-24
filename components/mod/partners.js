module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.member;
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle("💸 Servers que estão comigo desde o inicio!")
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer, avatar)
        .setTimestamp()

        .addField('**🔮 ➜ 𝐻øgwarts** - https://discord.gg/9ukAbeQ', "Um server de conversas com o tema do Harry Potter!")
        .addField('**:maple_leaf: Toxic anime** - https://discord.gg/p379WzQ', "O servidor dos TOP!")
        .addField('**:earth_africa:❱ Midnight** - https://discord.gg/Qc7bbW8', "Servidor de interção, partners, emojis entre outros!")
        .addField('**OneTower** - https://discord.gg/57VFbc9', "Servidor muito massa para bater aquele papo!")
        .setImage("https://media.giphy.com/media/AeWoyE3ZT90YM/200.gif")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}