/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
function generateExcuse() {
  var who = ["The dog", "My grandma", "The mailman", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "my phone", "the car"];
  var when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  return excuse;
}

function setExcuse() {
  let excuseElement = document.getElementById("newExcuse");
  excuseElement.innerHTML = generateExcuse();
}

window.onload = setExcuse();
