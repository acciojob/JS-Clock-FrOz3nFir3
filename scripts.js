const clock = document.querySelector(".clock-face");
const hoursHand = clock.querySelector(".hour-hand");
const minutesHand = clock.querySelector(".min-hand");
const secondsHand = clock.querySelector(".second-hand");

updateTime();

function updateTime() {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // referenced ukdgit repository (although clock was working 100% the test cases aren't passing)
  const hoursDegrees = 30 * hours + minutes / 2;;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutesDegrees = 6 * minutes;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = currentDate.getSeconds();
  const secondsDegrees = 6 * seconds;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(updateTime, 1000);
