const Discord = require("discord.js");
const Client = new Discord.Client({
    intents : [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = ("!");

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "salut"){
        message.reply("salut !");
    }

    if(message.content === prefix + "statue bot"){
        message.reply("__**toujour en dévlopement**__\n pour une meilleur efficaciter")
    }

    if(message.content === prefix + "aide"){
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("__**Liste des commandes**__")
        .setAuthor("linitroc#6840", "https://funky-emu.net/uploads/monthly_2018_02/Avatar.thumb.png.78c55fa33c036539e08d453287484183.png")
        .setThumbnail("https://media.discordapp.net/attachments/795261482522378270/858299692910641162/rft.PNG?width=676&height=676")
        .addField("!salut", "envoie salut")
        .addField("!statue bot", "vous envoie si le bot est terminer ou pas")
        .addField("!règle", "pour vous rappeler des règle")
        .setTimestamp()
        .setFooter("Ce bot appartient à tyrus communauter", "https://media.discordapp.net/attachments/795261482522378270/858299692910641162/rft.PNG?width=676&height=676")

        message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "règle"){
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("__**Règle du Bien êtres du serveur**__")
        .setDescription(" - Soyez respectueux, courtois, polie  envers les utilisateurs et le staff. Bonjour, Merci, Au revoir n'ont jamais tué personne, vous pouvez être plus familier également, on est pas dans une entreprise non plus ('si c'est pas respecter c'est pas si grave)\n - Ne dévoilez sous aucun prétexte vos informations de compte, même à un membre\n • Le NFSW est interdit sur le serv et sera sanctionné\n • Le racisme et le harcèlement sont interdit et seront sanctionnés par un Ban\n • Pseudonymes, nom ou propos à caractère, sexuel, homophobe, est interdit il y a des mineurs donc respectez\n __**SANCTION**__ :\n (Le bannissement peut arriver au bout du 3e avertissements )\n • Seuls les administrateur sont en mesures de faire respecter le règlement mentions de rôles sont à éviter sauf en cas d'urgence pour accepter le règlement du serveur veuillez interagir avec la réaction ci-dessous !")
        .setAuthor("linitroc#6840", "https://funky-emu.net/uploads/monthly_2018_02/Avatar.thumb.png.78c55fa33c036539e08d453287484183.png")
        .setThumbnail("https://media.discordapp.net/attachments/795261482522378270/858299692910641162/rft.PNG?width=676&height=676")
        .setTimestamp()
        .setFooter("Ce bot appartient à tyrus communauter", "https://media.discordapp.net/attachments/795261482522378270/858299692910641162/rft.PNG?width=676&height=676")

        message.channel.send({ embeds: [embed]});
    }

});
















































































Client.login("OTA5Mzk0MTU2ODY5Mjc5NzU0.YZDpTg.zMC1Z_kvws4DfFdyct1Lzaye64M");