/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/**
 * What I learn in this workshop
 * How to createour funamental game variables
 * How to generate a random number
 * How to manipulate the DOM
 * How to read from the DOM
 * How to change CSS style
 */

// เขียนแบบ Clean มากยิ่งขึ้น
var scores, roundScore, activePlayer, gamePlaying;

// เรียกใช้ function init จากด้านล่าง
init();

// addEventListener is when we click this bottom what we want it to do
// anonymous function
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1.Random number
    // 1.1 Math.floor คือ ให้ค่าภายใน function เป็นจำนวนเต็ม
    // 1.2 Math.floor(Math.random() * 6) + 1
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2.Display the result
    // 2.1 create the array for query the class html
    // 2.2 การจัดการกับ css ให้รูปภาพแสดงเป็น block
    // 2.3 Random การสุ่มรูปภาพ โดยนำค่าที่ได้มาสุ่มคู่กับ function random
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    //3.Update the round score If the rolled number was NOT a 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // next player
      nextPlayer();
    }
  }
});

// bottom hold the dice and update the value
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add Current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 10) {
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
      // ถ้าหากชนะแล้วเราต้องการให้เคลียร์หน้าจอกลับไปเป็น 0 เหมือนเริ่มต้นอีกรอบ เราจะต้องใช้คำสั่งนี้
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});

// function nextPlayer
function nextPlayer() {
  // next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  // set current content = 0
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // change the active
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //hide the Dice again
  document.querySelector(".dice").style.display = "none";
}

// New game
document.querySelector(".btn-new").addEventListener("click", init);

// function init
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner!");
  document.querySelector(".player-1-panel").classList.remove("winner!");
  document.querySelector(".player-1-panel").classList.remove("active!");
  document.querySelector(".player-0-panel").classList.add("active");
}

// D.R.Y [dry principle]
// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;

// document.querySelector("#current-" + activePlayer).textContent = dice;
// select the elelment
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// var x = document.querySelector('#score-0').textContent;
// .textcontent เป็นการ assign html แบบเปล่าๆ ให้กับ html
// .innerHTML คือการเข้าไปเปลี่ยนหรือว่าเขียน  html ให้มีค่าตามที่เราต้องการ

// hide the picture for the first time
// document.querySelector(".dice").style.display = "none";

// set the score to zero before the game starting
// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";
