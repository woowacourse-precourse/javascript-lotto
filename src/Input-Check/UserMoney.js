const Lotto = require('../Lotto');
const {
  ERROR_MESSAGE,
  RESTRICTIONS,
} = require('../components/lotto-data/Constant');

class UserMoney extends Lotto {
  constructor(money) {
    super(money);
    this.input = super.returnNumbers();
  }

  checkInput() {
    this.checkZero();
    super.checkOnlyNumber();
    this.checkCanBuy();
    return this.checkHowManyBuy();
  }

  checkZero() {
    if (!Number(this.input)) {
      throw `${ERROR_MESSAGE.zero}`;
    }
  }

  checkCanBuy() {
    if (this.input % RESTRICTIONS.thousand) {
      throw `${ERROR_MESSAGE.notDivide}`;
    }
  }

  checkHowManyBuy() {
    return this.input / RESTRICTIONS.thousand;
  }
}

module.exports = UserMoney;
