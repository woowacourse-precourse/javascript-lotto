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

  getInputMoney() {
    return this.#inputMoney;
  }

  // [x]사용자가 입력한 금액만큼 로또를 만들어서 저장하는 기능
  setLottoGames() {
    const numberLottos = this.#inputMoney / AMOUNT_STANDARD.ONE_THOUSAND_WON;

    this.#lottoArray = [];
    for (let i = 0; i < numberLottos; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoArray.push(new Lotto(lottoNumbers));
    }
  }

  getLottoGames() {
    return this.#lottoArray;
  }
}

module.exports = LottoGame;
