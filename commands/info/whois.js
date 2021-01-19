const Discord = require('discord.js');
const moment = require('moment')

module.exports = {
    name: "who",
    aliases: ["userinfo"],
    category: "info",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {
        const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member || message.author;

        if (message.mentions.users.size > 0) {
            const embed = new Discord.MessageEmbed()
                .setColor(0xFFFF00)
                .setTitle(`User info for ${message.mentions.users.first().username}:`)
                .setDescription(`**Joined on:** ${moment(member.joinedAt).format('LL LTS')}\n**Created on**: ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`)
                .addFields([
                    {
                        name: 'Roles',
                        value: member.roles.cache ? member.roles.cache.filter(role => role.name !== '@everyone').map(roles => `${roles}`).join(', ') : 'None'
                    }
                ])

            message.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(0xFFFF00)
                .setTitle(`User info for ${message.author.username}:`)
                .setDescription(`**Joined on:** ${moment(member.joinedAt).format('LL LTS')}\n**Created on**: ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`)
                .addFields([
                    {
                        name: 'Roles',
                        value: member.roles.cache ? member.roles.cache.filter(role => role.name !== '@everyone').map(roles => `${roles}`).join(', ') : 'None'
                    }
                ])
            message.channel.send(embed);
        }
    }
}