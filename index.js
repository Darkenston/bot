const Discord = require("discord.js");
const client = new Discord.Client();
token=process.env.TOKEN;
client.login(token);

client.on("ready", () => {
  console.log("ça marche lol");
}
);


client.on("message",(message)=>{
	if(message.content=="Le Test")
		{message.reply("Salut, c'est moi !");}
}
);
var question[8],réponse[8];
srand(time(0));
	client.on("message",(message)=>{
		if(message.content=="Pose nous une question")
		{
		question=rand()%9;
		

			if(question==1)
			{
				message.reply("Histoire: Combien y a t'il eu de Pape du concile de Nicée jusqu'à maintenant ?");
				réponse[0]="266";
							if(message.content==réponse[0])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
			}
				

				if(question==2)
				{
					message.reply("Histoire: Qui a ramené la peste noire en Europe ?");
					réponse[1]="Les Mongoles";
							if(message.content==réponse[1])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
				}



						if(question==3)
						{
							message.reply("Mythe et Légendes: Qui est le dieu de du vin dans la mythologie grecque ?");
							réponse[2]="Dionysos";
							if(message.content==réponse[2])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
						}


						if(question=4)
						{
							message.reply("Astronomie: Qu'est ce qui différencie Pluton des autres planètes du système solaire ?")
							réponse[3]="C'est une Exo-Planète";
							if(message.content==réponse[3])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
						}


						if(question=5)
						{
							message.reply("Mtyhes et Légendes: Dans la mythologie Egyptienne: Qu'annonce la mort de Seth ?");
							réponse[4]="Le Jour";
							if(message.content==réponse[4])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
						}


						if(question=6)
						{
							message.reply("Jeux vidéos: Quelle héros de Darksider n'a t'on pas encore jouer ?(Nom Anglais) ");
							réponse[5]="Strife";
							if(message.content==réponse[4])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
						}


							if(question=7)
						{
							message.reply("Jeux vidéos: Qui est la première personne a avoir affronté la légion en Azeroth ? (World of Warcraft) ");
							réponse[6]="Aegwynn";
							if(message.content==réponse[6])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
						}


						if(question=8)
						{
							message.reply("Jeux vidéos: Quel est le nom de l'antagoniste d'Assassin's creed 1 ? ");
							réponse[7]="Al Mualim";
							if(message.content==réponse[7])
							{
								message.reply("Félicitations, tu as trouvé la bonne réponse");
							}
						}

	}
	}
	);		