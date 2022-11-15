const Lotto = require("./Lotto");
const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const inputValidation = require("./inputValidation");
const { INPUTS, OUTPUTS } = require("./constants");

class App {
  #countLottos;
  #lottosList = []; //8개 [[1,2,1,2,2],[],...]
  #inputLottoNums;
  #scoreList = [];

  play() {
    this.inputStartWithMoney();
    // this.makeLottosList();
    this.inputNumbers();
    // Console.close();
  }

  inputStartWithMoney() {
    Console.readLine(INPUTS.INPUT_MONEY, (money) => {
      if (inputValidation.checkThousandNum(money)) {
        this.#countLottos = Number(money) / 1000;
        this.printCountLottos();
        this.makeLottosList();
      }
    });
  }

  printCountLottos() {
    Console.print(`\n${this.#countLottos}개를 구매했습니다.`);
  }

  //로또 뽑기 logic
  pickRandomLottoNumber() {
    const pickedLottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    return pickedLottoNum;
  }

  //여기 안됨
  makeLottosList() {
    let lottosList = [];
    for (let lottos = 0; lottos < this.#countLottos; lottos++) {
      const pickRandomLottoNumber = this.pickRandomLottoNumber().sort();
      const validateLottoNumber = new Lotto(pickRandomLottoNumber);
      lottosList.push(validateLottoNumber.inputLottoNumbers);
      Console.print(pickRandomLottoNumber);//
      Console.print(lottosList);//
    }
    this.#lottosList = lottosList;
    return this.#lottosList;
  }

  //당첨번호 입력받기 -> Lotto에 넣어서 validation 검증 받기
  inputNumbers() {
    Console.readLine(INPUTS.INPUT_NUMBERS, (numbers) => {
      this.#inputLottoNums = 
    });
  }

  //등수 logic -> 8개의 로또를 돌면서 체크
  winLottoScore() {
    for (let index = 0; index < this.#lottosList.length; index++) {}
  }

  //lottos는 array, numbers
  matchCountLotto(lottos, numbers) {}
}

const startLotto = new App();
startLotto.play();

module.exports = App;

//   randomBonusNumber() {
//     // const bonusNum = Random.
//   }
