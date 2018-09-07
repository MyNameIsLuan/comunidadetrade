const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
     let member = message.mentions.members.first();
    if(!member)
     if(!member.bannable) 
        return message.reply("eu não posso expulsar esse usuário! Ele(a) têm um cargo maior.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    await member.kick(`Expulso por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
      
      
      
    const kikado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Expulso`)
        .setDescription(`**${member.user.tag}** foi expulso do servidor! :worried:`)
        .setColor("#aa0303")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("Comunidade trade")
        message.channel.send(kikado)
    
}
