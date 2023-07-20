// Define the question and options
var question = {
    text: 'What is the capital of France?',
    options: [
      { text: 'London', value: 'a' },
      { text: 'Paris', value: 'b' },
      { text: 'Berlin', value: 'c' }
    ]
  };
  
  // Get the question and options elements
  var questionText = document.getElementById('question-text');
  var options = document.getElementById('options');
  
  // Set the question text
  questionText.innerHTML = question.text;
  
  // Set the options
  for (var i = 0; i < question.options.length; i++) {
    var option = question.options[i];
  
    var li = document.createElement('li');
    var input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = option.value;
    li.appendChild(input);
  
    var label = document.createElement('label');
    label.innerHTML = option.text;
    li.appendChild(label);
  
    options.appendChild(li);
  }
  
  function checkAnswer() {
    // Get the selected answer
    var answer = document.querySelector('input[name="answer"]:checked');
  
    // If an answer is selected, check if it's correct
    if (answer) {
      if (answer.value === 'b') {
        alert('Correct!');
      } else {
        alert('Incorrect!');
      }
    } else {
      alert('Please select an answer.');
    }
  }