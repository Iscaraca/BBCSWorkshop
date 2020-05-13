const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
            return
    } else if (receivedMessage.content.startsWith("}")) {
                processCommand(receivedMessage)
       }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading &
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0] 
    let arguments = splitCommand.slice(1)
    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "date") {
        dateCommand(arguments, receivedMessage)
    }
}

function helpCommand(arguments, recievedMessage) {
    if (arguments == "date") {
        recievedMessage.channel.send("To find the date, type :date day/month/year.")
    } else {
        recievedMessage.channel.send("This bot only has one function: getting the date.")
    }
}

function dateCommand(arguments, recievedMessage) {
    let date = new Date()
    if (arguments == "day") {
        recievedMessage.channel.send(date.getDate())
    } else if (arguments == "month") {
        recievedMessage.channel.send(date.getMonth() + 1)
    } else if (arguments == "year") {
        recievedMessage.channel.send(date.getFullYear())
    } else {
        recievedMessage.channel.send(date.toString())
    }
}
client.login("bottoken") 
