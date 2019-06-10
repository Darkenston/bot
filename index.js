const Discord = require("discord.js");
const client = new Discord.Client();
token=process.env.TOKEN;
client.login(token);

client.on("ready", () => {
  console.log("ça marche lol");
}
);


var author,experience,message,expLvl;
var chaine1,chaine2,chaine3;

	author=User.username;
	message=User.lastMessage;
	if(message)
		{
			
			User.experience=experience+5;
		}
		if(User.experience=100)
		{
			User.expLvl++;
			User.experience=0;
		}




	if(message.content=="!rank")
	{
		 chaine1="Tu es LvL";
		 chaine2=User.expLvl;
		 chaine3=chaine1+chaine2;
		 message.reply(chaine3);
	}