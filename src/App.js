const Lotto = require("./");
const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const inputValidation = require("./inputValidation");

class App {
  #countLottos;
  play() {
    this.inputMoney();
    this.outputCountLottos();
    Console.close();
  }

  inputMoney() {
    Console.readLine(INPUTS.INPUT_MONEY, (money) => {
      inputValidation.checkThousandNum(money);
      this.#countLottos = Number(money) / 1000;
    });
  }

  outputCountLottos() {
    Console.print(`${this.#countLottos}개를 구매했습니다.`);
  }

  makeLottosList() {
    
  }
}

module.exports = App;

//  //당첨번호 입력받기
// inputNumbers() {
//   Console.readLine(INPUTS.INPUT_NUMBERS, (numbers) => {
//     this.#numbers = numbers;
//   });
// };

//   //로또 뽑기 logic
//   randomLottoNumber() {
//     const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
//     return lottoNum;
//   }

//   randomBonusNumber() {
//     // const bonusNum = Random.
//   }
