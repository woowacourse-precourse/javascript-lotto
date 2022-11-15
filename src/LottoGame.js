const LottoNumberUtils = require('./LottoNumberUtil');

class LottoGame {
  #inputMoney;

  constructor() {
    this.#inputMoney = 0;
  }

  // [x]사용자가 입력한 금액을 저장하는 기능
  setInputMoney(inputMoney) {
    LottoNumberUtils.validateMoney(inputMoney);
    this.#inputMoney = inputMoney;
  }
}

module.exports = LottoGame;
