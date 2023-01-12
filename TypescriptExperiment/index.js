import {buildArray} from "./buildArray.js";

let userInput = 9;
let tempArr = [];

buildArray(
  tempArr,
  userInput
);

function newFacts(){
  window.location.reload();
}
document.getElementById("factBtn").addEventListener("click", newFacts);