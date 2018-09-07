const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(`você não tem permissão`).then(msg => msg.delete(6000));
 
     let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply("eu não posso banir esse usuário! Ele(a) têm um cargo maior.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    await member.ban(`Banido por: ${message.author.tag} | Motivo: ` + motivo)
        .catch(error => message.reply(`Desculpa ${message.author}, eu não poderia banir por causa de: \```js\n${error}\````));
      
      
    const banmsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Banido`)
        .setDescription(`Você foi banido do servidor **${message.guild.name}**!`)
        .setColor("#aa0303")
        .setThumbnail(member.user.avatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Comunidade Trade")
     
      
    const banido = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Banido`)
        .setDescription(`**${member.user.tag}** foi banido do servidor!`)
        .setColor("#aa0303")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Comunidade drade")
        message.channel.send(banido)
