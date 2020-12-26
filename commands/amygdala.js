const { execute } = require("./on");

module.exports = {
    name: 'amygdala',
    description: 'info on the amygdala',
    execute(message, args, Discord){
        const newAmygdala = new Discord.MessageEmbed()
        .setColor('#EE2677')
        .setTitle('Amygdala')
        .setURL()
        .setDescription('What is the amygdala?')
        .addFields(

            {name: 'Brain Region:', value:'Limbic System'},
            {name: 'Function:', value:'Emotions'},
            {name: 'Motto', value:'Fight or Flight'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/2/2f/MRI_Location_Amygdala_up.png')
        .setFooter('The Brain Encyclopedia retrieved the Amygdala');
        
        message.channel.send(newAmygdala);
    }  
}
