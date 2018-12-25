$('.marquee').marquee({
  direction: 'down'
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 01, 2019 00:00:00").getTime();

// Update the count down every 01 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "<i> Dias,</i> " + hours + " <i>Hrs,</i> "
  + minutes + "<i> Mins,</i> " + seconds + "<i> Segs</i> ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    //Por editar :)
  }
}, 1000);