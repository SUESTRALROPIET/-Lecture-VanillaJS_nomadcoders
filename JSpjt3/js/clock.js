const clock = document.querySelector("#clock");

function getClock() {
  const now = new Date();
  const year = now.getFullYear();

  const target = new Date(`${year}-12-25 00:00:00`);
  const date = new Date(target-now);
  
  const month = Math.floor(date.getTime() / (1000 * 60 * 60 * 24));

  // const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours() - 9).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${month}d ${hour}h, ${min}m, ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
