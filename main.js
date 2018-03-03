'use strict';

let money = 100;
const color = ['red', 'green', 'blue'];
document.querySelector('button').addEventListener('click', game);
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const divs = document.querySelectorAll('div');
const input = document.querySelectorAll('input');
const b = document.querySelector('b');
b.textContent = money;
let firstGame = true;

function game () {
    let bet = input.value;
    console.log(input.value)
    if (typeof Number(bet) !== 'number' || bet < 1) {
        bet = 1
        bet.value = String(bet);
    }
    
    if (bet > money) {
        alert('nie masz wystarczająco pieniędzy');
        return
    }
    
    money -= bet;
    b.textContent = money;
    
    if (firstGame) firstGame = false;
    else {
//        divs.forEach((div => div.className = ''))
        for(let i = 0; i < divs.length; i++) {
            divs[i].className = '';
        }
    }
    
    
    
    const result1 = Math.floor(Math.random()*3);
    const result2 = Math.floor(Math.random()*3);
    const result3 = Math.floor(Math.random()*3);
    
    one.classList.add(color[result1]);
    two.classList.add(color[result2]);
    three.classList.add(color[result3]);
    
   const mnoznik = wynik(result1, result2, result3);
    console.log(mnoznik);
    const zarobek = bet * mnoznik;
    money += zarobek;
    b.textContent = money;
    
}

function wynik (a,  b, c) {
    
    
    if (a === b && b === c) return 5;
    else if (a === b || b === c) return 1.5;
    
    else return 0;
}