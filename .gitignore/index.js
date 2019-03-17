const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("BotMusic, -Help");
    console.log("Le bot a bien ete connecter");
});

bot.login("NTU2NTgyNTU0NDI2MTQ2ODM3.D28PXg.Uno2rhA1miNxQqauGBiQiSce5Dg");
