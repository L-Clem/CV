// Fonction de vérification de la parité d'un nombre.
function estPair(nombre) {
    if (nombre % 2 == 0)
        return true;
    else
        return false;
}

// Fonction d'ajout de Rule CSS.
function insertCSS(selecteur, propriete) {
    styleS.insertRule(selecteur + '{' + propriete + '}', 1);
}

// Fonction de positionnement des ornements.
function aligneDeco(n, section, cercles, vLignes) { 
    let totalHauteur = 26;
    let cerclesCompteur = 0;
    let vLignesCompteur = 1;

	for (element = 0; element <= n; element++) {
		if (estPair(element) == true) {
			if (element === 0) {
				insertCSS(cercles[0], `top: ${totalHauteur}px`);
			} else {
				insertCSS(cercles[element - cerclesCompteur], `top: ${totalHauteur}px`);
			}
			cerclesCompteur++;
		} else {
			if (element === n) {
                let hauteurLigne = section[element - vLignesCompteur].offsetHeight - 20 - 6 - 5;
				insertCSS(vLignes, `top: ${totalHauteur + 5}px`);
				insertCSS(vLignes, `height: ${hauteurLigne}px`);
			} else {
                let hauteurLigne = section[element - vLignesCompteur].offsetHeight;
				insertCSS(vLignes[element - vLignesCompteur], `top: ${totalHauteur + 5}px`);
				insertCSS(vLignes[element - vLignesCompteur], `height: ${hauteurLigne}px`);
				totalHauteur += hauteurLigne;
			}
			vLignesCompteur++;
		}
	}
}



let styleS = document.styleSheets[0];

// Arrays contenants les sélecteurs CSS des cercles et lignes verticales d'ornement de la "section" #ex_professionnelles.
let cerclesPro = ["#ex_professionnelles > div:last-child > div:first-child::before", "#ex_professionnelles > div:last-child > div:nth-child(2)::before", "#ex_professionnelles > div:last-child > div:last-child::before"];
let vLignesPro = ["#ex_professionnelles > div:last-child > div:first-child::after", "#ex_professionnelles > div:last-child > div:nth-child(2)::after", "#ex_professionnelles > div:last-child > div:last-child::after"];
// Arrays contenants le sélecteur CSS du cercle et de la ligne verticale d'ornement de la "section" #education.
let cerclesEdu = ["#education > div:last-child > div:first-child::before", "#education > div:last-child > div:last-child::before"];
let vLignesEdu = ["#education > div:last-child > div:first-child::after", "#education > div:last-child > div:last-child::after"];
// Variable contenants le sélecteur CSS des lignes d'ornement horizontales de la "section" #hobbies.
let hLignes = "#hobbies li div:before";
// Array contenant les sélecteurs qui permettent d'obtenir la taille des divs avec lesquelles on va aligner/dimensionner les cercles/barres.
let section = [document.querySelectorAll('#ex_professionnelles > div:last-child > div'), document.querySelectorAll('#education > div:last-child > div')];



function resize() {

    aligneDeco(5, section[0], cerclesPro, vLignesPro);
    aligneDeco(3, section[1], cerclesEdu, vLignesEdu);


    // Positionne les lignes horizontales d'ornement de la "section" #hobbies.
    let icone = document.querySelectorAll("#hobbies > ul > li");
    // Récupère la différence entre la deuxième et la première li en partant de gauche. Cette différence est l'espacement entre les deux éléments.
    let x = icone[1].offsetLeft - icone[0].offsetLeft - 80 + 2;
    insertCSS(hLignes, `right: -${x}px`);
    insertCSS(hLignes, `width: ${x}px`);
}