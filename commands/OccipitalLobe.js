const { execute } = require("./on");

module.exports = {
    name: 'occipital_lobe',
    description: 'info on the amygdala',
    execute(message, args, Discord){
        const newOccipitalLobe = new Discord.MessageEmbed()
        .setColor('#FC773E')
        .setTitle('Occipital Lobe')
        .setURL()
        .setDescription('What is the Occipital Lobe?')
        .addFields(

            {name: 'Brain Region:', value:'Limbic System'},
            {name: 'Function:', value:'Emotions'},
            {name: 'Motto', value:'Fight or Flight'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/2/2f/MRI_Location_Amygdala_up.png')
        .setFooter('The Brain Encyclopedia retrieved the Occipital Lobe');
        
        message.channel.send(newOccipitalLobe);
    }  
}
