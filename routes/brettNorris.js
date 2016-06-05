const request = require('request')

module.exports = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	const url = 'http://api.icndb.com/jokes/random?firstName=Brett&lastName=Norris&limitTo=nerdy';
	request({ url: url, json: true }, function(error, response, body) {
		return res.send(JSON.stringify({ response_type: "in_channel", text: body.value.joke }));
	})
}