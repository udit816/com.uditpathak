const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 31, 2019 23:59:59').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
        distance = countDown - now;

        if (distance > 0) {
            document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        } else {
            clearInterval(x);
        document.getElementById("success").innerHTML = "Happy New year!";
        }
        
    }, second)