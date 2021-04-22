const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

console.log(`${bot.user.username} is online!`)

bot.user.setActivity("!hulp", {type: "PLAYING"});

})


bot.on("message", async message => {

    if(message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageErray = message.content.split(" ");

    var command = messageErray[0];

    var arguments = messageErray.slice(1)

    if( command === `${prefix}hallo`){

        return message.channel.send("Dit is de bot van Ole!")
    }

});

    bot.on("message", async message => {

        if(message.author.bot) return;
    
        if (message.channel.type === "dm") return;
    
        var prefix = botConfig.prefix;
    
        var messageErray = message.content.split(" ");
    
        var command = messageErray[0];
    
        var arguments = messageErray.slice(1)
        
        if( command === `${prefix}hulp`){
    
            const embed = new discord.MessageEmbed()
            .setThumbnail(bot.user.displayAvatarURL())
            .setTitle('Dc_Ole-Bot')
            .setColor('RANDOM') 
            .setDescription("Bot hulp Ole")
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${bot.guilds.cache.size} servers.`,
                    inline: true
                })
            message.channel.send(embed)
        }

});

bot.on("message", async message => {

    if(message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageErray = message.content.split(" ");

    var command = messageErray[0];

    var arguments = messageErray.slice(1)

    if( command === `${prefix}meme`){

        return message.channel.send("https://www.gifs.nl//media/lion-king-gifs-sQ8MX0.gif")

    }

});

bot.login(process.env.token);