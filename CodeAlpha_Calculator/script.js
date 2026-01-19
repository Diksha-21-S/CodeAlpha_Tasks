let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// BONUS: Keyboard support
document.addEventListener('keydown', (e) => {
  if (/[\d+\-*/.]/.test(e.key)) append(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Backspace') del();
  if (e.key.toLowerCase() === 'c') clearDisplay();
});

