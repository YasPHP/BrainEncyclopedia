module.exports = {
    name: 'off',
    description: "this is an off command!",
    execute(message, args){
        message.channel.send('bye, brain is signing off!');
    }

}