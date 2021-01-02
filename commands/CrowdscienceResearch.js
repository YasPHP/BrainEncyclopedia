const { execute } = require("./on");

module.exports = {
    name: 'crowdscience_research',
    description: 'sends a collecton of neuroscience crowdscience research platforms',
    execute(message, args, Discord){
        const newCrowdscienceResearch = new Discord.MessageEmbed()
        .setColor('#E5C0C8')
        .setTitle('Crowdscience Research')
        .setURL()
        .setDescription('Help contribute to the neuroscience research scene! Topics include, Alzheimers Research, Connectomics, Neuron Visualization, etc. Type the following commands to gain access to each resource.')
        .addFields(

            {name: 'Stall Catchers', value: 'command: -stall_catchers'},
            {name: 'Eyewire (map the 3D structure of neurons )', value: 'command: -eyewire'},
            {name: 'Neo (3D brain gamer):', value: 'command: -neo'},
            {name: 'Fold It (protein structure prediction)', value: 'command: -fold_it'},
            {name: 'Neuron Museum (reconstruct neurons)', value: 'command: -neuron_museum'},
            {name: 'Mozak (neuronal arborization simulation)', value: 'command: -mozak'}

        )
        .setImage('https://i2.wp.com/neurosciencenews.com/files/2018/06/brain-mapping-ai-neurosciencneews.gif?fit=750%2C556&ssl=1')
        .setFooter('The Brain Encyclopedia retrieved the Crowdscience Research sources.');
        
        message.channel.send(newCrowdscienceResearch);
    }  
}
