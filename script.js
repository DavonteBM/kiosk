var today = new Date()
var curHr = today.getHours()

//Choose the greeting depending on the time of day
if (curHr < 12) {
    greetingMessage = ('Good Morning')
} else if (curHr < 17) {
    greetingMessage = ('Good Afternoon')
} else {
  greetingMessage = ('Good Evening')
}


//Show the current time
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

document.getElementById("greetings").textContent = greetingMessage;


