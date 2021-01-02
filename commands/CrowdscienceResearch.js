const { execute } = require("./on");

module.exports = {
    name: 'crowdscience_research',
    description: 'sends a collecton of neuroscience crowdscience research platforms',
    execute(message, args, Discord){
        const newCrowdscienceResearch = new Discord.MessageEmbed()
        .setColor('#E5C0C8')
        .setTitle('Crowdscience Research')
        .setURL()
        .setDescription('Help contribute to the neuroscience research scene! Topics include, Alzheimers Research, Connectomics, Neuron Visualization, etc.')
        .addFields(

            {name: 'Stall Catchers', value: 'command: -stall_catchers'},
            {name: 'Eyewire', value: 'command: -eyewire'},
            {name: 'Neo:', value: 'command: -neo'},
            {name: 'Fold It', value: 'command: -fold_it'},
            {name: 'Neuron Museum', value: 'command: -neuron_museum'},
            {name: 'Mozak', value: 'command: -mozak'}

        )
        .setImage('https://i2.wp.com/neurosciencenews.com/files/2018/06/brain-mapping-ai-neurosciencneews.gif?fit=750%2C556&ssl=1')
        .setFooter('The Brain Encyclopedia retrieved the Crowdscience Research sources.');
        
        message.channel.send(newCrowdscienceResearch);
    }  
}
