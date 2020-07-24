module.exports = async (client, Discord, message, args, db, config) => {

    message.author.lastMessage.delete();

    const arg = message.content.split(`${config.prefix}say `);
    const m = await message.channel.send("Carregando...")
    m.edit(arg)
}