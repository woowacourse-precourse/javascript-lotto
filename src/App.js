const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

function insertCoin(inputCoin){
 let Coin = parseInt(inputCoin/1000);
  return Coin;
} // user 입력 금액

function getWinningNum() {
  let inputNum = prompt("input number");
  let numList = inputNum.split(",");
  console.log(numList);
} // user 입력 당첨 번호


class App {
  play() {
    MissionUtils.Console.readLine("heelo",(answer)=>{
      insertCoin(answer);
    })
  }
}

module.exports = App;

const app = new App();
app.play();