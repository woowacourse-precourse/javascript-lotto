const { Lotto } = require("./Lotto");
const { Console } = require("@woowacourse/mission-utils");
class App {
  play() {
    insertMoney();
  }
}
let result = [];
function insertMoney() {
  let lottoMount = "";
  Console.readLine("구입금액을 입력해 주세요.", (answer) => {
    result.push(answer);
    validateMoney(answer);
    //구입금액이 1000원 단위로 떨어지는지..
    function validateMoney(money) {
      if (money % 1000 !== 0) {
        throw "[ERROR]천원 단위 돈만 입력 가능함";
      } else lottoMount = money / 1000;
      console.log(lottoMount);
    }
  });
}
let playApp = new App();
playApp.play();
module.exports = App;
