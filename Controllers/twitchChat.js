const tmi = require('tmi.js');


const TwitchChat = () => {
    
// CHAT

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.USER,
		password: process.env.TWITCH
	},
	channels: [ 'rafiqueacudjoe' ]
});
    

    client.connect().catch(console.error);  
        
    client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}
});


}

module.exports = TwitchChat