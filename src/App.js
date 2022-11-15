const Lotto = require("./Lotto");
const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const inputValidation = require("./inputValidation");
const { INPUTS, OUTPUTS } = require("./constants");

class App {
  #countLottos;
  #lottosList = []; //8개 [[1,2,1,2,2],[],...]
  #inputWinningLottoNums;
  #inputBonusNum;
  #countList = [];
  #scoreList = [0, 0, 0, 0, 0];

  play() {
    this.inputStartWithMoney();
    // Console.close();
  }

  inputStartWithMoney() {
    Console.readLine(INPUTS.INPUT_MONEY, (money) => {
      if (inputValidation.checkThousandNum(money)) {
        this.#countLottos = Number(money) / 1000;
        this.printCountLottos();
        this.makeLottosList();
        this.inputWinningNumbers();
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

  makeLottosList() {
    let lottosList = [];
    for (let lottos = 0; lottos < this.#countLottos; lottos++) {
      const pickRandomLottoNumber = this.pickRandomLottoNumber().sort(
        (a, b) => a - b
      );
      const validateLottoNumber = new Lotto(pickRandomLottoNumber);
      lottosList.push(validateLottoNumber.inputLottoNumbers);
      Console.print(pickRandomLottoNumber); //
      // Console.print(lottosList);
    }
    this.#lottosList = lottosList;
    return this.#lottosList;
  }

  //당첨번호 입력받기 -> Lotto에 넣어서 validation 검증 받기
  inputWinningNumbers() {
    Console.readLine("\n" + INPUTS.INPUT_NUMBERS, (winningNumbers) => {
      const inputWinningNumArr = winningNumbers
        .split(",")
        .map((value) => Number(value));
      const validateWinningLottoNumber = new Lotto(inputWinningNumArr);
      this.#inputWinningLottoNums =
        validateWinningLottoNumber.inputLottoNumbers;
      Console.print(this.#inputWinningLottoNums); //
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("\n" + INPUTS.INPUT_BONUS, (bonus) => {
      if (this.#inputWinningLottoNums.includes(Number(bonus))) {
        throw new Error(
          "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
        );
      }
      this.#inputBonusNum = Number(bonus);
      Console.print(this.#inputBonusNum); //
      this.printLottoScore();
    });
  }

  printLottoScore() {
    Console.print("\n" + "당첨 통계\n" + "---");
    Console.print(OUTPUTS.CORRECT_THREE + this.#scoreList[0] + "개");
    Console.print(OUTPUTS.CORRECT_FOUR + this.#scoreList[1] + "개");
    Console.print(OUTPUTS.CORRECT_ONLY_FIVE + this.#scoreList[2] + "개");
    Console.print(OUTPUTS.CORRECT_FIVE_BONUS + this.#scoreList[3] + "개");
    Console.print(OUTPUTS.CORRECT_SIX + this.#scoreList[4] + "개");
  }

  //score 합계
  winLottoScore() {
    for (let index = 0; index < this.#countList.length; index++) {
      if (this.#countList[index] === 3 || this.#countList[index] === 13) {
        this.#scoreList[0] += 1;
      }
      if (this.#countList[index] === 4 || this.#countList[index] === 14) {
        this.#scoreList[1] += 1;
      }
      if (this.#countList[index] === 5) {
        this.#scoreList[2] += 1;
      }
      if (this.#countList[index] === 15) {
        this.#scoreList[3] += 1;
      }
      if (this.#countList[index] === 6 || this.#countList[index] === 16) {
        this.#scoreList[4] += 1;
      }
    }
  }

  //등수 logic -> 8개의 로또를 돌면서 체크
  countLottoScore() {
    for (let index = 0; index < this.#lottosList.length; index++) {
      const countPlus = countMatchingLotto(this.#lottosList[index]);
      Console.print(countPlus); //
      return this.#countList.push(countPlus);
    }
  }

  //랜덤 로또번호에 같은 번호 개수 구하기
  //보너스 번호가 같을 경우 10을 더하기
  countMatchingLotto(lottos) {
    let count = 0;
    const overlap = lottos.filter((same) =>
      this.#inputWinningLottoNums.includes(same)
    );
    count += overlap.length;

    if (lottos.includes(this.#inputBonusNum)) {
      count += 10;
    }
    Console.print(count); //
    return count;
  }
}

const startLotto = new App();
startLotto.play();

module.exports = App;
