const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getDate(){
  return new Date();
}

function getTime(){
  const date = new Date();
  const times = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${times < 10 ? `0${times}`:times} : ${minutes < 10 ? `0${minutes}`:minutes} : ${seconds < 10 ? `0${seconds}`:seconds}`;
}