var express = require('express');
var fs = require('fs');
var app = express();


//we could use sth like http://apidocjs.com/ or swagger to document the api and get a good html file of it...

/**
 * Songs REST API
 * @description Returns all the songs
 */
app.get('/songs', function (req, res) {
    var songsData = JSON.parse(fs.readFileSync('./server/resources/songs.json', 'utf8'));

    res.json(songsData);
});

/**
 * Songs ID REST API
 * @param id
 * @description Returns songs based on id
 */
app.get('/songs/:id', function (req, res) {
    var songsData = JSON.parse(fs.readFileSync('./server/resources/songs.json', 'utf8'));
    var songId = req.params.id;

    var song = songsData.songs.filter(function (song) {
        return +song.id === +songId;
    })[0];

    res.json(song);
});

app.listen(3300, function () {
    console.log('we are listening you');
});
