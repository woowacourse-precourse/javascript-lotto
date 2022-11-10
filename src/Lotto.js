const { Console, Random } = require("@woowacourse/mission-utils");

class Lotto {
  #numbersOfLotto;

  constructor(numbers) {
    //   this.validate(numbers);
    this.#numbersOfLotto = 0;
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

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

  validateInputMoney(inputMoney) {
    if (this.isBlank(inputMoney) || !this.isNumber(inputMoney) || !this.isThousandUnit(inputMoney)) {
      return this.throwError("[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.");
    }
    return true;
  }

  inputMoney() {
    Console.readLine("", (inputMoney) => {
      this.validateInputMoney(inputMoney);
      this.#numbersOfLotto = Number(inputMoney) / 1000;
      this.buyLotto();

      Console.close();
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
    return lottoArray;
  }

  buyLotto() {
    const lottoArray = [];
    for (let i = 0; i < this.#numbersOfLotto; i++) {
      lottoArray.push(this.getEachLottoArray());
    }
    Console.print(lottoArray);
  }



  // TODO: 추가 기능 구현
}

module.exports = Lotto;
