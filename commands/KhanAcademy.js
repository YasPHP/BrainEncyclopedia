module.exports = {
    name: 'khan_academy',
    description: "sends khan academy's neurology playlist",
    execute(message, args){
        message.channel.send('https://www.youtube.com/playlist?list=PL1BYme_lOx_plW8FR9jOxy-FVQ-h_omIX');
    }
}
