//예외 사항들

class Exception {
  exceptLottoNumbers = (lottoNumber) => {
    const NUM_REG = /[^0-9]/g;
    if (('' + lottoNumber).match(NUM_REG) != null) {
      throw new Error('[ERROR] 로또 번호에 숫자가 아닌 것이 있습니다');
    }

    if (lottoNumber < 1 || 45 < lottoNumber) {
      throw new Error('[ERROR] 로또 번호에 1미만 45초과하는 번호가 존재합니다');
    }

    if (Number.isInteger(Number(lottoNumber)) === false) {
      throw new Error('[ERROR] 로또 번호는 정수값이어야 합니다.');
    }
  };

  exceptLottoPrice = (lottoPrice) => {
    if (lottoPrice % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.');
    }
  };

  exceptBonusNumber = (winningNumbers = [], bonusNumber) => {
    winningNumbers.map((winningNumber) => {
      if (winningNumber === bonusNumber) {
        throw new Error(
          '[ERROR] 보너스 번호는 로또 당첨번호와 동일해서는 안됩니다.'
        );
      }
    });

    this.exceptLottoNumbers(bonusNumber);
  };
}

module.exports = Exception;
