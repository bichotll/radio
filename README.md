#myRadioMola

This is a requested project. It meets the requirements and needs that has been requested for this task.
On top of that, I created a Kanban board with Trello to split the tasks and used NightwatchJS for the UI testing.

On the other hand I used front-end tools and packages like React, Browserify, Gulp and Npm or Bower, as these are ones 
I'm more experienced and comfortable with. 
I did not any Flux system or Immutable library because it's a small app and for time reasons.

##Node version - Important

As some dependencies of the boilerplate used for this project are not fully compatible with the latest versions of
node, you must run 0.12.12 to avoid any problem.

I recommend to use nvm https://github.com/creationix/nvm. 
Follow the instructions of the website to install it.

Once this installed, you just have to change the version of this environment with:

```
nvm install 0.12.12
```

##Tasks and organization

The link for the trello board:
https://trello.com/b/xkN7TZZk/test-for-f

##Server

I created a simple node REST API that returns the list of youtube videos to meet the requirements.
I also created an endpoint that returns the youtube video requested from the youtube ID.

The server is listening the port 3300.
CORS is implemented, so the server can be reached from any domain or port.


###To run the server

You will need to install the node packages used for this project.

```
npm install
```

In case you are reviewing this task, I recommend you to open a new terminal tab to run the server.

```
node server/
```


##Client app

The app accomplishes the UI requirements requested.

I have created a fake scenario where these requirements are met. I created a feature videos page and a view page
of the video.


###To run the app

First you will need to install the dependencies

```
npm install #can be skipped if already done
```

```
bower install
```

Again, opening a new terminal tab is recommended if reviewing.

```
gulp watch
```


##Testing

As mentioned before, I used NightwatchJS, a Selenium framework created with JS.
This test system follows the acceptance and integration testing standards.


###How to run the tests

First off, you will need to install nightwatch:

```
npm install -g nightwatch
```

###Selenium:

Download the latest version of the selenium-server-standalone-{VERSION}.jar file from 
http://selenium-release.storage.googleapis.com/index.html

I would recommend to download this in test/selenium or test/bin.

To run Selenium service. Again, in a new terminal tab:

```
java -jar selenium-server-standalone-{VERSION}.jar
```

*If don't have java you will have to install it from http://www.oracle.com/technetwork/java/javase/downloads/index.html


###Run the tests

As mentioned before, new terminal tab if reviewing.

Finally, to run the tests:

```
cd test; 
nightwatch
```

This should open Firefox and write some assertions on the terminal.

##How it could be improved

This are things I'd like to do but could not because the lack of time.

 - Unit testing for node server.
 - Implement a simple filter for the videos.
 - Create a CI system.
 - Push the demo in some server.
 - Give a more close style to the actual app.


##Resources and others

NightwatchJS guide
http://nightwatchjs.org/guide

Boilerplate used for this project
https://github.com/randylien/generator-react-gulp-browserify
