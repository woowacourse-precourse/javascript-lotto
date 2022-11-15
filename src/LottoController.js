const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoCalculator = require("./LottoCalculator");
const Validation = require("./validator/Validation");
const { RULE } = require("./constants/rule");

class LottoController {
  constructor() {
    this.validation = new Validation();
    this.checkedMoney;
    this.lottoAmount;
    this.boughtLotto = [];
    this.winningNumber;
    this.bonusNumber;
  }

  setMoney(inputMoney) {
    if (this.validation.isValidMoney(inputMoney))
      this.checkedMoney = inputMoney;
    this.countLottoAmount(this.checkedMoney);
    return this.checkedMoney;
  }

  countLottoAmount(checkedMoney) {
    this.lottoAmount = checkedMoney / RULE.LOTTO_PRICE;
    this.generateLottoNumbers(this.lottoAmount);
  }

  printLottoAmount() {
    Console.print(`\n${this.lottoAmount}개를 구매했습니다.`);
  }

  generateLottoNumbers(lottoAmount) {
    for (let count = 0; count < lottoAmount; count++) {
      const lotto = new Lotto(
        Random.pickUniqueNumbersInRange(
          RULE.MIN_LOTTO_NUMBER,
          RULE.MAX_LOTTO_NUMBER,
          RULE.LOTTO_NUMS
        )
      );
      this.boughtLotto.push(lotto);
    }
  }

  printLottoList() {
    this.boughtLotto.forEach((number) => {
      number.printNumbers();
    });
  }

  setWinNumbers(inputNumber) {
    this.inputWinNumbers = inputNumber.split(",").map((item) => Number(item));
    if (this.validation.isValidLottoNumber(this.inputWinNumbers))
      this.winningNumber = this.inputWinNumbers;
    return this.winningNumber;
  }

  setBonusNumber(inputNumber) {
    this.inputBonus = Number(inputNumber);
    if (this.validation.isBonusNumber(this.inputBonus, this.winningNumber))
      return this.inputBonus;
  }

  printCalculatedResult() {
    const lottoCalculator = new LottoCalculator(
      this.winningNumber,
      this.boughtLotto,
      this.inputBonus,
      this.lottoAmount
    );

    lottoCalculator.printRank();
    lottoCalculator.printProfitRate();
  }
}

module.exports = LottoController;
