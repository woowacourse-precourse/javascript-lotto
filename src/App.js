const Lotto = require("./Lotto");
const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const inputValidation = require("./inputValidation");
const { INPUTS, OUTPUTS } = require("./constants");

class App {
  #countLottos;
  #pickedLottoNum;

  play() {
    this.inputMoney();
    this.pickRandomLottoNumber();

    Console.close();
  }

  inputMoney() {
    Console.readLine(INPUTS.INPUT_MONEY, (money) => {
      if (inputValidation.checkThousandNum(money)) {
        this.#countLottos = Number(money) / 1000;
        this.printCountLottos();
      }
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

  makeLottosList() {
    for (let lottos = 0; lottos < this.#countLottos; lottos++) {
      const lottosList = new Lotto(this.pickRandomLottoNumber());
      Console.print(lottosList);
    }
  }
}

const startLotto = new App();
startLotto.play();

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
