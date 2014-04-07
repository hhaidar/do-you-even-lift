//
// Your Face App
//

var fs = require('fs'),
    express = require('express'),
    nunjucks = require('nunjucks');

var app = express();

app.use('/assets', express.static(__dirname + '/assets'));

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function(req, res) {
	res.render('client.html');
});

app.get('/people', function(req, res) {
    fs.readFile('people.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.listen(5000);
