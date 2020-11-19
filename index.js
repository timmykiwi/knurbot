const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const client = new Discord.Client({disableEveryone: true});
const prefix = require("./prefix.json");
const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

