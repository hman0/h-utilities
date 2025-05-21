const { SlashCommandBuilder } = require('discord.js');
const https = require('https');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pings gentoo.org for testing purposes")
        .setContexts(0,1,2)
        .setIntegrationTypes(0,1),
	
async execute(interaction) {
	const start = Date.now();
	https.get("https://www.gentoo.org", res => {
		const httpPing = Date.now() - start;
		interaction.reply(
			`Pinged gentoo.org in ${httpPing}ms`
		);
	}).on('error', err => {
		console.error("Failed to ping gentoo.org:", err);
		interaction.reply("❌ Failed to ping gentoo.org");
	});
}
};
