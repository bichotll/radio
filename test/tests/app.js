//var config = require('../config');

describe('App', function() {

    before(function(client, done){
        client
            .url('http://localhost:3000', function(){
                done();
            });
    });

    describe('smoke test', function(){
        it('page is rendered', function (client) {
            client
                .waitForElementVisible('body', 1000)
                .assert.title('myRadioMola', 'Checking out title is there');
        });
    });

    describe('featured songs page', function(){
        it('page is rendered', function (client) {
            client
                .assert.visible('.song-list h1')
                .assert.containsText('.song-list h1', 'Featured songs', 'Checking song-list is rendered');
        });

        it('has a non empty list', function (client) {
            client
                .assert.visible('.song-card');
        });

        describe('featured song', function() {
            it('has a thumbnail', function (client) {
                client
                    .assert.visible('.song-card .thumbnail img');
            });
            it('has a title', function (client) {
                client
                    .assert.visible('.song-card h3');
            });
            it('has list of chords', function (client) {
                client
                    .assert.visible('.song-card .chords-list');
            });

            describe('favourite icon', function() {
                it('has favourite icon', function (client) {
                    client
                        .assert.visible('.song-card .favourite-icon');
                });
                it('add as a favourite', function (client) {
                    client
                        .click('.row .col-sm-6:nth-child(1) .song-card .favourite-icon')
                        .pause(500)
                        .assert.visible('.row .col-sm-6:nth-child(1) .song-card .favourite-icon.added');
                });
            });

            describe('link song', function(){
                it('clicking to song card gets to the view of the song', function(client){
                    client
                        .click('.row .col-sm-6:nth-child(1) .song-card a')
                        .waitForElementVisible('.song-view', 2000);
                });
            });
        });
    });

    describe('view song page', function(){
        it('page is rendered', function (client) {
            client
                .assert.title('myRadioMola')
                .assert.visible('.song-view h1')
                .assert.containsText('.song-view h1', 'With or Without You');
        });

        it('video is rendered', function (client) {
            client
                .assert.visible('iframe');
        });
    });

    after(function(client, done) {
        if (client.sessionId) {
            client.end(function() {
                done();
            });
        } else {
            done();
        }
    });

});
