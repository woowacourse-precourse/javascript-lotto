const { Console, Random } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const ValidateInput = require("./ValidateInput");
const Lotto = require("./Lotto");

class LottoProgram {
  #lottoArray;
  #regExp;
  #numbersOfLotto;

  constructor() {
    // this.validtateInput = new ValidateInput();
    this.#lottoArray = [];
    this.#numbersOfLotto = 0;
  }

  start() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해주세요.\n", (inputMoney) => {
      // this.validtateInput.validateInputMoney(inputMoney);
      ValidateInput.validateInputMoney(inputMoney);
      this.#numbersOfLotto = Number(inputMoney) / 1000;
      this.buyLotto();
    });
  }

  randomSelectWithoutOverlap() {
    const randomNumbers = [];
    while (randomNumbers.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (randomNumbers.includes(number) === false) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }

  isValidLottoArray(lottoArray) {
    return (
      lottoArray.length === 6 &&
      new Set(lottoArray).size === 6 &&
      lottoArray.toString() === lottoArray.sort((a, b) => a - b).toString()
    );
  }

  getEachLottoArray() {
    const utils = new Utils();
    const lottoArray = this.randomSelectWithoutOverlap().sort((a, b) => a - b);
    if (this.isValidLottoArray(lottoArray) === false) {
      utils.throwError("[ERROR] 로또 구매 내역을 불러오는데 실패하였습니다.");
    }
    return lottoArray;
  }

  #printLottoList() {
    for (const lotto of this.#lottoArray) {
      Console.print(lotto);
    }
  }

  inputWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (inputNumbers) => {
      const winningNumbersArray = inputNumbers.replace(this.#regExp, '').split(',');
      const lotto = new Lotto(winningNumbersArray);
      this.winningNumbers = lotto.returnNumbers();
      // this.validtateInput.validateWinningNumbers(winningNumbers);
      // this.winningNumbers = winningNumbers.replace(this.#regExp, '').split(',');
      this.inputBonusNumber();
    });
  }

  buyLotto() {
    Console.print(`\n${this.#numbersOfLotto}개를 구매했습니다.`);
    for (let i = 0; i < this.#numbersOfLotto; i++) {
      this.#lottoArray.push(this.getEachLottoArray());
    }
    this.#printLottoList();

    this.inputWinningNumbers();
  }

  inputBonusNumber() {
    Console.print("\n보너스 번호를 입력해 주세요.");
    Console.readLine("", (bonusNumber) => {
      // this.validtateInput.validateBonusNumber(this.winningNumbers, bonusNumber);
      ValidateInput.validateBonusNumber(this.winningNumbers, bonusNumber);
      Console.close();
    });
  }
}

module.exports = LottoProgram;
