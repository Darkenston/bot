const Discord = require("discord.js");
const client = new Discord.Client();
token=process.env.TOKEN;
client.login(token);

client.on("ready", () => {
  console.log("ça marche lol");
}
);


var question = ["Histoire: Combien y a t'il eu de Pape du concile de Nicée jusqu'à maintenant ?", "Histoire: Qui a ramené la peste noire en Europe ?",

							"Mythes et Légendes: Qui est le dieu  du vin dans la mythologie grecque ?","Nourriture: Quel est l'aliment le plus mangé au monde  ?",
							
							"Mythes et Légendes: Dans la mythologie Egyptienne: Qu'annonce la mort de Seth ?","Quels furent les derniers mots de Jules César?",
							
							"Qui a ecrit le tour du monde en 80 jours?","Jeux vidéos: Quel est le nom de l'antagoniste d'Assassin's creed 1 ? "];


			var reponses=["266","mongoles","dionysos","riz","jour","tu quoque mi fili","jule verne","almualim"];
			var questionChoosed = "";
			var reponseChoosed="";





function selectQuestion() {
				var numberQuestion=getRandomInt(question.length-1);
					questionChoosed= question[numberQuestion];
					reponseChoosed=reponses[numberQuestion];
					

					
				
				if(questionChoosed==questionPrécédentes)
				{
					questionChoosed=question[numberQuestion-1];
					reponseChoosed=reponses[numberQuestion-1];
				}
				}
var questionPrécédentes=[questionChoosed];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function testReponse(){

	var reg=new RegExp(reponseChoosed,"i");
}

client.on("message",(message)=>{
if(message.content=="!quizz")
		{
			selectQuestion();
			message.reply(questionChoosed);
			
			
			}


			if(message.content==reponseChoosed)
			{
				message.reply("Felicitations, tu as trouvé la bonne réponse ! :smile:");
			}

				if(message.content=="!answer")
				{
					var chaine1="La réponse était: ";
					var chaine2=reponseChoosed;
					var chaine3=chaine1+chaine2;
					message.reply(chaine3);
					
				}

			if(message.content=="!help")
			{
				message.reply("!quizz=Demender une question\n!answer=Demender la réponse a la question\n");
			}

	}
	);		
