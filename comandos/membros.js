var Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
message.channel.send(`Temos atualmente ${message.guild.memberCount} membros no grupo!`)
}
