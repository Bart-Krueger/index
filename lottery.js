function enableButtons() {
  let password = document.getElementById('password').value;
  // Replace 'password123' with your desired password
  if (password === 'password123') {
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
    document.getElementById('password').disabled = true;
  } else {
    alert('Incorrect password. Please try again.');
  }
}

function disableButtons() {
  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

function generateNumber(buttonId) {
  let number = Math.floor(Math.random() * 49) + 1;
  let display = document.getElementById('display_numbers');
  
  // Check if there are already stored numbers in localStorage
  let storedNumbers = localStorage.getItem('generatedNumbers');
  let numbersToDisplay = '';

  if (storedNumbers) {
    numbersToDisplay = storedNumbers + '-' + number;
  } else {
    numbersToDisplay = number;
  }

  display.innerHTML = 'Generated Numbers: ' + numbersToDisplay;

  // Disable the button after generating the number
  document.getElementById(buttonId).disabled = true;

  // Store generated numbers in localStorage for later retrieval
  localStorage.setItem('generatedNumbers', numbersToDisplay);
}

window.onload = function() {
  let storedNumbers = localStorage.getItem('generatedNumbers');
  if (storedNumbers) {
    let display = document.getElementById('display_numbers');
    display.innerHTML = 'Generated Numbers: ' + storedNumbers;

    disableButtons();
  }
  
  document.getElementById('password').addEventListener('input', function() {
    enableButtons();
  });
};
