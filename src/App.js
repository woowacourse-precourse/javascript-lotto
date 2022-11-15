const Lotto = require("./Lotto.js");
const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  play() {}
}

function finalFunc() {
  let result = [];
  let lottoMount = "";
  let lottoArray = [];
  insertMoney();
  function insertMoney() {
    Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      validateMoney(answer);
      return insertLotto();
    });
    //천원 단위 돈이 입력됐는지.
    function validateMoney(money) {
      if (money % 1000 !== 0) {
        throw "[ERROR]천원 단위 돈만 입력 가능함";
      } else {
        lottoMount += money / 1000;
        lottoMount = Number(lottoMount);
        console.log(typeof lottoMount);
        return generateLotto(lottoMount);
      }
    }
    function generateLotto(pageNumber) {
      for (i = 0; i < pageNumber; i++) {
        lottoArray.push(lottoPush());
      }
      function lottoPush() {
        let tempLottoRandom = [];
        let lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        tempLottoRandom.push(lottoNumbers);
        return tempLottoRandom;
      }
      Console.print(lottoArray);
    }
  }
}

function insertLotto() {
  Console.readLine("로또 당첨 번호를 입력해 주세요.", (lottoNumberAnswer) => {
    lottoNumberAnswer = lottoNumberAnswer.split(",");
    new Lotto(lottoNumberAnswer);
  });
}

function 
console.log(finalFunc());
//----최종 실행 코드 -----
// let playApp = new App();
// playApp.play();
module.exports = App;
