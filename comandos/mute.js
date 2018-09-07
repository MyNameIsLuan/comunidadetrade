const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
    let member = message.mentions.members.first();
    if(!member)

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    let muterole = message.guild.roles.find("name", "Mutado");
    if(!muterole){
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch (a) {
            console.error(a.stack);
        }
    }
    
    member.addRole(muterole)
     
      
    const mutado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Mutado`)
        .setDescription(`**${member.user.tag}** foi mutado no servidor! :worried:`)
        .setColor("#aa0303")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Comunidade trade")
    message.channel.send(mutado)
}
