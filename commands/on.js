module.exports = {
    name: 'on',
    description: "this is an on command!",
    execute(message, args){
        message.channel.send('I am on, I swear!');
    }
}
