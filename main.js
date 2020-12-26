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

    if (command == 'on'){
        message.channel.send('I am on, I swear!');
    } else if (command == 'off'){
        message.channel.send('bye, brain is signing off!');
    }

});



// the bot is logged in with its token (SECRET COMBO #COME BACK & ADD TO GITIGNORE MAYBE: https://www.reddit.com/r/learnpython/comments/7pzlm0/discord_bot_token_on_github/ !)
client.login('TOKEN');
