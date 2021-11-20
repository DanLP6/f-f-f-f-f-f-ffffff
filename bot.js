
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                var member_xp, member_level;


await s4d.client.login('ODE4MDM2MDg5NTkwNzc1ODI5.YESNeg._Ultp25VkdeoMDQFEQZny7YGQUU').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
  s4dmessage.channel.send(
          {
              embed: {
                  title: null,
                  color: null,
                  image: { url: null },

                  description: (String(s4d.joiningMember.user.username) + String('\n' + String(String(s4d.joiningMember.nickname) + String('\n' + String(String(s4d.joiningMember.id) + 'Hello. Hopefully you´ll have a very great time with us!'))))),
                  footer: { text: null },
                  thumbnail: { url: null }

              }
          }
      );
s4d.joiningMember = null
});

s4d.client.on('guildMemberRemove', async (param1) => {
s4d.leavingMember = param1;
  s4dmessage.channel.send(
          {
              embed: {
                  title: null,
                  color: null,
                  image: { url: null },

                  description: (String(s4d.joiningMember.user.username) + String('\n' + String(String(s4d.joiningMember.nickname) + String('\n' + String(String(s4d.joiningMember.id) + 'Hello. Hopefully you had a very great time with us!'))))),
                  footer: { text: null },
                  thumbnail: { url: null }

              }
          }
      );
s4d.leavingMember = null
});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == 'dlp6.ping') {
    s4dmessage.channel.send(String(('Pong! ' + String(s4d.client.ws.ping))));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.member).user.bot)) {
    member_xp = s4d.database.get(String(('xp-' + String(s4dmessage.author.id))));
    member_level = s4d.database.get(String(('level-' + String(s4dmessage.author.id))));
    if (!member_xp) {
      member_xp = 0;
    } else if (!member_level) {
      member_level = 0;
    }
    s4d.database.set(String(('xp-' + String(s4dmessage.author.id))), (member_xp + 6));
    member_xp = member_xp + 1;
    if (member_xp > 100) {
      s4d.database.set(String(('level-' + String(s4dmessage.author.id))), (member_level + 1));
      member_level = member_level + 1;
      s4dmessage.channel.send(String((['Congratulations, ',s4dmessage.member,'You´re ',member_level,'up'].join(''))));
    }
    if ((s4dmessage.content) == 'dlp6.level') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you are currently level: ',member_level].join(''))));
    } else if ((s4dmessage.content) == 'dlp6.xp') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you need ',100 - member_xp,' to jump to level ',member_level + 1].join(''))));
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == 'dlp6.say') {
    s4dmessage.channel.send(String((s4dmessage.content)));
    s4dmessage.delete();
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == 'dlp6.help') {
    s4dmessage.channel.send(
            {
                embed: {
                    title: null,
                    color: null,
                    image: { url: null },

                    description: (String('Hello ' + String((s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname)) + String('\n' + String('You asked for help? Here are some usefull commands:' + String(String('\n' + String(String(String('\n' + 'dlp6.ping - Pings the Bot') + String('\n' + 'dlp6.say - Let sth what you said the Bot say')) + String('\n' + 'dlp6.xp - Shows you xp points on this server'))) + String(String(String('\n' + 'dlp6.level - shows you level on this server') + String('\n' + '')) + String(String('\n' + '') + String('\n' + String('\n' + 'For more help type dlp6.help.2')))))))),
                    footer: { text: null },
                    thumbnail: { url: null }

                }
            }
        );
  }

});


                return s4d;
                })();
            