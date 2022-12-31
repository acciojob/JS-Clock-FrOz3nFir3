const clock = document.querySelector(".clock-face");
const hoursHand = clock.querySelector(".hour-hand");
const minutesHand = clock.querySelector(".min-hand");
const secondsHand = clock.querySelector(".second-hand");


function updateTime() {
  const currentDate = new Date();

   // referenced ukdgit repository (although clock was working 100% the test cases aren't passing)
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();

  const hoursDegrees = 30 * hours + minutes / 2;;
  const minutesDegrees = 6 * minutes;
  const secondsDegrees = 6* seconds;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;


}

setInterval(updateTime, 1000);
updateTime();
