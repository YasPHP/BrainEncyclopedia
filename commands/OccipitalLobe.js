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

            {name: 'Brain Region:', value:'Posterior Cerebrum'},
            {name: 'Function:', value:'Visual processing stimuli from the external world, but also to assign meaning to and remember visual perceptions.'},
            {name: 'Motto:', value:'Everything Eyes'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/8/8f/Occipital_lobe_animation_small.gif')
        .setFooter('The Brain Encyclopedia retrieved the Occipital Lobe.');
        
        message.channel.send(newOccipitalLobe);
    }  
}
