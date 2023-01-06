function colorClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    if (hours <= 9) {
      hours = "0" + hours;
    }
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }
    if (seconds <= 9) {
      seconds = "0" + seconds;
    }
    var clockFace = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = clockFace;
  
    setTimeout(function () {
      colorClock();
    }, 1000);
  }
  
  function numberColor() {
    let colors = [
      "#ff0000",
      "#999900",
      "#33cc33",
      "#0033cc",
      "#6600cc",
      "#ff9900",
      "#ff00ff",
      "#66ffff",
      "#33cccc"
    ];
    let randomItem = colors[Math.floor(Math.random() * colors.length)];
  
    document.querySelector(".clock").style.color = randomItem;
    setTimeout(function () {
      numberColor();
    }, 1000);
  }
  
  function backgroundColor() {
    let colors = [
      "#800000",
      "#996600",
      "#999900",
      "#739900",
      "#008000",
      "#006699",
      "#002699",
      "#4d0099",
      "#cc0052"
    ];
    let randomItem = colors[Math.floor(Math.random() * colors.length)];
  
    document.querySelector(".clock").style.background = randomItem;
    setTimeout(function () {
      backgroundColor();
    }, 1000);
  }
  
  colorClock();
  numberColor();
  backgroundColor();
 