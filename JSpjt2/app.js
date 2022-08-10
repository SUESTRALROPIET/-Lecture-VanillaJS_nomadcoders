const gameForm = document.querySelector('#game-form');
const outputText = document.querySelector('#output-div');
const inputResult = outputText.querySelector("p");
const outputResult = outputText.querySelector("h3");

function startGame(e) {
  e.preventDefault();
  let rangeNum = e.target[0].value;
  let yourNum = e.target[1].value;
  
  if(rangeNum ===  '' || yourNum == '') {
    alert("숫자를 입력해주세요.")
    return
  }
  
  rangeNum = parseInt(rangeNum);
  yourNum = parseInt(yourNum);
  let machineNum = Math.floor(Math.random() * (rangeNum + 1));
  if(yourNum > rangeNum) {
    alert("입력한 숫자가 지정한 숫자보다 큽니다.")
  } else {
    inputResult.innerText = `You Chose: ${yourNum}, the machine chose: ${machineNum}.`
    
    if(yourNum === machineNum) {
      outputResult.innerText = "You won!"
    } else {
      outputResult.innerText = "You lost!"
    }
  }
}

gameForm.addEventListener("submit", startGame);
