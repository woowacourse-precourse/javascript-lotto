const { Console, Random } = require("@woowacourse/mission-utils");

class Lotto {
  #numbersOfLotto;
  #lottoArray;

  constructor() {
    this.#numbersOfLotto = 0;
    this.#lottoArray = [];
  }

  validateInputMoney(inputMoney) {
    return (
      this.isBlank(inputMoney) ||
      !this.isNumber(inputMoney) ||
      !this.isThousandUnit(inputMoney)
    ) ? this.throwError("[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.")
      : true;
  }

  start() {
    Console.print("구입금액을 입력해주세요.");
    this.inputMoney();
  }

  throwError(comment) {
    throw new Error(comment);
  }

  isBlank(input) {
    return !input;
  }

  isNumber(input) {
    return !isNaN(input);
  }

  isThousandUnit(input) {
    return (input % 1000 === 0);
  }

  inputMoney() {
    Console.readLine("", (inputMoney) => {
      this.validateInputMoney(inputMoney);
      this.#numbersOfLotto = Number(inputMoney) / 1000;
      return this.buyLotto();
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

  getEachLottoArray() {
    const lottoArray = this.randomSelectWithoutOverlap().sort((a, b) => a - b);
    if (
      lottoArray.length !== 6 ||
      ![... new Set(lottoArray)]
        .every((value, idx) => value === lottoArray[idx])) {
      this.throwError("[ERROR] 로또 구매 내역을 불러오는데 실패하였습니다.");
    }
    return lottoArray;
  }

  #printLottoList() {
    for (const lotto of this.#lottoArray) {
      Console.print(lotto);
    }
  }

  validateWinningNumbers(winningNumbers) {
    const regExp = / /g;
    const valid = (element) => (
      this.isNumber(element) &&
      Number(element) >= 1 &&
      Number(element) <= 45 &&
      Number(element) % 1 === 0);
    if (!winningNumbers.replace(regExp, '').split(',').every(valid)) {
      this.throwError("[ERROR] 입력하신 당첨 번호가 유효하지 않습니다. 다시 확인해주세요.")
    }

    ([...(new Set(winningNumbers.replace(regExp, '').split(',')))].length !== 6) ? this.throwError("[ERROR] 입력하신 당첨 번호에 중복된 입력값이 존재합니다.") : true;
  }

  inputWinningNumbers() {
    Console.print("\n당첨 번호를 입력해 주세요.");
    Console.readLine("", (winningNumbers) => {
      this.validateWinningNumbers(winningNumbers);
      Console.close();
    });
  }

  buyLotto() {
    Console.print(`\n${this.#numbersOfLotto}개를 구매했습니다.`);
    for (let i = 0; i < this.#numbersOfLotto; i++) {
      this.#lottoArray.push(this.getEachLottoArray());
    }
    this.#printLottoList();

    return this.inputWinningNumbers();
  }



  // TODO: 추가 기능 구현
}

module.exports = Lotto;
