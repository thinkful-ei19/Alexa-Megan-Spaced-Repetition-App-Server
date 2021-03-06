'use strict';

const { LinkedList } = require('./linkedList');
const questions = require('../db/questions');



const QuestionList= new LinkedList();
questions.map(question => {
  QuestionList.insertLast(question);
});


function displayFirstQuestion(list) {
  return list.head.value;
}

///////////// SIMPLE ALGORITHM /////////////

function displayAndRemove(list) {
  displayFirstQuestion(list);

  const firstQues = list.head.value;
  // list.insertLast(firstQues);
  list.remove(firstQues);
  return list;
}

// displayFirstQuestion(QuestionList);
// simple(QuestionList);

///////////// BETTER ALGORITHM /////////////

// Given a list of questions:
//     Take the first question in the list
//     Ask the question
//     If the answer was correct:
//         Put the question at the back of the list
//     If the answer was wrong:
//         Move the question back one in the list

//answer ---> 
function better(list, answer) {
  displayFirstQuestion(list);

  for (let i = 0; i < questions.length; i++) {
    console.log('look here', questions[i].answer);
    if (answer === questions[i].answer) {
      console.log('answer was correct');
    } else if (answer !== questions[i].answer) {
      console.log('answer was incorrect');
    }
  }
  return;
  
}
// better(QuestionList, 'a');

///////////// EVEN BETTER ALGORITHM /////////////

// Given a list of questions with corresponding "memory values", M, starting at 1:
//     Take the first question in the list
//     Ask the question
//     If the answer was correct: // => if correct go to next node
//         Double the value of M
//     If the answer was wrong:
//         Reset M to 1 // => for that question
//     Move the question back M places in the list

// function evenBetter(list) {
//   displayFirstQuestion(list);

//   // M- index?
//   // M-score?
//   // let memValue = 1;
//   // const index = indexOf(question) // => helper function
//   // if (req.body.answer === questions.answer)
//   // 
// }
  
module.exports = { QuestionList, displayAndRemove };