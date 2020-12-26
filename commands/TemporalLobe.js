const { execute } = require("./on");

module.exports = {
    name: 'temporal_lobe',
    description: 'info on the amygdala',
    execute(message, args, Discord){
        const newTemporalLobe = new Discord.MessageEmbed()
        .setColor('#FC773E')
        .setTitle('Temporal Lobe')
        .setURL()
        .setDescription('What is the Temporal Lobe?')
        .addFields(

            {name: 'Brain Region:', value:'Beneath the lateral fissure on both cerebral hemispheres of the mammalian brain.'},
            {name: 'Function:', value:'Processing sensory input into derived meanings for the appropriate retention of visual memory, language comprehension, and emotion association.'},
            {name: 'Motto:', value:'Hearing Headquarters!'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/1/1c/Temporal_lobe_animation.gif')
        .setFooter('The Brain Encyclopedia retrieved the Temporal Lobe.');
        
        message.channel.send(newTemporalLobe);
    }  
}
