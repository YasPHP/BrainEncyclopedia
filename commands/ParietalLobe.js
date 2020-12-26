const { execute } = require("./on");

module.exports = {
    name: 'parietal_lobe',
    description: 'info on the amygdala',
    execute(message, args, Discord){
        const newParietalLobe = new Discord.MessageEmbed()
        .setColor('#FC773E')
        .setTitle('Parietal Lobe')
        .setURL()
        .setDescription('What is the Parietal Lobe?')
        .addFields(

            {name: 'Brain Region:', value:'Above the temporal lobe and behind the frontal lobe and central sulcus.'},
            {name: 'Function:', value:'Integrating sensory information from various parts of the body, knowledge of numbers and their relations, and in the manipulation of objects.'},
            {name: 'Motto:', value:'Sensory Perception'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/3/32/Parietal_lobe_animation_small.gif')
        .setFooter('The Brain Encyclopedia retrieved the Parietal Lobe.');
        
        message.channel.send(newParietalLobe);
    }  
}
