// Prendo il riferimento agli elementi del DOM
const playBtn = document.getElementById('play');
const containerGrid = document.getElementById('container');
const stopGame = document.getElementById('stop');

//Array
let bombsArray = [];
// n sta per il numero delle celle
let n;

// Collego il click al bottone 
playBtn.addEventListener('click', startGame);


// FUNZIONI
// Funzione per startare il gioco
function startGame() {
    containerGrid.innerHTML = '';
    stopGame.classList.add('none');
    // Mi salvo il valore della difficoltà scelta per il gioco
    const difficult = document.getElementById('difficult').value;

    if (difficult === 'easy'){
        n = 100;
    } else if (difficult === 'normal'){
        n = 81;
    } else {
        n = 49;
    }
    const nameClass = difficult;
    bombsArray = createNumRandomOrderArr(n);
    console.log(bombsArray);
    
    for (let i = 1; i <= n; i++) {
        let square = createElementWithClass('div', nameClass);
        square.innerHTML = i;
        containerGrid.append(square); 
        square.addEventListener('click', function(){onSquareClick(i, square)});    
    }
}

// Funzione per generare le bombe
function createNumRandomOrderArr (max) {
    while (bombsArray.length < 16) {
        const nuovoNum = createRandomNum (1, max);
        if (!bombsArray.includes(nuovoNum)) {
            bombsArray.push(nuovoNum)
        }
    }
    return bombsArray;
}

//Funzione per creare elemento con classe
function createElementWithClass (typeTag, nameClass) {
    const newElement = document.createElement(typeTag);
    newElement.classList.add(nameClass);
    return newElement;
}

// Funzione per generare numeri random
function createRandomNum(newMin, newMax) {
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin)
}

// Funzione al click sul quadrato
function onSquareClick(i, square){
    if (bombsArray.includes(i)) {
        square.classList.add('bc-red');
        alert('Hai beccato una bomba, riavvia per riprovare');
        stopGame.classList.remove('none');
    } else {
        square.classList.add('bc-blue');
    }
}