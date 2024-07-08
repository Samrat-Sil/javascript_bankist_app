'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const diceNew = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
const scores = [0, 0];
let curretScore = 0;
let activePlayer = 0;

diceRoll.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = ` dice-${diceNumber}.png`;
  if (dice !== 1) {
    curretScore += dice;
    current0.textContent = curretScore;
  } else {
    
  }
});
