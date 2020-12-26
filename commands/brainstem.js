const { execute } = require("./on");

module.exports = {
    name: 'brainstem',
    description: 'info on the brainstem',
    execute(message, args, Discord){
        const newBrainstem = new Discord.MessageEmbed()
        .setColor('#EE2677')
        .setTitle('Brainstem')
        .setURL()
        .setDescription('What is the brainstem?')
        .addFields(

            {name: 'Brain Region:', value:'Composed of the midbrain, the pons, and the medulla oblongata.'},
            {name: 'Function:', value:'Heart rate, swallowing, reflexes, blood pressure, temperature, sleep, etc.'},
            {name: 'Motto:', value:'The things you do not think about keeping you alive.'}

        )
        .setImage('https://f.jwwb.nl/public/0/5/2/braininjury-explanation/Rotation_brainstem_and_thalamus.gif')
        .setFooter('The Brain Encyclopedia retrieved the Brainstem.');
        
        message.channel.send(newBrainstem);
    }  
}
