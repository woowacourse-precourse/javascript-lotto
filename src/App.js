const Lotto = require("./Lotto");
const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const inputValidation = require("./inputValidation");
const { INPUTS, OUTPUTS } = require("./constants");

class App {
  #countLottos;
  #pickedLottoNum;
  #lottosList = [];

  play() {
    this.inputMoney();
    // this.pickRandomLottoNumber();
    this.makeLottosList();
    this.inputNumbers();
    // Console.close();
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
    Console.print(`\n${this.#countLottos}개를 구매했습니다.`);
  }

  //로또 뽑기 logic
  pickRandomLottoNumber() {
    const pickedLottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.#pickedLottoNum = pickedLottoNum;
  }

  //여기 안됨
  makeLottosList() {
    let lottosList = [];
    for (let lottos = 0; lottos < this.#countLottos; lottos++) {
      const lottoNums = new Lotto(this.pickRandomLottoNumber());
      lottosList.push(lottoNums.inputLottoNumbers);
      Console.print(sort(lottoNums.inputLottoNumbers));
    }
    this.#lottosList = lottosList;
    return this.#lottosList;
  }

  //당첨번호 입력받기 -> Lotto에 넣어서 validation 검증 받기
  inputNumbers() {
    Console.readLine(INPUTS.INPUT_NUMBERS, (numbers) => {
      this.#numbers = numbers;
    });
  }
}

const startLotto = new App();
startLotto.play();

module.exports = App;

//   randomBonusNumber() {
//     // const bonusNum = Random.
//   }
