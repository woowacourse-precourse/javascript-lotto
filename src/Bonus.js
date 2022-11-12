class Bonus {
  constructor(bonusNumber, lottoNumbers) {
    this.validate(bonusNumber, lottoNumbers);
  }

  validate(bonusNumber, lottoNumbers) {
    if (isNaN(bonusNumber) === true) {
      throw '숫자를 입력해주세요.';
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw '1 ~ 45 범위의 숫자를 입력해주세요.';
    }

    if (lottoNumbers.includes(bonusNumber) === true) {
      throw '당첨 번호와 중복되지 않는 번호를 입력해주세요.';
    }
  }
}

module.exports =  Bonus;