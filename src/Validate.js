const { PRINT_MESSAGE, LOTTO } = require("./utils/constants");

class Validate {
  static isNumber(string) {
    if (!isNaN(string) && string.trim() !== "") {
      return;
    }
    throw new Error(PRINT_MESSAGE.ERROR("올바른 숫자를 입력해주세요."));
  }

  static isMoneyUnit(money, unit) {
    if (money % unit === 0) {
      return;
    }
    throw new Error(PRINT_MESSAGE.ERROR(`${unit} 단위의 금액을 입력해주세요.`));
  }

  static isLottoNumbersCount(lottoNumbers) {
    if (lottoNumbers.length === LOTTO.NUMBER_RANGE.COUNT) {
      return;
    }
    throw new Error(
      PRINT_MESSAGE.ERROR(
        `로또 번호는 ${LOTTO.NUMBER_RANGE.COUNT}개여야 합니다.`
      )
    );
  }

  static isUniqueLottoNumbers(lottoNumbers) {
    const deduplicationNumbers = new Set(lottoNumbers);
    if (deduplicationNumbers.size === LOTTO.NUMBER_RANGE.COUNT) {
      return;
    }
    throw new Error(PRINT_MESSAGE.ERROR("로또 번호는 중복이 없어야 합니다."));
  }

  static isLottoNumberRange(lottoNumbers) {
    const minNumber = Math.min(...lottoNumbers);
    const maxNumber = Math.max(...lottoNumbers);
    if (
      LOTTO.NUMBER_RANGE.START <= minNumber &&
      maxNumber <= LOTTO.NUMBER_RANGE.END
    ) {
      return;
    }
    throw new Error(
      PRINT_MESSAGE.ERROR(
        `${LOTTO.NUMBER_RANGE.START}~${LOTTO.NUMBER_RANGE.END}범위 내의 로또 번호를 입력해주세요.`
      )
    );
  }

  static isBonusNumberRange(bonusNumber) {
    if (
      LOTTO.NUMBER_RANGE.START <= bonusNumber &&
      bonusNumber <= LOTTO.NUMBER_RANGE.END
    ) {
      return;
    }
    throw new Error(
      PRINT_MESSAGE.ERROR(
        `${LOTTO.NUMBER_RANGE.START}~${LOTTO.NUMBER_RANGE.END}범위 내의 로또 번호를 입력해주세요.`
      )
    );
  }
  static isUniqueBonusNumber(bonusNumber, winningNumbers) {
    if (!winningNumbers.includes(bonusNumber)) {
      return;
    }
    throw new Error(
      PRINT_MESSAGE.ERROR(`당첨 번호와 겹치지 않는 숫자를 입력해주세요`)
    );
  }
}

module.exports = Validate;
