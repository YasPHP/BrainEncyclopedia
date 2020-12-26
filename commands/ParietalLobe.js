const { execute } = require("./on");

module.exports = {
    name: 'ParietalLobe',
    description: 'info on the amygdala',
    execute(message, args, Discord){
        const newParietalLobe = new Discord.MessageEmbed()
        .setColor('#FC773E')
        .setTitle('Parietal Lobe')
        .setURL()
        .setDescription('What is the Parietal Lobe?')
        .addFields(

            {name: 'Brain Region:', value:'Limbic System'},
            {name: 'Function:', value:'Emotions'},
            {name: 'Motto', value:'Fight or Flight'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/2/2f/MRI_Location_Amygdala_up.png')
        .setFooter('The Brain Encyclopedia retrieved the Parietal Lobe');
        
        message.channel.send(newParietalLobe);
    }  
}
