const messages = [
    "Very doubtful.",
    "It is certain.",
    "My sources say no.",
    "Reply hazy, try again.",
    "Better not tell you now.",
    "Outlook good.",
    "Concentrate and ask again.",
    "Most likely.",
    "Don't count on it."
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