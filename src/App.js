const Lotto = require("./");
const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const inputValidation = require("./inputValidation");

class App {
  #countLottos;
  #pickedLottoNum;

  play() {
    this.inputMoney();
    this.printCountLottos();
    Console.close();
  }

  inputMoney() {
    Console.readLine(INPUTS.INPUT_MONEY, (money) => {
      inputValidation.checkThousandNum(money);
      this.#countLottos = Number(money) / 1000;
    });
  }

  printCountLottos() {
    Console.print(`${this.#countLottos}개를 구매했습니다.`);
  }

  //로또 뽑기 logic
  pickRandomLottoNumber() {
    const pickedLottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.#pickedLottoNum = pickedLottoNum;
  }

  makeLottosList() {}
}

module.exports = App;

//당첨번호 입력받기
// inputNumbers() {
//   Console.readLine(INPUTS.INPUT_NUMBERS, (numbers) => {
//     this.#numbers = numbers;
//   });
// };

//   randomBonusNumber() {
//     // const bonusNum = Random.
//   }
