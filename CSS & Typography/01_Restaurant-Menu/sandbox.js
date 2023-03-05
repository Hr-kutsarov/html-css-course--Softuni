let time = new Date();
let timeSeconds = time.getUTCSeconds();
// hax local time
let timeHours = time.getUTCHours() + 2;
let timeMinutes = time.getUTCMinutes();

function formatNumber(value) {
  let result = value;
  if (value < 10) {
    return `0${result}`;
  } else {
    return `${result}`;
  }
}

function changeTime() {
  document.getElementById("demo").textContent = `${formatNumber(
    timeHours
  )} : ${formatNumber(timeMinutes)} : ${formatNumber(timeSeconds)}`;
}
