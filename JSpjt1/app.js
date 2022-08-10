function changeColor() {
  const width = window.innerWidth;
  const maxWidth = window.screen.availWidth;
  const cal = width / maxWidth * 100;

  if (cal < 33) {
    document.body.style.backgroundColor = "#93A9D1";
  } else if (cal < 66) {
    document.body.style.backgroundColor = "#Ad5E99";
  } else {
    document.body.style.backgroundColor = "#F0C05A";
  }
}

const title = document.querySelector(".hello h1");
title.style.color = "white";

changeColor();
window.addEventListener('resize', changeColor);

