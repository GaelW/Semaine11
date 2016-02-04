angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.soluce1 = "";
		$scope.questions = [
			{id:"01",
			 categorie:"On a le Steve qu'on mérite...",
			 question:"Steve Jobs, oui, mais quel autre Steve est à l'origine d'Apple ?",
			 reponseA:" Steve Ballmer",
			 reponseB:" Steve Austin",
			 reponseC:" Steve Mac Queen",
			 reponseD:" Steve Wozniak",
			 correct:"reponseD",
			 bonneReponse:"Steve Wozniak",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/Steve.jpeg"
			},
			{id:"02",
			 categorie:"Premier amour ",
			 question:"En quelle année Apple a-t-elle présenté le 1er Macintosh ?",
			 reponseA:" 1980",
			 reponseB:" 1982",
			 reponseC:" 1984",
			 reponseD:" 1986",
			 correct:"reponseC",
			 bonneReponse:"1984",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/Mac128k.jpg"
			},
			{id:"03",
			 categorie:"Au suivant !",
			 question:"Après avoir été évincé d'Apple en 1985, quelle entreprise fonda Steve Jobs ? ",
			 reponseA:" Next",
			 reponseB:" Oracle",
			 reponseC:" Microsoft",
			 reponseD:" GateWay",
			 correct:"reponseA",
			 bonneReponse:"Next",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			image:"img/NEXT.jpg"
			},
			{id:"04",
			 categorie:"Home sweet home",
			 question:"A son retour en 1997, Jobs fait plancher Apple sur un nouveau produit, qui sera :",
			 reponseA:" L'iBook",
			 reponseB:" L'iMac",
			 reponseC:" L'iPad",
			 reponseD:" Le MacBook",
			 correct:"reponseB",
			 bonneReponse:"L'iMac",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"img/iMac.jpg"
			},
			{id:"05",
			 categorie:"Let's get restarted !",
			 question:"En 2001, Apple lance le premier produit de son “hub numérique“, qui s'appelle :",
			 reponseA:" iTunes",
			 reponseB:" iPod",
			 reponseC:" iPad",
			 reponseD:" iPhone",
			 correct:"reponseB",
			 bonneReponse:"iPod",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			 image:"img/iPod.jpg"
			},
			{id:"06",
			categorie:"Allô ? Non mais allô quoi !",
			 question:"En quelle année Steve Jobs présente l'iPhone, qui va révolutionner le mobile ?",
			 reponseA:" 2005",
			 reponseB:" 2006",
			 reponseC:" 2007",
			 reponseD:" 2008",
			 correct:"reponseC",
			 bonneReponse:"2007",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			 image:"img/iPhone.jpg"
			},
			{id:"07",
			 categorie:"Nous c'est la pomme...",
			 question:"Un de ces objets n'a jamais été produit par Apple. Lequel ?",
			 reponseA:" L'iPod Touch",
			 reponseB:" L'iPad",
			 reponseC:" L'iTV",
			 reponseD:" Des chaussettes",
			 correct:"reponseC",
			 bonneReponse:"l'iTV",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"img/all.jpg"
			},
			{id:"08",
			 categorie:"L'avenir est pour demain !",
			 question:"Savez-vous sur quel produit Apple planche pour la suite ?",
			 reponseA:" Une télévision",
			 reponseB:" Une automobile",
			 reponseC:" Un casque de réalité virtuelle",
			 reponseD:" Un réfrigérateur",
			 correct:"reponseB",
			 bonneReponse:"Une automobile",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"img/iToilet.jpg"
			}
		];
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;
	function cat (){
		if ($scope.numquestion < 8){
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
		}
		else{
			$scope.domaine = "";
		};
	}	
	$scope.clear = function () {
		cat();
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="On a le Steve qu'on mérite...";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;			
    };
		$scope.valider = function() {
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
				$scope.categorie1 += $scope.questions[$scope.numquestion].pointscat1;
				$scope.categorie2 += $scope.questions[$scope.numquestion].pointscat2;
				$scope.categorie3 += $scope.questions[$scope.numquestion].pointscat3;
				$scope.categorie4 += $scope.questions[$scope.numquestion].pointscat4;
			}
			$scope.numquestion += 1;
			cat();
			if ($scope.numquestion >= 8)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				if ($scope.points ==80)
				{
					$scope.texte = "Bravo, vous êtes un vrai AppleManiac !";
					$scope.image = "img/80.jpg";
				}
				else if ($scope.categorie1 == 20)
				{
					$scope.texte = "Vous avez quelques connaissances sur la Pomme";
					$scope.image = "img/20.jpg";
				}
				else if ($scope.categorie2 == 20)
				{
					$scope.texte = "Vous avez quelques connaissances sur la Pomme";
					$scope.image = "img/20.jpg";
				}
				else if ($scope.categorie3 == 20)
				{
					$scope.texte = "Vous avez quelques connaissances sur la Pomme";
					$scope.image = "img/20.jpg";
				}
				}
				else if ($scope.categorie4 == 20)
				{
					$scope.texte = "Vous avez quelques connaissances sur la Pomme";
					$scope.image = "img/20.jpg";
				}
				else if ($scope.categorie1 == 15)
				{
					$scope.texte = "Nul, vous êtes virés ! :)"
					$scope.image = "img/10.jpg";
				}
				else if ($scope.categorie2 == 15)
				{
					$scope.texte = "Nul, vous êtes virés ! :)"
					$scope.image = "img/10.jpg";
				}
				else if ($scope.categorie3 == 15)
				{
					$scope.texte = "Nul, vous êtes virés ! :)"
					$scope.image = "img/10.jpg";
				}
				else if ($scope.categorie4 == 15)
				{
					$scope.texte = "Nul, vous êtes virés ! :)"
					$scope.image = "img/10.jpg";
				}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
			}
			$scope.reponse = "";
		};
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
	}]);	