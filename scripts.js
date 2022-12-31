const clock = document.querySelector(".clock-face");
const hoursHand = clock.querySelector(".hour-hand");
const minutesHand = clock.querySelector(".min-hand");
const secondsHand = clock.querySelector(".second-hand");

updateTime();

function updateTime() {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = currentDate.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = currentDate.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(updateTime, 1000);
