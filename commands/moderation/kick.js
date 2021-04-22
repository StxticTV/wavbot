module.exports = {
    name: 'kick',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}kick [user] <reason>',
    description: 'Kicks the user mentioned if the author have the permissions',
    
    execute(client, message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send("You do not have permissions to kick members!").then(msg => {
        msg.delete({ timeout: 2000 })
    })
        const member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!member)
            return message.channel.send("Please specify an user to kick").then(msg => {
        msg.delete({ timeout: 2000 })
    })
        if (!member.kickable)
            return message.channel.send("This user can not be kicked!").then(msg => {
        msg.delete({ timeout: 2000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked, no reason was provided`);
            })
            if (reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked for ${reason}`);
            })
        }
    }
}