const { execute } = require("./on");

module.exports = {
    name: 'cerebellum',
    description: 'info on the cerebellum',
    execute(message, args, Discord){
        const newCerebellum = new Discord.MessageEmbed()
        .setColor('#EE2677')
        .setTitle('Cerebellum')
        .setURL()
        .setDescription('What is the cerebellum?')
        .addFields(

            {name: 'Brain Region:', value:'Posterior cranial fossa'},
            {name: 'Function:', value:'Coordination and control of voluntary movement, balance, and muscles.'},
            {name: 'Motto:', value:'The Little Brain'}

        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/b/b2/Posterior_lobe_of_cerebellum_--_animation.gif')
        .setFooter('The Brain Encyclopedia retrieved the Cerebellum.');
        
        message.channel.send(newCerebellum);
    }  
}
