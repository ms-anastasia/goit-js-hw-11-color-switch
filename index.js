const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
body: document.querySelector('body'),
startBtn: document.querySelector('[data-action="start"]'),
stopBtn: document.querySelector('[data-action="stop"]')
}

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

let intervalId;

function colorChange() {
  const randomColor = colors[randomIntegerFromInterval(0, 5)]
  refs.body.style.backgroundColor = randomColor;
}

function onStartBtn()
{
  intervalId = setInterval(colorChange, 1000);
  refs.startBtn.disabled = true;
}
function onStopBtn() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

