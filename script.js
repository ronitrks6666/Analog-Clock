setInterval(() => {
    d= new Date();
    htimr= d.getHours();
    min= d.getMinutes();
    sec= d.getSeconds();
    hrotate=htimr*30 +min/2;
    mrotate = min*6;
    srotate = sec*6;
  hour.style.transform = `rotate(${hrotate}deg)`;

    minHand.style.transform = `rotate(${mrotate}deg)`;

    secHand.style.transform = `rotate(${srotate}deg)`;
}, 1000);