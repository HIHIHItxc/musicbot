module.exports = {
    name: 'redgreenblue',
    aliases: [],
    category: 'Botcom',
    utilisation: '{prefix}rgb',

    execute(client, message) {
        const rvalue = Math.floor(Math.random() * 255) + 1
        const gvalue = Math.floor(Math.random() * 255) + 1
        const bvalue = Math.floor(Math.random() * 255) + 1

        const rgbEmbed = new Discord.MessageEmbed()
            .setColor([rvalue, gvalue, bvalue])
            .setTitle('This is your lucky colour!')
            .setDescription('RGB values: ' + rvalue + ', ' + gvalue +', ' + bvalue)
        message.channel.send(rgbEmbed)
    },
};