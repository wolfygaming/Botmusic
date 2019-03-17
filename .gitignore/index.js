const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("BotMusic, -Help");
    console.log("Le bot a bien ete connecter");
});

bot.login("NTU2NTgyNTU0NDI2MTQ2ODM3.D283lQ.eS7C2FwC6A-0uL1yCo8ygVsFOjI");
