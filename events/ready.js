const { Events } = require("discord.js");
const { name, version } = require("../package.json")

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`${name} v${version} logged in as ${client.user.tag}`);
        client.user.setActivity(`Version ${version}`);
    }
}