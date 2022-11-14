const Lotto = require("./Lotto");
const {ERROR} = require("../utils/Constants");

class LottoWinning {
  winningLotto;
  bonusNumber;

  setWinningLotto(input) {
    const inputValue = input.split(",").map(Number);
    this.winningLotto = new Lotto(inputValue).numbers;
  }

  setBonusNumber(input) {
    this.isValidBonusNumber(input);
    this.bonusNumber = +input;
  }

  isValidBonusNumber(inputNumber) {
    if (isNaN(inputNumber)) {
      throw new Error(ERROR.BONUS_TYPE);
    }
    if (this.winningLotto.includes(inputNumber)) {
      throw new Error(ERROR.BONUS_DUPLICATE);
    }
    if (inputNumber < 1 || inputNumber > 45) {
      throw new Error(ERROR.BONUS_RANGE);
    }
  }
}

module.exports = LottoWinning;
