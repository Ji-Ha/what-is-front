
function changeBackgroundColor() {
  const date = getDate();
  const body = document.querySelector("body");
  // console.log(date.getSeconds().toString());
  // if(date.getSeconds() % 2 === 1){
  //   body.style.backgroundColor = "#e74c3c";
  // }else{
  //   body.style.backgroundColor = "#c0392b";
  // }
  let red = "52";
  let green = "152";
  let blue = "219";
  let opacity = 1;

  opacity = date.getSeconds()/60;

  body.style.backgroundColor = "rgba(" + [red, green, blue, opacity.toString()].join(',')+")";

  getTime();
}


function init() {
  getTime();
  setInterval(changeBackgroundColor, 1000);
}

init();