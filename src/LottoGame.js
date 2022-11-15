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

  // [x]사용자가 입력한 당첨 번호를 확인하고 저장하는 기능
  setWinningNumbers(winningNumbers) {
    LottoNumberUtils.validateLength(winningNumbers);
    LottoNumberUtils.validateDuplication(winningNumbers);
    winningNumbers.forEach((value) => LottoNumberUtils.validateRange(value));

    this.#winningNumbers = winningNumbers;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  // [x]사용자가 입력한 보너스 번호를 확인하고 저장하는 기능
  setBonusNumbers(bonusNumber) {
    LottoNumberUtils.validateRange(bonusNumber);
    LottoNumberUtils.validateDuplication([
      ...this.#winningNumbers,
      bonusNumber,
    ]);
}

module.exports = LottoGame;
