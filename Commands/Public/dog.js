const randomPuppy = require("random-puppy");

module.exports = (bot, db, config, winston, userDocument, serverDocument, channelDocument, memberDocument, msg) => {
	randomPuppy().then(url => {
		msg.channel.createMessage(url);
	});
};
