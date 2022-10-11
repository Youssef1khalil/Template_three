let days = document.querySelector(".box .time .unit .days");
let hours = document.querySelector(".box .time .unit .hours");
let minuts = document.querySelector(".box .time .unit .minuts");
let seconds = document.querySelector(".box .time .unit .seconds");

let countDownInterval;
let birthDate = new Date("dec 17,2022");

countDownInterval = setInterval(() => {
  let dateNow = new Date().getTime();

  let CountDown = birthDate - dateNow;
  days.innerHTML = `${Math.floor(CountDown / (1000 * 60 * 60 * 24))}`;
  hours.innerHTML = `${Math.floor(
    (CountDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )}`;
  minuts.innerHTML = `${Math.floor(
    (CountDown % (1000 * 60 * 60)) / (1000 * 60)
  )}`;
  seconds.innerHTML = `${Math.floor((CountDown % (1000 * 60)) / 1000)}`;

  days.innerHTML = days.innerHTML < 10 ? `0${days.innerHTML}` : days.innerHTML;
  hours.innerHTML =
    hours.innerHTML < 10 ? `0${hours.innerHTML}` : hours.innerHTML;
  minuts.innerHTML =
    minuts.innerHTML < 10 ? `0${minuts.innerHTML}` : minuts.innerHTML;
  seconds.innerHTML =
    seconds.innerHTML < 10 ? `0${seconds.innerHTML}` : seconds.innerHTML;
}, 1000);
