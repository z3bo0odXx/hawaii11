const Discord = require('discord.js');

const Util = require('discord.js');


const ytdl = require('ytdl-core');


//البوت كامل بحقوقي وحقوق بوتي
//ᴺ²#6766
//بوت القراننسخة تجريبية فقط لاغير ترقبونا
//TOXIC CODES
client.on("message", message => {
    if (message.content === (prefix + "help-6")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`

   **
تذكر!:ان حقدت وخربت بالبوت وحاولت تهكره لايهم لان هذا يدل على قهرك
   **

                    ⬊ التالي⬋ 
*يعطيك اذكار 5 ورا بعض|اذكار
${prefix}q1 | القرآن الكريم بصوت الشيخ ماهر المعيقلي

${prefix}q2 ➼ القران الكريم بصوت هزاع البلوشي

${prefix}q3 ➼ القرآن الكريم بصوت الشيخ ياسر الدوسري

${prefix}q4|القرآن الكريم بصوت الشيخ أحمد العجمي

${prefix}q5|القرآن الكريم بصوت الشيخ عبدالرحمن السديس

${prefix}stopq|لإخرآج البوت من الروم
                    ⬊ التالي⬋  
  	 ⦅اوامر تفيد صاحب البوت ⦆   
${prefix}sug لارسال اقتراح لصاحب بوت
                    ⬊ التالي⬋  

  BOT By: | Fras#2729 |-| <@307666420743798784> |
البوت يقوم بحماية سيرفرك من وهمي ومن التهكير
اذن كيف اقوم بتفعيل الخاصية هذي؟
قم بانشاء روم باسم log وسوف تتفعل تلقائي
جميع التحيات لكم
~~
جميع التحيات لكم :dove:
~~
  **

   `)
   message.author.sendEmbed(embed)
   
   }
   });
  
client.on('message', message => {
     if (message.content === (prefix + "help-6")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " الرسالة انرسلت لك بالخاص ")
  .addField("تاكد انك مو معطي بوت بلوك او مسكر خاصك" , "شكرا لاستخدامكم  بوتكم F5R BOT ")
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('*q1')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('*stopq')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});


   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('*q2')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=14JEJ0Cqq_M', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('*stopq')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});


   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('*q3')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=WYT0pQne-7w', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('*stopq')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});


   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('*q4')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=WYT0pQne-7w', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('*stopq')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});




   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('%q5')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=a-JdEFdgBaU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('%stop000')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});




   
   
   client.on('message', message => {
 if(message.content.startsWith(prefix + "1q")) {
message.member.voiceChannel.join();
}
});

client.on('message', message => {
 if(message.content.startsWith(prefix + "2q")) {
message.member.voiceChannel.join();
}
});


client.on('message', message => {
 if(message.content.startsWith(prefix + "3q")) {
message.member.voiceChannel.join();
}
});


client.on('message', message => {
 if(message.content.startsWith(prefix + "4q")) {
message.member.voiceChannel.join();
}
});


client.login(process.env.BOT_TOKEN);