const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const Client = new Discord.Client;

const prefix = "*";

var list = [];

Client.on("ready", () => {
    console.log("Bot online");
});

 Client.on("message", message => {
     if(message.content.startsWith(prefix + "p")){
         if(message.member.voice.channel){
             message.member.voice.channel.join().then(connection => {
                 let args = message.content.split(" ");
                 
                 if(!args[1]){
                     message.reply("Lien de la vidéo non ou mal mentionné");
                     connection.disconnect();
                    }
                 else {
                    let discpatcher = connection.play(ytdl(args[1], { quality: "highestaudio"}));
                

                    discpatcher.on("fisnish", () => {
                        discpatcher.detroy();
                        connection.discornnect();
                    });

                        discpatcher.on("error", err => {
                            console.log("erreur de dispatcher : " + err);
                        });
                 }                    
             }).catch(err => { 
                 message.reply("**Erreur lors de la connexion** : " + err);
             });
         }
         else {
            message.reply("**Vous n'êtes pas connecté en vocal.**");
         }   
     } 
  });



Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    //*cute
    if(message.content == prefix + "cute"){
        var embed = new Discord.MessageEmbed()
        .setColor("#3A3838")
        .setTitle("BEST WAIFU")
        .setImage("https://i.imgur.com/JpEQtd0.jpg")
        .setTimestamp()
        .setFooter("Dark", "https://i.imgur.com/I3RFDJl.jpg", "https://disboard.org/fr/server/774985421951205376")
    }
    

    message.channel.send(embed); 
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    //*cute
    if(message.content == prefix + "cute2"){
        var embed = new Discord.MessageEmbed()
        .setColor("#3A3838")
        .setFooter("Dark", "https://i.imgur.com/I3RFDJl.jpg", "https://disboard.org/fr/server/774985421951205376")
        .setTitle("BEST WAIFU")
        .setImage("https://i.imgur.com/4HpoIEa.jpg")
        .setTimestamp()
    }
    

    message.channel.send(embed); 
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    //*cute
    if(message.content == prefix + "cute3"){
        var embed = new Discord.MessageEmbed()
        .setColor("#3A3838")
        .setFooter("Dark", "https://i.imgur.com/I3RFDJl.jpg", "https://disboard.org/fr/server/774985421951205376")
        .setTitle("BEST WAIFU")
        .setImage("https://i.imgur.com/awm030g.jpeg")
        .setTimestamp()
    }
    

    message.channel.send(embed); 
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    //*cute
    if(message.content == prefix + "cute4"){
        var embed = new Discord.MessageEmbed()
        .setColor("#3A3838")
        .setFooter("Dark", "https://i.imgur.com/I3RFDJl.jpg", "https://disboard.org/fr/server/774985421951205376")
        .setTitle("BEST WAIFU")
        .setImage("https://i.imgur.com/HntVYv5.jpeg")
        .setTimestamp()
    }
    

    message.channel.send(embed); 
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    //*cute
    if(message.content == prefix + "cute5"){
        var embed = new Discord.MessageEmbed()
        .setColor("#3A3838")
        .setFooter("Dark", "https://i.imgur.com/I3RFDJl.jpg", "https://disboard.org/fr/server/774985421951205376")
        .setTitle("BEST WAIFU")
        .setImage("https://i.imgur.com/WwW3Xb1.jpg")
        .setTimestamp()
    }
    

    message.channel.send(embed); 
});

Client.on("message", message => {
    if(message.author.bot) return;
      if(message.channel.type == "dm") message.reply("**je ne repond pas au dm**");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    //*cute
    if(message.content == prefix + "twerk"){
        var embed = new Discord.MessageEmbed()
        .setColor("#3A3838")
        .setTitle("BEST TWERK")
        .setImage("https://i.imgur.com/01bMfzy.gif")
        .setTimestamp()
        .setFooter("Dark", "https://i.imgur.com/I3RFDJl.jpg", "https://disboard.org/fr/server/774985421951205376")
    }
    

    message.channel.send(embed); 
});



Client.login("Nzk3MTM5MDQ0Mzk1Nzc4MDc4.X_iHlg.aWKEYOIblwSQ9rtDtPFArbb5Kow");
