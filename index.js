const {
  Discord, queue, db, config, express,
  moment, execute, skip, stop,
  mod, hogwarts, zueira, _default,
} = require("./scripts/bootstrap")

const keepAlive = require('./scripts/server');
keepAlive();

const client = new Discord.Client();
const formatData = require("./scripts/boot/formatData")
moment.locale("pt-BR")
client.execute = execute
client.skip = skip
client.stop = stop

//? init
client.on('ready', () => {
  console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, e ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores!`)
    
    let table = [
        { name: 'Comandos atualizados', type: 'STREAMING' },
        { name: `${config.prefix} é meu prefixo`, type: 'STREAMING' },
        { name: 'deułx#0707 é meu criador! :)', type: 'STREAMING' },
        { name: `Mais de 90 comandos disponíveis`, type: 'PLAYING' },
        { name: `Estou em ${client.guilds.cache.size} server`, type: 'STREAMING' },
        { name: `Estou sendo desenvolvido ainda`, type: 'STREAMING' }
    ];

    function setStatus() {
        let altstatus = table[Math.floor(Math.random() * table.length)]

        client.user.setActivity(altstatus.name, {
                type: altstatus.type,
                name: config.name,
	        url: "https://www.twitch.tv/f0xitoo"
        })
    }
    setStatus();
    setInterval(() => setStatus(), 15000)

  try {
    let canal = client.channels.cache.get("719624127480332288");
    let embed = new Discord.MessageEmbed()
      .setColor("random")
      .setTitle(":blue_circle: BOT ON")
      .setDescription(`:loudspeaker: O ${config.name} está online novamente! :loudspeaker:`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(config.footer)
      .setTimestamp()

    canal.send(embed)
  } catch (e) {
    console.log(e)
  }
})

//? enter in guild
client.on("guildCreate", guild => {

  db.set(guild.id, [{
    "channelId": null,
    "channelByeId": null,

    "muteRoleId": null,
    "logChat": null,

    "autoRole1": null,
    "autoRole2": null,
    "autoRole3": null,
  }]).write()

  try {
    let canal = client.channels.cache.get("719624127480332288");
    let embed = new Discord.MessageEmbed()
      .setColor("f987ff")
      .setTitle(":purple_circle: O bot entrou em um novo server!")
      .setDescription(`:loudspeaker: O ${config.name} entrou no: ${guild.name}! Ele tem: ${guild.memberCount} membros! :loudspeaker:`)
      .setThumbnail("https://www.suporteinformatika.com.br/MeaBot/images/profile-new.jpg")
      .setFooter(config.footer)
      .setTimestamp()

    canal.send(embed)
  } catch (e) {
    console.log(e)
  }

  console.log(`O bot entrou nos servidores: ${guild.name} (id: ${guild.id}). População ${guild.memberCount} membros!`);
})

//? exit in guild
client.on("guildDelete", guild => {

  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id}). População ${guild.memberCount} membros!`);

  try {
    let canal = client.channels.cache.get("719624127480332288");
    let embed = new Discord.MessageEmbed()
      .setColor("f987ff")
      .setTitle(":red_circle: O bot saiu de um server!")
      .setDescription(`:loudspeaker: O ${config.name} saiu no: ${guild.name}! Ele tem: ${guild.memberCount} membros! :loudspeaker:`)
      .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
      .setFooter(config.footer)
      .setTimestamp()

    canal.send(embed)
  } catch (e) {
    console.log(e)
  }
})

//? welcome message
client.on("guildMemberAdd", async member => {

  let autoRole1 = db.get(member.guild.id).find().value().autoRole1;
  let autoRole2 = db.get(member.guild.id).find().value().autoRole2;
  let autoRole3 = db.get(member.guild.id).find().value().autoRole3;

  if (autoRole1 != null) {
    await (member.roles.add(autoRole1));
  }
  if (autoRole2 != null) {
    await (member.roles.add(autoRole2));
  }
  if (autoRole3 != null) {
    await (member.roles.add(autoRole3));
  }
})

//? goodbye message
client.on("guildMemberRemove", async member => {

})

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;

    const args = message.content.split(" ");

    if (mod[args[0]]) {
      mod[args[0]](client, Discord, message, args, db, config);
      return;

    } else if (hogwarts[args[0]]) {
      hogwarts[args[0]](client, Discord, message, args, db, config);
      return;

    } else if (zueira[args[0]]) {
      zueira[args[0]](client, Discord, message, args, db, config);
      return;
	  
    } else if (_default[args[0]]) {
      _default[args[0]](client, Discord, message, args, db, config);
      return;
    }
  });

client.login(config.token)
