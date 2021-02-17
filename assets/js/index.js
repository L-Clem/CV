// Fonction de vérification de la parité d'un nombre.
function estPair(nombre) {
    if (nombre % 2 == 0)
        return true;
    else
        return false;
};

// Fonction d'ajout de Rule CSS.
function insertCSS(selecteur, propriete) {
    styleS.insertRule(selecteur + '{' + propriete + '}', 1);
};

let styleS = document.styleSheets[0];

// Arrays contenants les sélecteurs CSS des cercles et lignes verticales d'ornement de la "section" #ex_professionnelles.
let cerclesPro = ["#ex_professionnelles > div:last-child > div:first-child::before", "#ex_professionnelles > div:last-child > div:nth-child(2)::before", "#ex_professionnelles > div:last-child > div:last-child::before"];
let vLignesPro = ["#ex_professionnelles > div:last-child > div:first-child::after", "#ex_professionnelles > div:last-child > div:nth-child(2)::after", "#ex_professionnelles > div:last-child > div:last-child::after"];

// Variable contenants le sélecteur CSS des lignes d'ornement horizontales de la "section" #hobbies.
let hLignes = "#hobbies li div:before";

// Variables contenants le sélecteur CSS du cercle et de la ligne verticale d'ornement de la "section" #education.
let cerclesEdu = ["#education > div:last-child > div:first-child::before", "#education > div:last-child > div:last-child::before"];
let vLignesEdu = ["#education > div:last-child > div:first-child::after", "#education > div:last-child > div:last-child::after"];

// Variable de positionnement (top:) CSS pour les cercles et lignes d'ornement de la "section" #ex_professionnelles.
let totalHauteurPro = 26;

let lignesCompteurPro = 1;
let cerclesCompteurPro = 0;

// Variable de positionnement (top:) CSS pour les cercles et lignes d'ornement de la "section" #education.
let totalHauteurEdu = 26;

let lignesCompteurEdu = 1;
let cerclesCompteurEdu = 0;


function resize() {

    // Positionne les cercles et lignes verticales d'ornement de la "section" #ex_professionnelles.
    for (element = 0; element <= 5; element++) {

        let section = document.querySelectorAll("#ex_professionnelles > div:last-child > div");

        // Sélectionne un cercles si pair :
        if (estPair(element) == true) {
            if (element === 0) {
                insertCSS(cerclesPro[0], `top: ${totalHauteurPro}px`);
            } else {
                insertCSS(cerclesPro[element - cerclesCompteurPro], `top: ${totalHauteurPro}px`);
            }
            cerclesCompteurPro++;
        }
        // Sélectionne une ligne si impair :
        else {
            if (element === 5) {
                let hauteurLigne = section[element - lignesCompteurPro].offsetHeight - 20 - 6 - 5;
                insertCSS(vLignesPro[element - 3], `top: ${totalHauteurPro + 5}px`);
                insertCSS(vLignesPro[element - 3], `height: ${hauteurLigne}px`);
            } else {
                let hauteurLigne = section[element - lignesCompteurPro].offsetHeight;
                insertCSS(vLignesPro[element - lignesCompteurPro], `top: ${totalHauteurPro + 5}px`);
                insertCSS(vLignesPro[element - lignesCompteurPro], `height: ${hauteurLigne}px`);
                totalHauteurPro += hauteurLigne;
            }
            lignesCompteurPro++;
        };
    };


    for (element = 0; element <= 3; element++) {
        // Variable de positionnement (top:) CSS pour le cercle et la ligne verticale d'ornement.

        // Positionne le cercle et la ligne verticale d'ornement de la "section" #education.
        let section = document.querySelectorAll("#education > div:last-child > div");

        if (estPair(element) == true) {
            if (element === 0) {
                insertCSS(cerclesEdu[0], `top: ${totalHauteurEdu}px`);
            } else {
                insertCSS(cerclesEdu[element - cerclesCompteurEdu], `top: ${totalHauteurEdu}px`);
            }
            cerclesCompteurEdu++;
        }
        else {
            if (element === 3) {
                let hauteurLigne = section[element - lignesCompteurEdu].offsetHeight - 20 - 6 - 5;
                insertCSS(vLignesEdu, `top: ${totalHauteurEdu + 5}px`);
                insertCSS(vLignesEdu, `height: ${hauteurLigne}px`);

            } else {
                let hauteurLigne = section[element - lignesCompteurEdu].offsetHeight;
                insertCSS(vLignesEdu[element - lignesCompteurEdu], `top: ${totalHauteurEdu + 5}px`);
                insertCSS(vLignesEdu[element - lignesCompteurEdu], `height: ${hauteurLigne}px`);
                totalHauteurEdu += hauteurLigne;
            }
            lignesCompteurEdu++;
        }
    }


    // Positionne les lignes horizontales d'ornement de la "section" #hobbies.
    let icone = document.querySelectorAll("#hobbies > ul > li");
    // Récupère la différence entre la deuxième et la première li en partant de gauche. Cette différence est l'espacement entre les deux éléments.
    let x = icone[1].offsetLeft - icone[0].offsetLeft - 80 + 2;
    insertCSS(hLignes, `right: -${x}px`);
    insertCSS(hLignes, `width: ${x}px`);
};