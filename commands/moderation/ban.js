module.exports = {
    name: 'ban',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}ban [member] <reason>',
    description: 'Bans the users if the author have the permissions',

    async execute(client, message, args) {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You do not have permissions to ban members!").then(msg => { msg.delete({ timeout: 2000 }) });

        const member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if (!member) return message.channel.send("Please specify a user").then(msg => { msg.delete({ timeout: 2000 }) });

        if (member.hasPermission('VIEW_AUDIT_LOG')) return message.channel.send("This user can not be banned!").then(msg => { msg.delete({ timeout: 2000 }) });

        const reason = args.slice(1).join(" ") || 'No reason provided';

        await message.guild.members.ban(member.id, { reason: reason, days: 7 }).then(member => {
            message.channel.send(`**${member.tag}** was banned for **${reason}**`);
        })

    },

};