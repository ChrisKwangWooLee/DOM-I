let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let colon = document.getElementById('colon');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

// 10 ms - msTens
let counter_msTens = 1;
let msTens_cb = function(element) {
    if (counter_msTens === 10) {
        counter_msTens = 0;
    }
    element.textContent = counter_msTens;
    counter_msTens++;
}

// 100 ms - msHundreds
let counter_msHundreds = 1;
let msHundreds_cb = function(element) {
    if (counter_msHundreds === 10) {
        counter_msHundreds = 0;
    }
    element.textContent = counter_msHundreds;
    counter_msHundreds++;
}

// 1000 ms - secondOnes
let counter_secondOnes = 1;
let secondOnes_cb = function(element) {
    if (counter_secondOnes === 10) {
        counter_secondOnes = 0;
    }
    element.textContent = counter_secondOnes;
    counter_secondOnes++;
}

// 10000 ms - secondTens
let counter_secondTens = 0;
let secondTens_cb = function(element) {
        reached10();
}


// When clock reaches 10 sec
let reached10 = function() {
    clearInterval(msTens_id);
    clearInterval(msHundreds_id);
    clearInterval(secondOnes_id);
    clearInterval(secondTens_id);
    secondTens.textContent = 1;
    secondTens.style.color = 'red';
    secondOnes.textContent = 0;
    secondOnes.style.color = 'red';
    msHundreds.textContent = 0;
    msHundreds.style.color = 'red';
    msTens.textContent = 0;
    msTens.style.color = 'red';
    colon.style.color = 'red';

}

// Start function
let startClock = function() {
    let msTens_id = window.setInterval(msTens_cb, 10, msTens);
    let msHundreds_id = window.setInterval(msHundreds_cb, 100, msHundreds);
    let secondOnes_id = window.setInterval(secondOnes_cb, 1000, secondOnes);
    let secondTens_id = window.setInterval(secondTens_cb, 10000, secondTens);
}

// Create start button
let startButton = document.createElement('button');
let bodyParent = document.querySelector('body');
startButton.textContent = 'START 10 seconds';
startButton.style.fontSize = ' 1.5rem';
console.log(startButton);
bodyParent.style.display = 'flex';
bodyParent.style.flexDirection = 'column';
bodyParent.append(startButton);

startButton.addEventListener('click', startClock);


let msTens_id = window.setInterval(msTens_cb, 10, msTens);
let msHundreds_id = window.setInterval(msHundreds_cb, 100, msHundreds);
let secondOnes_id = window.setInterval(secondOnes_cb, 1000, secondOnes);
let secondTens_id = window.setInterval(secondTens_cb, 10000, secondTens);
clearInterval(msTens_id);
clearInterval(msHundreds_id);
clearInterval(secondOnes_id);
clearInterval(secondTens_id);
