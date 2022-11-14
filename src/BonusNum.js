const { Console } = require('@woowacourse/mission-utils')
const WinningNum = require('./WinningNum')

class BonusNum {
  #bonus

  //입력받은 보너스 번호 , 로또 당첨 번혼
  constructor(bonus, winningNumForDuplication) {
    this.validate(bonus, winningNumForDuplication)
    this.#bonus = bonus
    this.winningNumForDuplication = winningNumForDuplication
  }

  validate(bonus, winningNumForDuplication) {
    this.validateForNumRange(bonus)

    this.validateForNotNumber(bonus)

    this.validateForDuplication(bonus, winningNumForDuplication)
  }

  validateForNumRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error('[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다')
    }
  }

  validateForNotNumber(bonus) {
    if (isNaN(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 숫자로 이뤄진 값이어야 합니다.')
    }
  }

  validateForDuplication(bonus,winningNumForDuplication) {
    if (winningNumForDuplication.indexOf(bonus) !== -1) {
      throw Error('[ERROR] 당첨 번호와 동일한 값입니다')
    }
  }


}

module.exports = BonusNum
