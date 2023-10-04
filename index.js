setInterval(() => {
  d = new Date();
  hrtime = d.getHours();
  mintime = d.getMinutes();
  stime = d.getSeconds();
  hrrotation = 30 * hrtime + mintime / 2;
  minrotation = 6 * mintime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrrotation}deg)`;
  minute.style.transform = `rotate(${minrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
