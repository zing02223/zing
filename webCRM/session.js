var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({ secret: 'xsmismsxyuiesy', cookie: { maxAge: 3000 }}));

app.use('/*', function(req, res) {
	if (!req.session.count) {
    console.log(req.session);
		req.session.count = 1;
	}
	req.session.count++;
	res.json(req.session.count);
});

app.listen(9876, function() {
	console.log('OK');
});
