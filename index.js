const Discord = require("discord.js");
const client = new Discord.Client();
token=process.env.TOKEN;
client.login(token);

client.on("ready", () => {
  console.log("ça marche lol");
}
);


client.on("message",(message)=>{
	if(message.isMemberMentioned(client))
		{message.reply("Hey, arrêtez de me mentionner ! Je travaille !");}
}
);



var question = ["Histoire: Combien y a t'il eu de Pape du concile de Nicée jusqu'à maintenant ?", "Histoire: Qui a ramené la peste noire en Europe ?",

							"Mythe et Légendes: Qui est le dieu de du vin dans la mythologie grecque ?","Nourriture: Quel est l'aliment le plus mangé au monde  ?",
							
							"Mtyhes et Légendes: Dans la mythologie Egyptienne: Qu'annonce la mort de Seth (Dieu du chaos)?","Jeux vidéos: Quelle héros de Darksider n'a t'on pas encore jouer ?(Nom Anglais) ",
							
							"Jeux vidéos: Qui est la première personne a avoir affronté la légion en Azeroth ? (World of Warcraft) ","Jeux vidéos: Quel est le nom de l'antagoniste d'Assassin's creed 1 ? "];


var reponses=["266","Les Mongoles","Dionysos","Les Frites","Le Jour","Strife","Aegwynn","Al Mualim"];	

			var questionChoosed = "";
			var reponseChoosed="";

function selectQuestion() {
				var numberQuestion=getRandomInt(question.length-1);
				questionChoosed= question[numberQuestion];
				reponseChoosed=reponses[numberQuestion];
				}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on("message",(message)=>{
		if(message.content=="Pose nous une question")
		{
			selectQuestion();
			message.reply(questionChoosed);
			
			}
			if(message.content==reponseChoosed)
			{
				message.reply("Felicitations, tu as trouvé la bonne réponse !");
			}

	}
	);		