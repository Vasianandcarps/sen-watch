let date_in_future = new Date(prompt("date in future"));
function time() {
  let date = new Date();
  let ms = date_in_future - date;

  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  document.getElementById("time").innerHTML =
    days + ":" + hours + ":" + minutes + ":" + seconds;
  if (ms < 0) {
    clearInterval();
    document.getElementById("time").innerHTML = "End of time!";
  }
}
setInterval(time, 1000);

function setNewTime() {
  date_in_future = new Date(prompt("date in future"));
  time();
}
//2022-05-07
