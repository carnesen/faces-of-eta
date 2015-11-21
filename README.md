# Eta Weekend Challenge 02

Hello Primers!

Welcome to your second weekend challenge! (Yes, you need to use Handlebars!!!!)

## Working with Node

### Prerequisites
1. XCode: Open the Mac App Store and install XCode. https://itunes.apple.com/us/app/xcode/id497799835?mt=12
2. Homebrew: Homebrew is a package manager for Mac. http://brew.sh/ To install it paste the following at a terminal prompt:
 `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### Install Node
1. Open the Terminal app and type `brew install node`
2. Sit back and wait.
3. After installation type `node -v` and if you get a version number, Node is installed!
4. Type `npm -v` to make sure npm is installed.

### Starting this Assignment
After pulling down this repo, open it up in your editor.

Then go to your terminal. `cd` into the directory and run `npm install`.

After install is completed, enter `npm start`. This will run the server in your terminal.

To shut down the server, hold down control and press `C`.

IMPORTANT: Do not close your terminal while the server is running! Shut it down, then close it.

## Challenge Details
I created a new JSON data file, inside it, you will find an array of objects. Each object is each one of you. 

You first task is to make an AJAX call from the client-side app.js, using the .ajax method, which will be set to GET, and access the '/data' url. When successful, it should bring the data back down. You will then need to combine that with what you've learned this week about templating. 

What I would like to see on the DOM, is one person represented. Also on the DOM should be a 'next' and 'prev' button. Clicking on the next button should navigate to the next person, clicking on the prev button should navigate to the previous person. The highlighted index point should update also as you click next and prev. 

When a person is displayed, show their name, and their favorite movies. Only one person should be showcased at any given time. 

A mockup of the above is available [here](https://docs.google.com/drawings/d/10ArITqYgI__1yWk_ApPvNTa2pBi0q-2_2rHpEsB3HsE/edit?usp=sharing).

You will need to combine everything you learned this week to accomplish this task, and each of the challenges you have completed this week play a part in this task. 

###HARD MODE
Include a fade out and fade in animation in-between transitioning people using [jQuery effects](http://api.jquery.com/category/effects).

###PRO MODE
Include a timer that moves to the next person if the user is not clicking on next or prev. If the user clicks on next or prev, the timer should be reset. The timer should transition between people every 10 seconds. 

###MASTER MODE
Head over to the Eta.json file, and add 'imageURL' and 'gitHubURL' properties for each person. Then, manually head over to GitHub and right click on each person's user image and select 'COPY IMAGE URL'. Then past that into the 'imageURL' property. Similarly, paste the GitHub url for the person into the 'gitHubURL' property. Display the new image information on the DOM, so that the person's GitHub image and link appear below their name. This will give you some experience in working with JSON and give you a better idea of how data is put together for distribution. 
