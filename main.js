require('dotenv').config();

// a node.js module that allows you to interact with the Discord API 
const Discord = require('discord.js');

const client = new Discord.Client();

// what user needs to type to use discord bot commands
const prefix = '-';

const fs = require('fs');

// advanced command handler collection
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

// bot is online!

client.once('ready', () => {
    console.log('BrainEncyclopedia is here!');
});


client.on('message', message =>{

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    // use the advanced command handler!

    // ON
    if (command === 'on'){
        client.commands.get('on').execute(message, args);

    // OFF
    } else if (command === 'off'){
        client.commands.get('off').execute(message, args);

    // KHAN ACADEMY NEUROLOGY VIDEOS
    } else if (command === 'khan_academy'){
        client.commands.get('khan_academy').execute(message, args);
    
    // BRAIN REGIONS

    // Amygdala
    } else if (command === 'amygdala'){
        client.commands.get('amygdala').execute(message, args, Discord);
    
    // Cerebellum
    } else if (command === 'cerebellum'){
        client.commands.get('cerebellum').execute(message, args, Discord);

     // Brain Stem
    } else if (command === 'brainstem'){
        client.commands.get('brainstem').execute(message, args, Discord);
 

    // LOBES (FPOT)
    } else if (command === 'frontal_lobe'){
        client.commands.get('frontal_lobe').execute(message, args, Discord);

    // Parietal Lobe
    } else if (command === 'parietal_lobe'){
        client.commands.get('parietal_lobe').execute(message, args, Discord);

    // Occipital Lobe
    } else if (command === 'occipital_lobe'){
        client.commands.get('occipital_lobe').execute(message, args, Discord);

    // Temporal Lobe
    } else if (command === 'temporal_lobe'){
        client.commands.get('temporal_lobe').execute(message, args, Discord);

    // CROWDSCIENCE RESEARCH (CR) SOURCES

    // CR Source Dashboard
    } else if (command === 'crowdscience_research'){
        client.commands.get('crowdscience_research').execute(message, args, Discord);

    // Stall Catchers
    } else if (command === 'stall_catchers'){
        client.commands.get('stall_catchers').execute(message, args);

    // Neo
    } else if (command === 'neo'){
        client.commands.get('neo').execute(message, args);

    // Eyewire
    } else if (command === 'eyewire'){
        client.commands.get('eyewire').execute(message, args);
    
    // Mozak
    } else if (command === 'mozak'){
        client.commands.get('mozak').execute(message, args);

    // Fold It
    } else if (command === 'fold_it'){
        client.commands.get('fold_it').execute(message, args);

     // Neuron Museum
    } else if (command === 'neuron_museum'){
        client.commands.get('neuron_museum').execute(message, args);
    }

});

// the bot is logged in with its token (SECRET COMBO #COME BACK & ADD TO GITIGNORE MAYBE: https://www.reddit.com/r/learnpython/comments/7pzlm0/discord_bot_token_on_github/ !)
client.login(process.env.BOT_TOKEN);
