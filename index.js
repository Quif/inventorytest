const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 http.createServer(function (request, response) {
 }).listen(5000);

client.login('NDkzNDc1ODc2MjIzMDU3OTIw.DygVMw.hnhmQuGy9eQk_aQx3i4Tam2-5N4');
