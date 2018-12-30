const Discord = require("discord.js");
const client = new Discord.Client();
token=process.env.TOKEN;
client.login(token);

client.on("ready", () => {
  console.log("ça marche lol");
}
);


client.on("message",(message)=>{
	if(message.content=="salut")
		{message.reply("Salut, c'est moi !");}
}
);