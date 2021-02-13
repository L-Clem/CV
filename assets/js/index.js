function estPair(nombre) {
    if (nombre % 2 == 0)
        return true;
    else
        return false;
};


// let ex_pro = document.querySelector("#ex_professionnelles");
// let cercles = ex_pro.querySelectorAll("div:last-child div::before");
// let vLignes = ex_pro.querySelectorAll("div:last-child div::after");
// let sections = ex_pro.querySelectorAll("div:last-child div");

let totalHauteur = 25;

document.stylesheet[0].insertRule(rule [, index])



function resize() {
    for (element = 0; element <= 5; element++) {
        if (estPair(element) == true) {
            if (element === 0) {
                cercles[element].style.top = `${totalHauteur}px`;
            }
            else {
                cercles[element - 1].style.top = `${totalHauteur - 3}px`;
            }
        }
        else {
            if (element === 6) {
                vLignes[element - 1].style.top = `${totalHauteur}px`;
                vLignes[element - 1].style.height = `${totalHauteur - sections[element - 1].offsetHeight}px`;
            }
            else {
                vLignes[element - 1].style.top = `${totalHauteur}px`;
                vLignes[element - 1].style.height = `${totalHauteur - sections[element - 1].offsetHeight + 20 + 8}px`;
                totalHauteur += vLignes[element - 1].offsetHeight;
            }
        }
    }
}


// console.log(rectangle[element].offsetHeight, );
// height += rectangle[element].offsetHeight;