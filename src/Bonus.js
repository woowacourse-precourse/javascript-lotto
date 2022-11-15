/* eslint-disable no-restricted-globals */
/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */

const { TICKET_NUMBER, DECIMAL_NUMBER } = require('./Constant');

class Bonus {
  #bonusNumber;

  #lottoNumbers;

  constructor(bonusNumber, lottoNumbers) {
    this.validate(bonusNumber, lottoNumbers);
    this.#bonusNumber = parseInt(bonusNumber, DECIMAL_NUMBER);
    this.#lottoNumbers = lottoNumbers;
  }

  validate(bonusNumber, lottoNumbers) {
    if (bonusNumber.length === 0) {
      throw new Error('[ERROR] 보너스 번호는 반드시 1개는 있어야 합니다.');
    }
    if (isNaN(bonusNumber, DECIMAL_NUMBER)) {
      throw new Error('[ERROR] 숫자를 입력하여 주십시오.');
    }
    if (
      parseInt(bonusNumber, DECIMAL_NUMBER) < TICKET_NUMBER.RANGE_START ||
      parseInt(bonusNumber, DECIMAL_NUMBER) > TICKET_NUMBER.RANGE_END
    ) {
      throw new Error('[ERROR] 1~45 사이 숫자를 입력하여 주십시오.');
    }
    if (lottoNumbers.includes(parseInt(bonusNumber, DECIMAL_NUMBER))) {
      throw new Error(
        '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
      );
    }
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  // TODO: 추가 기능 구현
}

module.exports = Bonus;
