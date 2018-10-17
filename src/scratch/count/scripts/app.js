var now = moment();
var iostart = moment(new Date("December 26, 2014 22:00:00 EST"));
var loc = "Antarctica";
document.querySelector("#tripLocation").textContent = loc;
var duration = moment.duration(iostart - now);

var timer = document.querySelector('#timer');
var days = document.querySelector("#days");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var asHours = document.querySelector('#asHours');
var asMinutes = document.querySelector('#asMinutes');

function tick() {
  var end = new Date(Date.now() + minutes * 60 * 1000);

  var now = moment();
  var delta = iostart - now;

  if (iostart - now <= 0) {
     timer.parentElement.innerHTML = 'NOW!';
  } else {
    var duration = moment.duration(iostart - now);
    var min = duration.minutes();
    var sec = duration.seconds();
    
    days.textContent = Math.floor(duration.asDays());
    hours.textContent = duration.hours();
    minutes.textContent = (min < 10 ? '0' + min : min);
    seconds.textContent = (sec < 10 ? '0' + sec : sec);

    asHours.innerHTML = "Or <b>" + numeral(duration.asHours()).format('0,0.00') + "</b> hours.";
    asMinutes.innerHTML = "Or <b>" + numeral(duration.asMinutes()).format('0,0.00') + "</b> minutes.";
    //asHours.textContent = "Or " + numeral(duration.asHours()).format('0,0.00') + " hours.";
    //asMinutes.textContent = "Or " + numeral(duration.asMinutes()).format('0,0.00') + " minutes.";

    document.title = Math.floor(duration.asDays()) + " days until " + loc;
  }

}

tick();
setInterval(function() {
  tick();
}, 1000);
setTimeout(function() {
  document.getElementById("container").removeAttribute("class");
  window.scrollTo(0, 1);
}, 250);

document.querySelector('#close').addEventListener('click', function(evt) {
  window.close();
});