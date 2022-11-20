const Lotto = require("./Lotto.js");
const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  play() {}
}
let lottoArray = []; // 로또 자동으로 돌린거 들어있는 배열

function finalFunc() {
  let result = [];
  let lottoMount = "";
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
    //몇장 구매할껀지 파악해서 로또 생성하기
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
//당첨 로또 입력하기
function insertLotto() {
  Console.readLine("로또 당첨 번호를 입력해 주세요.", (lottoNumberAnswer) => {
    Console.readLine("보너스 점수를 입력하세요", (bonusNumber) => {
      lottoNumberAnswer += "," + bonusNumber;
      Console.print(lottoNumberAnswer);
      lottoNumberAnswer = lottoNumberAnswer.split(",");
      new Lotto(lottoNumberAnswer);
      return validateWinner(lottoNumberAnswer);
    });
  });
}
//당첨여부를 판별해주는 함수
function validateWinner(lottoNumberAnswer) {
  lottoNumberAnswer = lottoNumberAnswer.map((element) => Number(element));
  console.log(typeof lottoNumberAnswer[1]);
  const bonusNumber = lottoNumberAnswer.pop(); // 7 //lottoNumberAnswer [1,2,3,4,5,6];
  for (i = 0; i < lottoArray.length; i++) {
    let matchNumber = 0; //당첨 번호랑 일치하는 번호갯수
    let validateLotto = [...lottoArray[i]];
    console.log(validateLotto);
    for (j = 0; j < lottoNumberAnswer; j++) {
      let winningNumber = lottoNumberAnswer[j];
      if (validateLotto.includes(winningNumber)) {
        matchNumber += 1;
      }
    }
  }
}
console.log(insertLotto());
// console.log(finalFunc());
//----최종 실행 코드 -----
// let playApp = new App();
// playApp.play();
module.exports = App;
