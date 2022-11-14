const { Console } = require('@woowacourse/mission-utils');
const { isMultipleOf1000, divide1000, splitStrByComma, getRandomNumbers } = require('./lib/utilFns.js');
const Lotto = require('./Lotto');

class VendingMachine {
  #purchaseAmount;
  #numberOfLottos;
  #randomNumbers;
  #lottoMachine;
  #scores = [];

  askPurchaseAmount() {
    const answerCbFn = (answer) => {
      this.validate(answer);
      this.setPurchaseOptions(answer);
      this.#randomNumbers = this.pickRandomNumbers();
      this.printPickedNumbers();
      this.askLottoNumbers();
    };

    Console.readLine('구입금액을 입력해 주세요.\n', answerCbFn);
  }

  validate(purchaseAmount) {
    if (!isMultipleOf1000(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
    }

    return true;
  }

  setPurchaseOptions(purchaseAmount) {
    const puchaseAmount = purchaseAmount.trim();
    const numberOfLottos = divide1000(purchaseAmount);

    this.#purchaseAmount = puchaseAmount;
    this.#numberOfLottos = numberOfLottos;
  }

  pickRandomNumbers(cnt = this.#numberOfLottos) {
    const randomNumbers = [];

    for (let i = 0; i < cnt; i++) {
      randomNumbers.push(getRandomNumbers(1, 45, 6));
    }

    return randomNumbers;
  }

  printPickedNumbers() {
    Console.print(`\n${this.#numberOfLottos}개를 구매했습니다.`);

    this.#randomNumbers.forEach(Console.print);
  }

  askLottoNumbers() {
    const answerCbFn = (answer) => {
      const lottoNumbers = splitStrByComma(answer);
      lottoNumbers.sort((a, b) => a - b);

      this.#lottoMachine = new Lotto(lottoNumbers);
      this.askBonusNumber();
    };

    Console.readLine('\n당첨 번호를 입력해 주세요.\n', answerCbFn);
  }

  askBonusNumber() {
    const answerCbFn = (answer) => {
      this.#lottoMachine.setBonus(answer);
      this.#randomNumbers.forEach((numbers) => {
        const { score, bonusScore } = this.#lottoMachine.getScore(numbers);
        this.#scores.push([score, bonusScore]);
      });
    };

    Console.readLine('\n보너스 번호를 입력해주세요.\n', answerCbFn);
  }
}

module.exports = VendingMachine;
