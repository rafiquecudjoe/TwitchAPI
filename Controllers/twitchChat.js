const tmi = require('tmi.js');


const TwitchChat = (req, res) => {
    
    const { check, channelId } = req.params

// CHAT

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.USER,
		password: process.env.TWITCH
	},
	channels: [ channelId ]
});
    

       client.connect().catch(console.error);  
        
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}
});
        
         return res.status(200).send("Chat Started")

  
   



}

module.exports = TwitchChat