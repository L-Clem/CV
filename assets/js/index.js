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
let cercles = ["#ex_professionnelles > div:last-child > div:first-child::before", "#ex_professionnelles > div:last-child > div:nth-child(2)::before", "#ex_professionnelles > div:last-child > div:last-child::before"];
let vLignes = ["#ex_professionnelles > div:last-child > div:first-child::after", "#ex_professionnelles > div:last-child > div:nth-child(2)::after", "#ex_professionnelles > div:last-child > div:last-child::after"];

// Variable contenants le sélecteur CSS des lignes d'ornement horizontales de la "section" #hobbies.
let hLignes = "#hobbies li div:before";

// Variables contenants le sélecteur CSS du cercle et de la ligne verticale d'ornement de la "section" #education.
let cercle = "#education > div:last-child::before";
let vLigne = "#education > div:last-child::after";

// Variable de positionnement (top:) CSS pour les cercles et lignes d'ornement.
let totalHauteur = 26;

let ligneCompteur = 1;
let cercleCompteur = 0;



function resize() {

    // Positionne les cercles et lignes verticales d'ornement de la "section" #ex_professionnelles.
    for (element = 0; element <= 5; element++) {

        let section = document.querySelectorAll("#ex_professionnelles > div:last-child > div");
        // Sélectionne un cercles si pair :
        if (estPair(element) == true) {
            if (element === 0) {
                insertCSS(cercles[0], `top: ${totalHauteur}px`);
            } else {
                insertCSS(cercles[element - cercleCompteur], `top: ${totalHauteur}px`);
            }
            cercleCompteur++;
        }
        // Sélectionne une ligne si impair :
        else {
            if (element === 5) {
                let hauteurLigne = section[element - ligneCompteur].offsetHeight - 20 - 6 - 5;
                insertCSS(vLignes[element - 3], `top: ${totalHauteur + 5}px`);
                insertCSS(vLignes[element - 3], `height: ${hauteurLigne}px`);
            } else {
                let hauteurLigne = section[element - ligneCompteur].offsetHeight;
                insertCSS(vLignes[element - ligneCompteur], `top: ${totalHauteur + 5}px`);
                insertCSS(vLignes[element - ligneCompteur], `height: ${hauteurLigne}px`);
                totalHauteur += hauteurLigne;
            }
            ligneCompteur++;
        };
    };


    // Variable de positionnement (top:) CSS pour le cercle et la ligne verticale d'ornement.
    let hauteur = 26;
    // Positionne le cercle et la ligne verticale d'ornement de la "section" #education.
    let section = document.querySelectorAll("#education > div:last-child > div");
    // Pour le cercle :
    insertCSS(cercle, `top: ${hauteur}px`);
    // Pour la ligne :
    let hauteurLigne = section[0].offsetHeight - 20 - 6 - 5;
    insertCSS(vLigne, `top: ${hauteur + 5}px`);
    insertCSS(vLigne, `height: ${hauteurLigne}px`);


    // Positionne les pourcentages de la "section" #competences.
    // for (element = 0; element <= 3; element++) {
    //     let barresProgr = document.querySelectorAll("#competences progess");
    //     insertCSS()
    // }


    // Positionne les lignes horizontales d'ornement de la "section" #hobbies.
    let icone = document.querySelectorAll("#hobbies > ul > li");
    // Récupère la différence entre la deuxième et la première li en partant de gauche. Cette différence est l'espacement entre les deux éléments.
    let x = icone[1].offsetLeft - icone[0].offsetLeft - 80 + 2;
    insertCSS(hLignes, `right: -${x}px`);
    insertCSS(hLignes, `width: ${x}px`);
};