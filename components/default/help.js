module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
	let avatar = usuario.displayAvatarURL().replace("webp", "png")

    if (args[1] == 2) {
        let embed = new Discord.MessageEmbed()
            .setColor("44475a")
            .setTitle("🔮 Meus comandos! - 2")
            .setDescription(`${usuario} aqui estão meus comandos! OBS: os que tem "*" a menção é obrigatória!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer, avatar)
            .setTimestamp()

            .addField(`**●▬๑♆PARA MODERAÇÃO! - 2**`, "---")
            .addField(`***${config.prefix}tw / <título> / <texto>**`, "Para fazer anuncios!")
            .addField(`***${config.prefix}set-bye <chat>**`, "Setar chat de boas vindas!")
            .addField(`***${config.prefix}set-log <chat>**`, "Define para onde as mensagens de punição vão!")
            .addField(`***${config.prefix}auto-role <cargo1> <cargo2> <cargo3>**`, "Define os cargos do auto-role (cargos 2 e 3 não são obrigatórios)!")
            .addField(`***${config.prefix}add-role <usuário> <cargo>**`, "Adiciona um cargo ao usuários!")
            .addField(`***${config.prefix}remove-role <usuário> <cargo>**`, "Remove um cargo do usuários!")
            .addField(`***${config.prefix}warn <usuário> <motivo>**`, "Avisa o usuário!")
            .addField(`***${config.prefix}map / <titulo1> / <desc1> / <chat1> / <titulo2> / <desc2> / <chat2> / <titulo3> / <desc3> / <chat3> / <titulo4> / <desc4> / <chat4> / <titulo5> / <desc5> / <chat5>**`, "Cria um mapa do servidor!")
            .addField(`**${config.prefix}avatar <usuário>**`, "Te da o avatar do usuário!")
            .addField(`***${config.prefix}rolelist <cargo>**`, "Te da todos os usuários que tem certo cargo!")

            .addField(`**●▬๑♆PARA ZUAR! - 2**`, "---")
            .addField(`***${config.prefix}pat <usuário>**`, "Para fazer um cafuné gostozinho!")
            .addField(`***${config.prefix}tt <para quem> / <texto>**`, "Envia uma carta pelo correio para o usuário!")
            .addField(`**${config.prefix}matar <usuário>**`, "MATAAAAA!")
            .addField(`**${config.prefix}zombar <usuário>**`, "Há! GAYYYYYYYYYY!")
            .addField(`**${config.prefix}boa-tarde <usuário>**`, "TARDE!")
            .addField(`**${config.prefix}boa-noite <usuário>**`, "noite noite!")
            .addField(`**${config.prefix}seboso <usuário>**`, "NHENHENHENHE SEBOSO!")
            .addField(`***${config.prefix}ship <usuário1> <usuário2>**`, "Será que formam um belo casal?")
            .addField(`**${config.prefix}gado <usuário>**`, "Será que é gado?")

            .addField(`**●▬๑♆PROXIMA PÁGINA!**`, `${config.prefix}help 3`)

            .setImage("https://i.gifer.com/JlYQ.gif")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    } else if (args[1] == 3) {
        let embed = new Discord.MessageEmbed()
            .setColor("44475a")
            .setTitle("🔮 Meus comandos! - 3")
            .setDescription(`${usuario} aqui estão meus comandos! OBS: os que tem "*" a menção é obrigatória!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer, avatar)
            .setTimestamp()

            .addField(`**●▬๑♆MINIGAMES!**`, "---")
            .addField(`**${config.prefix}dino**`, "Chrome Dinosaur!")
            .addField(`**${config.prefix}mario**`, "Its a my! Mario!")
            .addField(`**${config.prefix}pac**`, "BIP BIP BIP!")
            .addField(`**${config.prefix}sonic**`, "zuuumm!")

            .addField(`**●▬๑♆DJ!**`, "---")
            .addField(`***${config.prefix}play <link do video>**`, "O DJ AirBot vai soltar aquele batidão")
            .addField(`***${config.prefix}skip**`, "O DJ AirBot vai pular a música")
            .addField(`***${config.prefix}stop**`, "O DJ AirBot vai parar a música")

            .addField(`**●▬๑♆PARA ZUAR! - 2**`, "---")
            .addField(`***${config.prefix}tapa <usuário>**`, "TAPAAAA")

            .addField(`**●▬๑♆EXTRAS!**`, "---")
            .addField(`**${config.prefix}status**`, "Mostra os status do bot!")
            .addField(`**${config.prefix}partners**`, "Mostra os melhores servers do mundo!")
            .addField(`**${config.prefix}invite**`, "Te da o convite do bot!")
            .addField(`**${config.prefix}suporte**`, "Te da o convite para entrar no servidor de suporte!")
            .addField(`**${config.prefix}stafflist**`, "Te da o convite para entrar no servidor de suporte!")

            .setImage("https://i.gifer.com/JlYQ.gif")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    } else if (args[1] == "esp") {
        let embed = new Discord.MessageEmbed()
            .setColor("44475a")
            .setTitle("🔮 Meus comandos! - Especial Dia Dos Namorados!")
            .setDescription(`${usuario} aqui estão meus comandos! OBS: os que tem "*" a menção é obrigatória!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer, avatar)
            .setTimestamp()

            .addField(`**♥▬๑♆COMANDOS!**`, "♥♥♥")
            .addField(`***${config.prefix}namoro <usuario>**`, "Pedido de namoro!")
            .addField(`***${config.prefix}presente <usuario>**`, "Da um incrivel presente!")
            .addField(`***${config.prefix}todo-amor-do-mundo <usuario>**`, "Da todo o amor do mundo!")
            .addField(`***${config.prefix}e-voce <usuario>**`, "Muitos elogios, de uma só vez!")
            .addField(`***${config.prefix}abraco-maravilha <usuario>**`, "Da o abraço com todo amor do mundo!")

            .setImage("https://i.pinimg.com/originals/0e/8f/93/0e8f9366cb396a13485588c267750ddd.gif")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle("🔮 Meus comandos!")
        .setDescription(`${usuario} aqui estão meus comandos! OBS: os que tem "*" a menção é obrigatória!`)
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer, avatar)
        .setTimestamp()

        .addField(`**●▬๑♆PARA MODERAÇÃO!**`, "---")
        .addField(`***${config.prefix}ban <usuário>**`, "Para banir um usuário quejá está incomodando!")
        .addField(`***${config.prefix}kick <usuário>**`, "Para expulsar um usuário chato!")
        .addField(`***${config.prefix}mute <usuário>**`, "Para mutar aquele cara trouxa!")
        .addField(`***${config.prefix}unmute <usuário>**`, "Para desmutar aquele cara trouxa!")
        .addField(`***${config.prefix}perfil <usuário>**`, "Pegar as informações do usuário!")
        .addField(`**${config.prefix}serverinfo**`, "Pegar as informações do server!")
        .addField(`***${config.prefix}set-welcome <chat>**`, "Setar chat de boas vindas!")
        .addField(`***${config.prefix}mute-role <cargo>**`, "Setar o cargo de mute (recomendação: use o da Loritta)!")
        .addField(`**${config.prefix}clear <quantidade de mensagens>**`, "Para apagar as mensagens de algum chat (de 2 a 100 por vez)!")

        .addField(`**●▬๑♆PARA ZUAR!**`, "---")
        .addField(`***${config.prefix}kiss <usuário>**`, "Para dar aquele beijão no/na crush!")
        .addField(`***${config.prefix}hug <usuário>**`, "Para dar aquele abraço forte no/na crush!")
        .addField(`***${config.prefix}fuzilar <usuário>**`, "Para matar aquele fi da mãe!")
        .addField(`***${config.prefix}socar <usuário>**`, "Para dar um socão!")
        .addField(`***/voadora <usuário>**`, "Para dar uma voadora linda!")
        .addField(`**${config.prefix}run <usuário>**`, "Para dar fuga!")
        .addField(`***${config.prefix}sex <usuário>**`, "Para fazer um fuc fuc!")
        .addField(`**${config.prefix}dance <usuário>**`, "Para dançar bonitu!")
        .addField(`**${config.prefix}mesmo <usuário>**`, "É mesmo é?!")
        .addField(`**${config.prefix}achou <usuário>**`, "ACHOU ERRADO OTÁRIO!")
        .addField(`**${config.prefix}bom-dia <usuário>**`, "Bom dia!")
        .addField(`**${config.prefix}alan <usuário>**`, "EINHA EINHA!")

        .addField(`**●▬๑♆PROXIMA PÁGINA!**`, `${config.prefix}help 2`)

        .setImage("https://i.gifer.com/JlYQ.gif")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}