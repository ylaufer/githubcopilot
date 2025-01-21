// Create web server
var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));

app.get('/comments', function(req, res) {
    res.json([
        { id: 1, text: 'This is a comment' },
        { id: 2, text: 'This is another comment' }
    ]);
});

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
});


