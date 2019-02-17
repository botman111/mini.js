bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  bot.user.setActivity('%help for commands!', { type: 'PLAYING' })
  const game = message.content.slice("%skribbl").split(' ');
  const command = game.shift().toLowerCase();
  const gamess = message.content.slice("%shellshock").split(' ');
  const commandss = gamess.shift().toLowerCase();
  const clearcc = message.content.slice("%clear").split(' ');
  const commandsss = clearcc.shift().toLowerCase();

  if (message.content === '%info') {
    let info = new Discord.RichEmbed({
    thumbnail: {
        "url": "https://i.imgur.com/HDnaovd.jpg"},
    color: 9699539,
    fields: [
        {name: '**Info!**', value: `Hey there, Welcome To Wraith’s Portal!\nWe are currently at 150+ members and seeking staff!\nTo offer we have:\n:heavy_check_mark: A General Chatroom\n:heavy_check_mark: A Nsfw Channel\n:heavy_check_mark: A Gaming Channel\n:heavy_check_mark: A Memes Channel\n:heavy_check_mark: Mini Games\n:heavy_check_mark: Competitions\n:heavy_check_mark: Ranks and Level Roles\n:heavy_check_mark: Many Voice Channels\n:heavy_check_mark: And Many More!\n------------------------------------------------`}
      ]
    });
    message.channel.send(info);
  };
  if (message.content === '%help') {
    let help = new Discord.RichEmbed({
    title: 'Commands',
    color: 9699539,
    thumbnail: {
      "url": "https://i.imgur.com/HDnaovd.jpg"},
    fields: [
        {name: '%minigames', value: `Shows the list of Mini Games!`},
        {name: '%info', value: `Shows all info need!`},
        {name: '%help', value: `Shows this message!`},
        {name: '**HELPER AND UP ONLY**', value: `The next set of commands will be for Helper and up`},
        {name: '%mute {user}', value: `Mutes pinged user!`},
        {name: '%unmute {user}', value: `Unmutes pinged user!`},
        {name: '%lockchannel', value: `Locks channel!`},
        {name: '%unlockchannel', value: `unlocks channel!`},
        {name: '**ADMIN AND UP ONLY**', value: `The next set of commands will be for Admin and up`},
        {name: '%give {user} {role}', value: `Gives pinged user mentioned role!`},
        {name: '%take {user} {role}', value: `Takes away mentioned role from pinged user!`},
        {name: '%clear {number}', value: `Clears a certain amount of messages!`},
      ]
    });
    message.channel.send(help);
  };
  if (message.content === `%minigames`) {
    let minigame = new Discord.RichEmbed({
    title: `MiniGames!`,
    color: 9699539,
    fields: [
        {name: '**MINIGAME HOSTS ONLY**', value: `These commands only work if you are a Mini Game Host`},
        {name: '%skribbl {url}', value: `notifies users about a Skribbl game!`},
        {name: '%shellshock {url}', value: `notifies users about a Shell Shock game!`},
      ]
    });
    message.channel.send(minigame)
  };
  if (message.content.startsWith(`%mute`)) {
    if (message.member.roles.some(role => role.name ===  'Staff')) {
     let usermute = message.mentions.members.first();
    usermute.addRole('545691873134772225')
  .then(() => message.channel.send(`Muted ${usermute}!`))
  .catch(console.error);
} else {
  message.channel.send('You can not use this command!')
}
};
  if (message.content.startsWith(`%unmute`)) {
  if (message.member.roles.some(role => role.name ===  'Staff')) {
   let userunmute = message.mentions.members.first();
  userunmute.removeRole('545691873134772225')
.then(() => message.channel.send(`Unmuted ${userunmute}!`))
.catch(console.error);
} else {
message.channel.send('You can not use this command!')
}
};
  if (message.content.startsWith(`%give`)) {
  if (message.member.roles.some(role => role.name ===  'Bot Admin')) {
   let usergive = message.mentions.members.first();
   let userrole = message.mentions.roles.first();
  usergive.addRole(userrole)
.then(() => message.channel.send(`Gave ${usergive} ${userrole}`))
.catch(console.error);
} else {
message.channel.send('You can not use this command!')
}
};
  if (message.content.startsWith(`%take`)) {
if (message.member.roles.some(role => role.name ===  'Bot Admin')) {
 let usertake = message.mentions.members.first();
 let userroles = message.mentions.roles.first();
usertake.removeRole(userroles)
.then(() => message.channel.send(`took ${userroles} from ${usertake}`))
.catch(console.error);
} else {
message.channel.send('You can not use this command!')
}
};
  if (command === '%skribbl') {
    if (message.member.roles.some(role => role.name ===  'Minigame Host')) {
	if (!game.length) {
		return message.channel.send(`Please provide a URL!`);
	}
  let sgame = new Discord.RichEmbed({
  title: 'Skribbl Game!',
  color: 9699539,
  fields: [
      {name: 'Skribbl game started!', value: `Click on the URL to join!`},
      {name: 'Game host', value: `${message.author}`},
      {name: 'Link', value: `[Skribbl Game!](${game})`},
    ]
  });
	bot.channels.get(`546370107920613397`).send(`<@&546391088286531584>`);
  bot.channels.get(`546370107920613397`).send(sgame)
} else {
  message.channel.send('You are not allowed to use this command!')
}
};
  if (commandss === '%shellshock') {
  if (message.member.roles.some(role => role.name ===  'Minigame Host')) {
if (!gamess.length) {
  return message.channel.send(`Please provide a URL!`);
}
let ssgame = new Discord.RichEmbed({
title: 'Shell Shock Game!',
color: 9699539,
fields: [
    {name: 'Shell Shock game started!', value: `Click on the URL to join!`},
    {name: 'Game host', value: `${message.author}`},
    {name: 'Link', value: `[Shell Shock Game!](${gamess})`},
  ]
});
bot.channels.get(`546370107920613397`).send(`<@&546391088286531584>`);
bot.channels.get(`546370107920613397`).send(ssgame)
} else {
message.channel.send('You are not allowed to use this command!')
}
};
  if (message.content === '%lockchannel') {
    if (message.member.roles.some(role => role.name ===  'Staff')) {
      let channel = message.channel;
      let roles = message.member.roles;

    let servermute = roles.find(role => role.name === '@everyone');

channel.overwritePermissions(
    servermute,
    { 'SEND_MESSAGES': false },
)
message.channel.send(`Channel locked!`)
} else {
  message.channel.send(`You can not use this command!`)
}
};
  if (message.content === '%unlockchannel') {
    if (message.member.roles.some(role => role.name ===  'Staff')) {
      let channel = message.channel;
      let roles = message.member.roles;

  let serverunmute = roles.find(role => role.name === '@everyone');

channel.overwritePermissions(
  serverunmute,
  { 'SEND_MESSAGES': true },
)
message.channel.send(`Channel unlocked!`)
} else {
  message.channel.send(`You can not use this command!`)
}
};
  if (commandsss === "%clear") {
    if (message.member.roles.some(role => role.name ===  'Bot Admin')) {
      if (!clearcc.length) {
        return message.channel.send(`Please provide a number of messages to clear!`);
      }
       if (message.member.hasPermission("MANAGE_MESSAGES")) {
              message.channel.fetchMessages({ limit: `${clearcc}`})
              .then(function(list){
                   message.channel.bulkDelete(list);
                   message.channel.send(`Cleared ${clearcc} messages!`)
               }, function(err){message.channel.send("Could not clear channel!")})
       }
     } else {
       message.channel.send(`You can not use this command!`)
     }
   };
});
bot.login(process.env.BOT_TOKEN);
