const messages = [
    "Not a chance!",
    "Yes!",
    "Keep dreaming",
    "Outcome hazy",
    "Ask again later",
    "In a month",
    "Possibly",
    "Try again!",
    "404"
  ];
  
  //function gets random message
  function getEightballMessage() {
  const messagesSize = messages.length;
  let randomNumber = Math.floor(Math.random() * messagesSize);
  return messages[randomNumber];
  }
  
  function changeMessage() {
  //clears the eight ball message
  let eightEl = document.getElementById('eight');
  eightEl.textContent = '';
  // puts message into <p id="answer">
  let answerEl = document.getElementById('answer');
  answerEl.textContent = getEightballMessage();
  }
  
  // when button is clicked, message is changed
  let buttonEl = document.getElementById('button');
  buttonEl.addEventListener('click', changeMessage);