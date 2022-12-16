const { BONUSLOTTO_NUMBER } = require('../constant/LottoNumbers');
const Validation = require('./Validation');

class BonusLotto {
  #bonusValue;
  #lottoValue;

  constructor(bonusValue, lottoValue) {
    this.#bonusValue = bonusValue;
    this.#lottoValue = lottoValue;
    this.#checkValidation(this.#bonusValue, this.#lottoValue);
  }

  makeBonusLottoNumber() {
    return this.#bonusValue;
  }

  #checkValidation(bonusValue, lottoValue) {
    new Validation(bonusValue)
      .getStringValidator()
      .isNumber()
      .isNumberInRange(BONUSLOTTO_NUMBER.START_RANGE, BONUSLOTTO_NUMBER.END_RANGE)
      .isStartWith(BONUSLOTTO_NUMBER.BAN_START_WITH)
      .isInclude(lottoValue)
      .getMessages();
  }
}

module.exports = BonusLotto;
