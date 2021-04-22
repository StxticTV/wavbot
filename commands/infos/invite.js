module.exports = {
    name: 'invite',
    aliases: ['inv'],
    category: 'Infos',
    utilisation: '{prefix}invite',
    description: 'Gives the link to invite me in your server',
    
    execute(client, message) {
        message.channel.send({
            embed: {
                color: 'BLACK',
                fields: [
                    { name: 'Links', value: '[Official Discord](https://discord.gg/JeenMSREZP)\n [Add Me](https://discord.com/api/oauth2/authorize?client_id=833481457346412564&permissions=8&scope=bot)', inline: true },
                ],
                timestamp: new Date(),
            },
        });
    },
};