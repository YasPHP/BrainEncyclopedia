const { execute } = require("./on");

module.exports = {
    name: 'frontal_lobe',
    description: 'info on the amygdala',
    execute(message, args, Discord){
        const newFrontalLobe = new Discord.MessageEmbed()
        .setColor('#FC773E')
        .setTitle('Frontal Lobe')
        .setURL()
        .setDescription('What is the Frontal Lobe?')
        .addFields(

            {name: 'Brain Region:', value:'Limbic System'},
            {name: 'Function:', value:'Emotions'},
            {name: 'Motto', value:'Fight or Flight'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/2/2f/MRI_Location_Amygdala_up.png')
        .setFooter('The Brain Encyclopedia retrieved the Frontal Lobe');
        
        message.channel.send(newFrontalLobe);
    }  
}
