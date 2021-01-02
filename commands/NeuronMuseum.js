module.exports = {
    name: 'neuron_museum',
    description: "research: neurons reconstructed by Seung Lab @ Princeton",
    execute(message, args){
        message.channel.send('http://museum.eyewire.org/?neurons=26065,20117,26051,17212');
    }
}