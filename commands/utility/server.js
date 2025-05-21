const { SlashCommandBuilder } = require("discord.js");
const os = require("os")
const info = require("systeminformation")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("system_info")
		.setDescription("Displays system information about the machine running the bot")
        .setContexts(0,1,2)
        .setIntegrationTypes(0,1),
	
async execute(interaction) {
	const osInfo = await info.osInfo();
	const systemInfo = await info.getAllData();
	const cpuInfo = await info.cpu();
	const ramInfo = await info.mem();
	const bytesToGB = bytes => (bytes / (1024 ** 3)).toFixed(2);
	if (osInfo.platform === "linux") {
		interaction.reply(`${os.userInfo().username}@${osInfo.hostname}\n**OS** ${osInfo.distro} ${osInfo.platform} ${osInfo.arch} ${osInfo.kernel}\n**CPU** ${cpuInfo.manufacturer} ${cpuInfo.cores} cores ${cpuInfo.speedMax}ghz\n**RAM** ${bytesToGB(ramInfo.total)}gb`);
	} else {
		interaction.reply("Only linux-based operating systems are supported right now");
	};
}
};