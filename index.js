const {

    Client,
    Attachment
} = require('discord.js');

const bot = new Client();

const token = process.env.BOT_TOKEN;

const prefix = '-';


// image packages (for random image generator)
const cheerio = require('cheerio');

const request = require('request');

bot.on("message", message => {
    
    // random image generator
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'image':
        image(message);

        break;
    }

});

// searches "brain images" on the DogPile search engine
function image(message){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "brain",
        method: "GET",
        headers: {
            Accept: "text/html",
            "User-Agent": "Chrome"
        }
    };


request(options, function(error, response, responseBody){
    
    // error checking, terminates search request
    if(error){
        return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

    // logs each randomly searched url for brain image
    console.log(urls);

    // error checking, terminates search request if invalid url
    if (!urls.length){
        return;
    }

    message.channel.send(urls[Math.floor(Math.random() * urls.length)] + " " + message.guild.members.random());

});

}

bot.login(process.env.BOT_TOKEN);




// client.on("message", (message) => {
//     let args = message.content.substring(prefix.length).split(" ");
//     let command = args.shift(); //separates and removes command from args

//     switch (command) {
//         case "image":
//             image(message, args[0]);

//             break;
//     }
// });

// function image(message) {
//     //'query' now represents 'args[0]'

//     var options = {
//         url: "http://results.dogpile.com/serp?qc=images&q=" + "brain",
//         method: "GET",
//         headers: {
//             Accept: "text/html",
//             "User-Agent": "Chrome",
//         },
//     };

//     request(options, function (error, response, responseBody) {
//         if (error) {
//             return;
//         }

//         $ = cheerio.load(responseBody);

//         var links = $(".image a.link");

//         var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

//         console.log(urls);
//         if (!urls.length) {
//             return;
//         }

//         // Send result
//         message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
//     });
// }
