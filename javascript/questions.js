alert(`HELLO WELCOME TO MY TRIVIA GAME`);
alert(`You will have 20 questions with 4 different sections.`);
alert(`Answer 5-9 correct and recieve a bronze medal.`);
alert(`Answer 10-14 correct and recieve a sliver medal.`);
alert(`Answer 15-19 correct and recieve a gold medal.`);
alert(`Answer all 20 correct and recieve a PLATINUM medal.`)
alert(`Less than 5 questions answered correct you will recieve no medal.`);



/////////////////////// GENERAL TRIVIA QUESTIONS SECTION ////////////////////////////////////////////
alert(`THE FIRST SECTION WILL BE 5 RANDOM TRIVIA QUESTIONS, GOOD LUCK!!!`); 

let correct = 0;

const question1 = prompt(`QUESTION 1: How many times does the average human poop in a day?`);
if ( question1 === '3' ) {
    correct += 1;
    document.querySelector('.ans1').innerHTML = `You answered CORRECT to the question "How many times does the average human poop in a day?" Correct Answer: 3`;
    document.querySelector('.ans1').style.color = 'green';
} else if ( question1.toUpperCase() === 'THREE' ) {
    correct += 1;
    document.querySelector('.ans1').innerHTML = `You answered CORRECT to the question "How many times does the average human poop in a day?" Correct Answer: 3`;
    document.querySelector('.ans1').style.color = 'green';
} else {
    document.querySelector('.ans1').innerHTML = `You answered INCORRECT to the question "How many times does the average human poop in a day?" Correct Answer: 3`;
    document.querySelector('.ans1').style.color = 'red';
}
 
const question2 = prompt(`QUESTION 2: What does the www stand for in a web browser?`);
if ( question2.toUpperCase() === 'WORLD WIDE WEB' ) {
    correct += 1;
    document.querySelector('.ans2').innerHTML = `You answered CORRECT to the question "What does the www stand for in a web browser?" Correct Answer: World Wide Web`;
    document.querySelector('.ans2').style.color = 'green';
} else {
    document.querySelector('.ans2').innerHTML = `You answered INCORRECT to the question "What does the www stand for in a web browser?" Correct Answer: World Wide Web`;
    document.querySelector('.ans2').style.color = 'red';
}

const question3 = prompt(`QUESTION 3: What geometric shape is used for stop signs?`);
if ( question3.toUpperCase() === 'OCTAGON' ) {
    correct += 1;
    document.querySelector('.ans3').innerHTML = `You answered CORRECT to the question "What geometric shape is used for stop signs?" Correct Answer: Octagon`;
    document.querySelector('.ans3').style.color = 'green';
} else {
    document.querySelector('.ans3').innerHTML = `You answered INCORRECT to the question "What geometric shape is used for stop signs?" Correct Answer: Octagon`;
    document.querySelector('.ans3').style.color = 'red';
}

const question4 =  prompt(`QUESTION 4: What is the name of the largest ocean on earth?`);
if ( question4.toUpperCase() === 'PACIFIC' ) {
    correct += 1;
    document.querySelector('.ans4').innerHTML = `You answered CORRECT to the question "What is the name of the largest ocean on earth?" Correct Answer: Pacific Ocean`;
    document.querySelector('.ans4').style.color = 'green';
} else if ( question4.toUpperCase() === 'PACIFIC OCEAN' ) {
    correct += 1;
    document.querySelector('.ans4').innerHTML = `You answered CORRECT to the question "What is the name of the largest ocean on earth?" Correct Answer: Pacific Ocean`;
    document.querySelector('.ans4').style.color = 'green';
} else {
    document.querySelector('.ans4').innerHTML = `You answered INCORRECT to the question "What is the name of the largest ocean on earth?" Correct Answer: Pacific Ocean`;
    document.querySelector('.ans4').style.color = 'red';
}

const question5 =  prompt(`QUESTION 5: What is the name of the first planet from the sun?`);
if ( question5.toUpperCase() === 'MERCURY' ) {
    correct += 1;
    document.querySelector('.ans5').innerHTML = `You answered CORRECT to the question "What is the name of the first planet from the sun?" Correct Answer: Mercury`;
    document.querySelector('.ans5').style.color = 'green';
} else {
    document.querySelector('.ans5').innerHTML = `You answered INCORRECT to the question "What is the name of the first planet from the sun?" Correct Answer: Mercury`;
    document.querySelector('.ans5').style.color = 'red';
}


console.log(correct);

document.querySelector('.score').innerHTML = `<h3>You got ${correct} questions out of 5 correct in the general questions section.</h3>`; 



///////////////////////////// SPORTS SECTION ///////////////////////////// 
alert(`THE NEXT SECTION WILL BE 5 SPORTS QUESTIONS.`);

let correct2 = 0;

const question6 =  prompt(`QUESTION 6: Which former NBA player was nicknamed Agent 0?`);
if ( question6.toUpperCase() === 'GILBERT ARENAS' ) {
    correct += 1;
    correct2 += 1;
    document.querySelector('.ans6').innerHTML = `You answered CORRECT to the question "Which former NBA player was nicknamed Agent 0?" Correct Answer: Gilbert Arenas`;
    document.querySelector('.ans6').style.color = 'green';
} else {
    document.querySelector('.ans6').innerHTML = `You answered INCORRECT to the question "Which former NBA player was nicknamed Agent 0?" Correct Answer: Gilbert Arenas`;
    document.querySelector('.ans6').style.color = 'red';
}

const question7 =  prompt(`QUESTION 7: Who has the most wins ever in the NASCAR cup series?`);
if ( question7.toUpperCase() === 'RICHARD PETTY' ) {
    correct += 1;
    correct2 += 1;
    document.querySelector('.ans7').innerHTML = `You answered CORRECT to the question "Who has the most wins ever in the NASCAR cup series?" Correct Answer: Richard Petty`;
    document.querySelector('.ans7').style.color = 'green';
} else {
    document.querySelector('.ans7').innerHTML = `You answered INCORRECT to the question "Who has the most wins ever in the NASCAR cup series?" Correct Answer: Richard Petty`;
    document.querySelector('.ans7').style.color = 'red';
}

const question8 =  prompt(`QUESTION 8: Who is the greatest Laker of all time?`);
if ( question8.toUpperCase() === 'KOBE BRYANT' ) {
    correct += 1;
    correct2 += 1;
    document.querySelector('.ans8').innerHTML = `You answered CORRECT to the question "Who is the greatest Laker of all time?" Correct Answer: Kobe Bryant`;
    document.querySelector('.ans8').style.color = 'green';
} else if ( question8.toUpperCase() === 'KOBE' ) {
    correct += 1;
    correct2 += 1;
    document.querySelector('.ans8').innerHTML = `You answered CORRECT to the question "Who is the greatest Laker of all time?" Correct Answer: Kobe Bryant`;
    document.querySelector('.ans8').style.color = 'green';
} 
else {
    document.querySelector('.ans8').innerHTML = `You answered INCORRECT to the question "Who is the greatest Laker of all time?" Correct Answer: Kobe Bryant`;
    document.querySelector('.ans8').style.color = 'red';
}

const question9 =  prompt(`QUESTION 9: What does the NBA stand for?`);
if ( question9.toUpperCase() === 'NATIONAL BASKETBALL ASSOCIATION' ) {
    correct += 1;
    correct2 += 1;
    document.querySelector('.ans9').innerHTML = `You answered CORRECT to the question "What does the NBA stand for?" Correct Answer: National Baketball Association`;
    document.querySelector('.ans9').style.color = 'green';
} else {
    document.querySelector('.ans9').innerHTML = `You answered INCORRECT to the question "What does the NBA stand for?" Correct Answer: National Baketball Association`;
    document.querySelector('.ans9').style.color = 'red';
}

const question10 =  prompt(`QUESTION 10: What team is considered the oldest in the NFL?`);
if ( question10.toUpperCase() === 'GREEN BAY PACKERS' ) {
    correct += 1;
    correct2 += 1;
    document.querySelector('.ans10').innerHTML = `You answered CORRECT to the question "What team is considered the oldest in the NFL?" Correct Answer: Green Bay Packers`;
    document.querySelector('.ans10').style.color = 'green';
} else if ( question10.toUpperCase() === 'PACKERS' ) {
    correct += 1;
    correct2 +=1;
    document.querySelector('.ans10').innerHTML = `You answered CORRECT to the question "What team is considered the oldest in the NFL?" Correct Answer: Green Bay Packers`;
    document.querySelector('.ans10').style.color = 'green';
} else {
    document.querySelector('.ans10').innerHTML = `You answered INCORRECT to the question "What team is considered the oldest in the NFL?" Correct Answer: Green Bay Packers`;
    document.querySelector('.ans10').style.color = 'red';
}

console.log(correct2);
console.log(correct);

document.querySelector('.score2').innerHTML = `<h3>You got ${correct2} questions out of 5 correct in the sports section.</h3>`; 



//////////////////////////////// SCIENCE QUESTIONS //////////////////////////////////////////////

alert(`The next section will be 5 science questions.`);

let correct3 = 0;

const question11 = prompt(`What is the name of the largest planet in the solar system?`);
if ( question11.toUpperCase() === 'JUPITER' ) {
    correct += 1;
    correct3 += 1;
    document.querySelector('.ans11').innerHTML = `You answered CORRECT to the question "What is the name of the largest planet on the solar system?" Correct answer: Jupiter`;
    document.querySelector('.ans11').style.color = `green`;
} else {
    document.querySelector('.ans11').innerHTML = `You answered INCORRECT to the question "What is the name of the largest planet on the solar system?" Correct answer: Jupiter`;
    document.querySelector('.ans11').style.color = `red`;
} 

const question12 = prompt(`In what type of matter are atoms most tightly packed?`);
if ( question12.toUpperCase() === 'SOLIDS' ) {
    correct += 1;
    correct3 += 1;
    document.querySelector('.ans12').innerHTML = `You answered CORRECT to the question "In what type of matter are atoms most tightly packed?" Correct answer: Solids`;
    document.querySelector('.ans12').style.color = `green`;
} else if ( question12.toUpperCase() === 'SOLID') {
    correct += 1;
    correct3 += 1;
    document.querySelector('.ans12').innerHTML = `You answered CORRECT to the question "In what type of matter are atoms most tightly packed?" Correct answer: Solids`;
    document.querySelector('.ans12').style.color = `green`;
} else {
    document.querySelector('.ans12').innerHTML = `You answered INCORRECT to the question "In what type of matter are atoms most tightly packed?" Correct answer: Solids`;
    document.querySelector('.ans12').style.color = `red`;
} 

const question13 = prompt(`What is the hottest planet in the solar system?`);
if ( question13.toUpperCase() === 'VENUS' ) {
    correct += 1;
    correct3 += 1;
    document.querySelector('.ans13').innerHTML = `You answered CORRECT to the question "What is the hottest planet in the solar system?" Correct answer: Venus`;
    document.querySelector('.ans13').style.color = `green`;
} else {
    document.querySelector('.ans13').innerHTML = `You answered INCORRECT to the question "What is the hottest planet in the solar system?" Correct answer: Venus`;
    document.querySelector('.ans13').style.color = `red`;
} 

const question14 = prompt(`How many teeth do humans have?`);
if ( question14.toUpperCase() === '32' ) {
    correct += 1;
    correct3 += 1;
    document.querySelector('.ans14').innerHTML = `You answered CORRECT to the question "How many teeth do humans have?" Correct answer: 32`;
    document.querySelector('.ans14').style.color = `green`;
} else {
    document.querySelector('.ans14').innerHTML = `You answered INCORRECT to the question "How many teeth do humans have?" Correct answer: 32`;
    document.querySelector('.ans14').style.color = `red`;
} 

const question15 = prompt(`How many limbs does an octopus have?`);
if ( question15.toUpperCase() === '8' ) {
    correct += 1;
    correct3 += 1;
    document.querySelector('.ans15').innerHTML = `You answered CORRECT to the question "How many limbs does an octopus have?" Correct answer: 8`;
    document.querySelector('.ans15').style.color = `green`;
} else {
    document.querySelector('.ans15').innerHTML = `You answered INCORRECT to the question "How many limbs does an octopus have?" Correct answer: 8`;
    document.querySelector('.ans15').style.color = `red`;
}

console.log(correct3);
console.log(correct);

document.querySelector('.score3').innerHTML = `<h3>You got ${correct3} questions out of 5 correct in the science section.</h3>`;


//////////////////// GEOGRAPHY QUESTIONS ////////////////////////////////////////////////////

alert(`The last section will be 5 geography questions`);

let correct4 = 0;

const question16 = prompt(`What is the name of the biggest state in the U.S?`);
if ( question16.toUpperCase() === 'TEXAS' ) {
    correct += 1;
    correct4 += 1;
    document.querySelector('.ans16').innerHTML = `You answered CORRECT to the question "What is the name of the biggest state in the U.S?" Correct answer: Texas`;
    document.querySelector('.ans16').style.color = `green`;
} else {
    document.querySelector('.ans16').innerHTML = `You answered INCORRECT to the question "What is the name of the biggest state in the U.S?" Correct answer: Texas`;
    document.querySelector('.ans16').style.color = `red`;
}

const question17 = prompt(`Which country has the largest population in the world?`);
if ( question17.toUpperCase() === 'CHINA' ) {
    correct += 1;
    correct4 += 1;
    document.querySelector('.ans17').innerHTML = `You answered CORRECT to the question "Which country has the largest population in the world?" Correct answer: China`;
    document.querySelector('.ans17').style.color = `green`;
} else {
    document.querySelector('.ans17').innerHTML = `You answered INCORRECT to the question "Which country has the largest population in the world? " Correct answer: China`;
    document.querySelector('.ans17').style.color = `red`;
}

const question18 = prompt(`What American city is the Golden Gate Bridge located in?`);
if ( question18.toUpperCase() === 'SAN FRANCISCO' ) {
    correct += 1;
    correct4 += 1;
    document.querySelector('.ans18').innerHTML = `You answered CORRECT to the question "What American city is the Golden Gate Bridge located in?" Correct answer: San Francisco`;
    document.querySelector('.ans18').style.color = `green`;
} else {
    document.querySelector('.ans18').innerHTML = `You answered INCORRECT to the question "What American city is the Golden Gate Bridge located in?" Correct answer: San Francisco`;
    document.querySelector('.ans18').style.color = `red`;
}

const question19 = prompt(`What is the name of the largest country in the world?`);
if ( question19.toUpperCase() === 'RUSSIA' ) {
    correct += 1;
    correct4 += 1;
    document.querySelector('.ans19').innerHTML = `You answered CORRECT to the question "What is the name of the largest country in the world?" Correct answer: Russia`;
    document.querySelector('.ans19').style.color = `green`;
} else {
    document.querySelector('.ans19').innerHTML = `You answered INCORRECT to the question "What is the name of the largest country in the world?" Correct answer: Russia`;
    document.querySelector('.ans19').style.color = `red`;
}

const question20 = prompt(`What country has the most natural lakes?`);
if ( question20.toUpperCase() === 'CANADA' ) {
    correct += 1;
    correct4 += 1;
    document.querySelector('.ans20').innerHTML = `You answered CORRECT to the question "What country has the most natural lakes?" Correct answer: Canada`;
    document.querySelector('.ans20').style.color = `green`;
} else {
    document.querySelector('.ans20').innerHTML = `You answered INCORRECT to the question "What country has the most natural lakes?" Correct answer: Canada`;
    document.querySelector('.ans20').style.color = `red`;
}

console.log(correct4);
console.log(correct);

document.querySelector('.score4').innerHTML = `<h3>You got ${correct4} questions out of 5 correct in the science section.</h3>`;



////////////////////////// MEDAL //////////////////////////////////////////////////////

let medal;

if ( correct === 20 ) {
    medal = 'PLATINUM MEDAL';
    document.querySelector('.medal').innerHTML = `<h1>CONGRATULATIONS, you got all ${correct} out of 20 correct! Medal Recieved: PLATINUM</h1>`;
} else if ( correct >= 15 ) {
    medal = 'GOLD MEDAL';
    document.querySelector('.medal').innerHTML = `<h1>CONGRATULATIONS, you got ${correct} out of 20 correct! Medal Recieved: GOLD</h1>`;
} else if ( correct >= 10 ) {
    medal = 'Silver Medal';
    document.querySelector('.medal').innerHTML = `<h1>Congratulations, you got ${correct} out of 20 correct! Medal Recieved: SILVER</h1>`;
} else if ( correct >= 5 ) {
    medal = 'Bronze Medal';
    document.querySelector('.medal').innerHTML = `<h1>You got ${correct} out of 20 correct! Medal Recieved: BRONZE</h1>`;
} else {
    medal = 'No Medal :(';
    document.querySelector('.medal').innerHTML = `<h1>Sorry, you got ${correct} out of 20 correct. Medal Recieved: None :(</h1>`;
}

console.log(medal);