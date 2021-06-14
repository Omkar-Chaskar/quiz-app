var readlineSync = require("readline-sync");

var que=readlineSync.question;

var score = "0";

var userName = readlineSync.question("Enter your name =\n")
console.log("Welcome " + userName + " let's play game ...")
console.log("How much you know MARVEL HEROES ")
console.log("------------------------------------------------");


var queOne ={
  question : "How many Infinity Stones are there?",
  answer : "6"
}
var queTwo ={
  question : "What is Captain America’s shield made of? ",
  answer : "vibranium"
}
var queThree ={
  question : " Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
  answer : "jarvis"
}
var queFour ={
  question : "What is the alien race Loki sends to invade Earth in The Avengers? ",
  answer : "chitauri"
}
var queFive ={
  question : " Who does the Mad Titan sacrifice to acquire the Soul Stone? ",
  answer : "gamora"
}
var queSix ={
  question : " Which hero use Ants as weapon ?",
  answer : "antman"
}
var queSeven ={
  question : "Which hero dies at end of end game 2 ? ",
  answer : "ironman"
}

var questionList = [queOne, queTwo, queThree, queFour, queFive,queSix, queSeven]


function quize(question, answer){
  for(var i=0; i<questionList.length; i++){
    var currentQuestion = questionList[i]
    var userAnswer = que(currentQuestion.question + "\n")
    if(userAnswer === currentQuestion.answer){
      console.log("Right !!!")
      score++;
    } else {
      console.log("Wrong !!!")
    }
    console.log("------------------------------------------------");
  }
  console.log(userName +" your total score is  " + score)

  if(score >=1){
    console.log(userName +" have break previous high score")
    console.log("------------------------------------------------")

    console.log("High Score Board")
    console.log("------------------------------------------------")
    console.log("Omkar |  5")
    console.log("Rajan |  6")
    console.log("------------------------------------------------")
    console.log("Send me Screen Shot to update high score")

  }
}

quize();