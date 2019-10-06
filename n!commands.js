const Discord = require("Discord.js");

module.exports.run = async (bot, msg, args) => {
    const embed = new Discord.RichEmbed()
                .setTitle('Command information and all you need to know!')
                .setAuthor(`${msg.guild.name} | Commands tab`, msg.guild.iconURL)
                .addField('💡 __Information commands__', '**Use (n!info) to see all information about links and etc..**', true)
                .addField('✅ __BOT ACCESS Commands__', '**Use (n!access) to see all BOT ACCESS commands!**', true)
                .addField('👍__VOTE__👎', '**Use the command "n!vote" to get a automatic voting system reaction on the message!**', true)
                .addField('__🚫Report__', "**You can report a user by using the (n!report) command, remember to tag a user and write down a reason for the report!**", true)
                .addField('➕__Suggestions__', '**If you got any suggestions use the (n!suggest) command this command is recomanded to use in the #type-your-suggestion-here chat but could be use in any chat!**', true)
                .setColor(0x8E00C5)
                .setFooter(`Nividium Bot | Commands`, bot.user.displayAvatarURL);
            msg.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "commands"
}
