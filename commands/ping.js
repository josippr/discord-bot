const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('ping komanda'),
	async execute(interaction) {
		await interaction.reply('A šta me pingaš konju?');
	},
};