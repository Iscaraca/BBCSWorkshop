# BBCSWorkshop
## Intro to JS workshop prepared for BBCS2020

Good day everyone, I’m Isaac, and I’ll be your instructor for today. If you didn’t sign up for this, and you just joined the vc just because a couple of people were in it, you’re welcome to listen, but you will have to sign up to get the lucky draw benefits at the end so you should go do that as well. If you’re not already sure what workshop this is, we’re going to spend about an hour and a half learning about the basics of javascript, Which is a language most commonly used for web development. If you attended the workshop yesterday on said topic the things covered in this one will effectively supplement the knowledge learnt there, but if not you’ll still be able to learn plenty. And the goal of this workshop is to build a basic discord bot that can respond to your messages.

Before we get into it, I *am* going to assume basic knowledge on *any* programming language, be it python, c++, visual basic, or anything else you’ve learnt. That being said though, if you don’t understand something, or if you’ve lost track, do either unmute your mic and say something like “sorry for interrupting, but I’m still not sure what this keyword does”, or ask a question in the workshop channel, I’d be more than happy to help you out. I’m also going to be assuming you have a discord account because we’re making a discord bot, and if you don't… how are you here. That aside, let’s start with the very basics of javascript.

For this workshop, you’ll be using an online Javascript IDE called https://repl.it/, which allows you to write and run js code. *Go through how to create a repl*

Okay let’s go though variables first. To initialize a variable, we can do it almost exactly like python. We type our variable name, x, and assign a value of 8 to it using the assignment operator equals. Here’s where javascript is different: when initializing a variable, or when creating a variable, you must explicitly tell the compiler that you’re creating it. To do this, you add the keyword let behind the variable name, which tells the compiler that you’re creating this variable, in this case x. Once x has been created, you don’t need to use let again, you can straight away reassign another value to it, let's say 5. But we want to see this change, we want to print the value out to the console here on the right. But we can’t use print(). That’s a python function, javascript doesn’t understand what you’re saying. To output stuff to the console, javascript uses console.log() instead. If we run this __ now it works, and we can see 5 being the output. So we initialized a variable called x, assigned a value of 8 to it, then reassigned a value of 5 to it. Since we can reassign the value of x, we call x mutable, meaning we can change it. But let’s say we wanted to store the value of acceleration due to gravity on earth into x, obviously if you’re near the surface gravity does not change, and neither should the variable. We can declare such a variable, an *immutable* variable, by replacing the word let for the word const, meaning constant. Now when we try to reassign the value of x to 5, an error will occur. This is to prevent you from accidentally changing variable values that shouldn’t be changed.

Variables in Javascript can hold many different data types, like integers, which are whole numbers, strings, which are text values, and objects, which hold a collection of attributes. We’ll go through each of these and what you can do with them in detail.

The first data type we’ll look at is the integer, and integers are just whole numbers. You can add them, subtract them, multiply or divide them, take the remainder of the division, etc etc. Integers are very standard across programming languages. We also have arrays in javascript, which store a collection of values, and we can access the ith value, starting from 0, by typing the array name followed by square brackets with the integer i inside it. We can also store strings into variables, which is text. This is very important in this case, because for our discord bot, the user commands are taken in as string values. We can use many different formatting methods on strings, and I’ll go through 3 of them in detail, as they’ll be the ones we use for our discord bot.

But first, let’s go through what a basic discord bot command has. Every command will start with a key symbol, or key symbols, which signals to the bot “this message is meant for you”. Ideally the symbols should be very unique, because you don’t want people to trigger the bot during casual conversation. After the symbol comes a keyword, which instructs the bot to do something. If the keyword is help, for example, the bot will reply with a list of commands that you can do. Lastly, after the keyword, there are some arguments that you can provide as well. Looking at the BBCS bot for example, I can start off with the key symbol &, then the keyword committees, then the argument coursemology, and it will reply with information about coursemology. Let’s look at how to process each of these segments in detail.

We’ll store our user message in a variable called message. The first thing we want to do is to check if the message starts with the key symbol. If it does, we know it’s directed to the bot. So we can do this by typing the string name, message, dot startsWith(). Since our bot has the key symbol ampersand, we’ll put that into the brackets. This checks to see if the string starts with &. If it does, it returns true. Otherwise, it returns false. Then, we want to get rid of the key symbol and only look at what’s left. We can do this using dot substr, substring for short. This method takes in an integer n, and it returns a string that excludes everything before the nth character in the string. So if we do message.substr(1), we exclude character 0 which is the key symbol. After we do that, we have to differentiate between the keyword and the arguments. We can do that by using the dot split() method, which splits the string into different segments, and return the different segments as an array. Now we can access the keyword by accessing the array at index 0, and the argument at index 1.

So now that we know what’s up, we can write a simple algorithm that takes in a command made by a user and does something depending on the command. Knowing how to do that is simple, if the user input is equal to a command keyword, that specific command will execute. Otherwise, it says something like command not recognised. For that we can use conditionals, otherwise known as if-else statements. In Javascript, if-elses are quite similar to that in Python, where you start by using the keyword if, and then type your condition. In Python, you can just write the condition like that, but in Javascript, we have to place brackets around the condition to tell the compiler that this is the condition we want. In Python, we would follow this up with a colon, and whatever block of code comes up next that is indented on or after the next level will be counted in the if block. So this will be counted, this will not. In Javascript, and in many other languages, this isn’t the case. To mark a block of code under this if statement, or any other statement for that matter, you MUST put curly brackets right after the condition, and anything in those curly brackets is counted. Indentation in Javascript doesn’t actually serve any purpose other than making the code look readable. If I remove all the indentations, and make the code one line like this, the compiler will still be able to understand me.

So what if I wanted to execute multiple commands? I can copy paste this chunk of code many times, but that’s not very efficient. If I wanted to run this chuck many many times, what I can do is write a recipe called a function. Recipes have ingredients, and they do stuff to the ingredients to yield a final result. Functions are basically the same thing. They take in some values, we call them the parameters. Then we do stuff with the values, and return a new value. So in this case, what are our parameters? We can see that our parameter is the user input as a string. But what value do we return? We can see that at the end of the day, we want to return the message that the bot will send out. Now we know our parameters and our return value, let’s start crafting our function.

To create a function, all we need to do is type function, followed by our function name, in this case we can name it processCommand, followed by parenthesis, then curly brackets, like in our conditional statements. Our parameters go into the parenthesis, in this case we can name the number number. If you were to take in multiple parameters, you can put it in the brackets as well, just separate the different variables with commas like this. In the curly brackets, we can type our recipe instructions. If I had two more variables, instead of copy and pasting this chunk of code 2 more times, I can instead call this function. It’s a lot easier to write if you need to repeat a chunk of code a lot.

Okay we have the basics out of the way, let’s start making our bot. First, we need to create a server to test the bot in.
In order to create a Discord server you will need to have a Discord account. If you don't have a Discord account already, how are you even here. In the app, look at the sidebar with all the server icons, scroll down for the plus (+) sign. Click on the plus sign and it will ask if you want to create or join a server. Click "Create a Server." Provide a name, and click "Create." The new server will appear in the left column.

The next step is to create a Discord App. We aren't writing any code yet, we are just registering the app with Discord. Start by going to https://discordapp.com/developers/applications/me and create a new app. On your app detail page, save the Client ID. You will need it later to invite the bot to a server. Try to give your app a unique name.

After creating the app, you need to take one further step and add a bot user to the app. You can do this on the app details page. On the app details page, scroll down to the section named bot, and create a bot user. Save the token, you will need it later to run the bot. If you get an error saying "Too many users have this username, please try another" then you need to rename your application to something more unique.

After you have registered your app and created the bot user for your app, you are ready to invite(authorize) the bot to your server. To do this, you will need the Client ID for your app. You can get this from your app's "General Information" page.

When you have your Client ID, visit the URL https://discordapp.com/oauth2/authorize?client_id=ID-HERE&scope=bot but replace IDHERE with your client ID. Choose the server you want to add it to and select authorize.

After you authorize the bot for the server, it should then show up in the member list of the server as an offline user. Once we write some code and run it, the bot will appear online.

First, you will need to have Node.js installed. If you don't already have it installed, get it from Nodejs.org. I will be using Node.js 10.10.0. You will need Node.js 8.0.0 or newer. You will also need npm but that should come packaged with Node.js.

Once you have Node.js installed, you will need to create a new directory to store your project. Once you have a new directory, open your system terminal/command prompt/shell and navigate to your new directory. You can create the directory in your home folder or anywhere you have permission. You may prefer to create a folder on your desktop.

> mkdir my_discord_bot <br/>
> cd my_discord_bot

The next step is to install the Discord.js module and its dependencies. Use npm in the command prompt to install the module:
npm install discord.js

You might see warnings. Those are OK, it is just telling you about some optional modules. As long as you do not see any errors it should be good. Keep your terminal open here so you can run the program you create in the next step.
At this point, you should have your development environment ready to go with Node.js and the necessary Discord.js module installed. You should also have your own Discord server, app, and bot user that are ready to be utilized. We should take a moment to make sure everything is set up properly. Let's write the simplest bot possible just to make sure it works. Let's create a new JS file and write some code to have the bot log in. You can name the file my_bot.js though the filename is not important.
 
 



