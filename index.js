const Discord = require('discord.js');
const bot = new Discord.Client();



const PREFIX = 'n!';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Blåa Berget Roleplay 15+');
})

bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'invite':
            msg.reply('Here you have a discord invite! https://discord.nividium.xyz/');
            break;
        case 'info':
                const embeddd = new Discord.RichEmbed()
                .setTitle('Here is all info you need')
                .addField('🗨__Discord Link__', '**Link to invite your friends to the discrod you could also get an invite by using n!invite: https://discord.nividium.xyz/**', true)
                .addField('💻__Nividium Metro2033 Forum__', '**This is the place for applications, demotions, complains and more! https://nividiumnetworks.mistforums.com**', true)
                .addField('👨‍👩‍👧‍👦__Steam Group__', '**Join us and become a member of Nividium Metro2033! https://steamcommunity.com/groups/NividiumNet/events**', true)
                .addField('🔨__Workshop Content__', '**Missing content? Make sure you got everything on the Workshop for the server! https://steamcommunity.com/sharedfiles/filedetails/?id=1848028853**', true )
                .addField('➡__Our server__⬅', '**This is a direct joining link, this will open upp Garry\'s Mod!: steam://connect/37.187.155.71:28470**', true)
                .setColor(0x8E00C5)
                .setFooter(`Nividium Bot | Information Tab`, bot.user.displayAvatarURL);
                msg.channel.sendEmbed(embeddd);
            break;

        case 'clear':
            if (!msg.member.roles.find(r => r.name === "BOT ACCESS")) return msg.channel.send('YOU DO NOT HAVE PERMISSIONS!')

            msg.channel.bulkDelete(args[1]);
            break;

        case 'commands':
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
            break;

        case 'vote':
            msg.react('✅').then(msg.react('❌'));
            break;

        case 'kick':
            if (!msg.member.roles.find(r => r.name === "BOT ACCESS")) return msg.channel.send('YOU DO NOT HAVE PERMISSIONS FOR THAT COMMAND!')
            

            const user = msg.mentions.users.first();

            if (user) {
                const member = msg.guild.member(user);

                if (member) {
                    member.kick('You where kick for trolling').then(() => {
                        msg.reply(`Succesfully kicked ${user.tag}`);
                    }).catch(err => {
                        msg.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    msg.reply("That user isn\'t in this guild")
                }
            } else {
                msg.reply('YOU NEED TO SPECIFY A PERSON!');
            }

            break;

        case 'access':
            if (!msg.member.roles.find(r => r.name === "BOT ACCESS")) return msg.channel.send('Looks like you are missing the "BOT ACCESS" role :(')

            const embedd = new Discord.RichEmbed()
            .setTitle('BOT ACCESS COMMANDS!')
            .setAuthor(`${msg.guild.name} | BOT ACCESS Menu!`, msg.guild.iconURL)
            .addField('👋__Kick__', '**Kick a member by using the "n!kick" command!**')
            .addField('🗨__Chatt Clear__', '**To use this command do "n!clear (number)" the number writen down shows how manny messages you want to remove!**')
            .addField('📜__Private DM Sender__', '**You can send Direct Messages to a player by doing "n!dm @(mention) (text)" abusing this command will get your powers taken away!**')
            .setColor(0xB5930C)
            .setFooter(`Nividium Bot | Commands`, bot.user.displayAvatarURL);
            msg.channel.sendEmbed(embedd);
            break;

        case 'dm':
            if (!msg.member.roles.find(r => r.name === "BOT ACCESS")) return msg.channel.send('**Looks like you are missing the "BOT ACCESS" role. that is required for this command to work!**')

            mention = msg.mentions.users.first();
            if(mention == null) { return; }
            msg.delete();
            mentionMessage = msg.content.slice (27);
            mention.sendMessage (mentionMessage);
            
           break;
         case 'dinfo':
         
               const sEmbed = new Discord.RichEmbed()
               .setColor(0x8E00C5)
               .setTitle("Userinfo")
               .setThumbnail(msg.guild.iconURL)
               .setAuthor(`${msg.guild.name} | Information Menu`, msg.guild.iconURL)
               .addField("**Guild Name:**", `${msg.guild.name}`, true)
               .addField("**Discord Manager:**", `${msg.guild.owner}`, true)
               .addField("**Member Count:**", `${msg.guild.memberCount}`, true)
               .addField("**Role Count:**", `${msg.guild.roles.size}`, true)
               .addField("**ID**", msg.guild.id, true)
               .addField("**Bots**", msg.guild.members.filter(mem => mem.user.bot === true).size)
               .addField("**Online**", msg.guild.members.filter(mem => mem.presence.status != "offline").size, true)
               .addField("**Creation Date**", msg.guild.createdAt, true)
               .setFooter(`Nividium Bot | Footer`, bot.user.displayAvatarURL, true);
               msg.channel.sendEmbed(sEmbed);
               break;

            case 'report':
                    msg.delete();
        
                
                let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
                if(!rUser) return msg.channel.send("Couldn't find user!");
                let reason = args.join(" ").slice(28);

                let reportEmbed = new Discord.RichEmbed()
                .setDescription("Reports")
                .setAuthor(`${msg.guild.name} | Reporting System!`, msg.guild.iconURL)
                .setColor(0x8E00C5)
                .addField("Report User", `${rUser} with ID: ${rUser.id}`)
                .addField('Reported By', `${msg.author} with ID: ${msg.author.id}`)
                .addField("Channel", msg.channel)
                .addField("Time", msg.createdAt)
                .addField("Reason", `${reason}.`)
                .setFooter(`Nividium Bot | Report System`, bot.user.displayAvatarURL, true);

                let reportschannel = msg.guild.channels.find(`name`, "reports");
                if(!reportschannel) return msg.channel.send("Could't find reports channel!");

                
                reportschannel.send(reportEmbed);
            break;

            case 'suggest':
            
            msg.delete();
        
                
              
                let reasonn = args.join(" ").slice(7);
                let suggestionEmbed = new Discord.RichEmbed()
                .setAuthor(`${msg.guild.name} | Suggestion System!`, msg.guild.iconURL)
                .setThumbnail(msg.author.avatarURL)
                .setColor(0x8E00C5)
                .addField('**Submitter**', `${msg.author}`, true)
                .addField("**Suggestion**", `${reasonn}.`)
                .setFooter(`User ID: ${msg.author.id}`)
                
                

                let suggestionschannel = msg.guild.channels.find(`name`, "suggestions");
                if(!suggestionschannel) return msg.channel.send("Could't find reports channel!");
                
                suggestionschannel.send(suggestionEmbed).then(msg =>{
                    msg.react('👍').then( r => {
                        msg.react('👎')
                    })
                });
                               
                
                break;
        
            
            

            

    }
})


bot.login(process.env.BOT_TOKE);
