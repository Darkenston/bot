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
let User;
	author=User.username;
	message=User.lastMessage;
	if(message)
		{
			
			author.experience=author.experience+5;
		}
		if(experience=100)
		{
			author.expLvl++;
			author.experience=0;
		}




	if(message.content=="!rank")
	{
		 chaine1="Tu es LvL";
		 chaine2=author.expLvl;
		 chaine3=chaine1+chaine2;
		 message.reply(chaine3);
	}