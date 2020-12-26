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

            {name: 'Brain Region:', value:'Includes the premotor cortex, and the primary motor cortex – cortical parts of the motor cortex.'},
            {name: 'Function:', value:'Skeletal movement, ocular movement, speech control, the expression of emotions, etc.'},
            {name: 'Motto:', value:'The Action Cortex'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/5/54/Frontal_lobe_animation.gif')
        .setFooter('The Brain Encyclopedia retrieved the Frontal Lobe.');
        
        message.channel.send(newFrontalLobe);
    }  
}
