const Discord = require('discord.js');

module.exports = {
    name: "bot",
    aliases: ["ad", "info"],
    category: "info",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor("Personal Jesus Bot", message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
        .setThumbnail("https://cdn.discordapp.com/icons/799949149868654622/222d29e65fbc4fa9a10158ac66c03100.webp")
        .setTimestamp()
        .addField("Prefix", `,`, true)
        .addField("Commands", ",help", true)
        .addField("ID", "800744571348582410", true)
        .addField("Owner", `HeuteNicht#7492`, true)
        .addField("Region", "Europe", true)
        .addField("Server Count", client.guilds.cache.size, true)
        .addField("Invite Link", "https://dsc.gg/personaljesus", false)
        .addField("My Server", "https://dsc.gg/yocker", false)
        .setColor(Math.floor(Math.random()*16777215))
        message.channel.send({embed});
    }
}