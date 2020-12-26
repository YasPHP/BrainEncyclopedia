const DISCORD = require('discord.js');

const CLIENT = new DISCORD.CLIENT();

// what user needs to type to use discord bot commands
const PREFIX = '-';

const fs = require('fs');

// advanced command handler collection
CLIENT.commands = new DISCORD.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    CLIENT.commands.set(command.name, command);
}



// bot is online!

CLIENT.once('ready', () => {
    console.log('BrainEncyclopedia is here!');
});


CLIENT.on('message', message =>{

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);

    const command = args.shift().toLowerCase();

    // use the advanced command handler!
    if (command === 'on'){
        CLIENT.commands.get('on').execute(message, args);
    } else if (command === 'off'){
        CLIENT.commands.get('off').execute(message, args);
    }

});



// the bot is logged in with its token (SECRET COMBO #COME BACK & ADD TO GITIGNORE MAYBE: https://www.reddit.com/r/learnpython/comments/7pzlm0/discord_bot_token_on_github/ !)
CLIENT.login('TOKEN');
