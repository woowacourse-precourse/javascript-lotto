class Validation {
  purchaseInputValue(inputValue) {
    const inputNumber = Number(inputValue);
    if (Number.isNaN(inputNumber)) {
      throw new Error('[ERROR] 금액을 입력해주세요.');
    }
    if (inputNumber % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
  }

  winningInputValue(inputValue) {
    let winningNumbers = inputValue.split(',');
    if (inputValue.includes(',') === false) {
      throw new Error('[ERROR] 각 번호를 콤마로 구분하여 입력해주세요.');
    }
    if (winningNumbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호 6개를 입력해주세요.');
    }
    winningNumbers.forEach((item) => {
      const numberItem = Number(item);
      if (Number.isNaN(numberItem)) {
        throw new Error('[ERROR] 당첨 번호는 숫자만 입력해주세요.');
      }
      if (numberItem < 1 || numberItem > 45) {
        throw new Error('[ERROR] 당첨 번호는 1 ~ 45 범위의 숫자로 입력해주세요.');
      }
    });
    winningNumbers = new Set(winningNumbers);
    if (winningNumbers.size !== 6) {
      throw new Error('[ERROR] 당첨 번호를 중복 없이 입력해주세요.');
    }
  }

  bonusInputValue(winningInput, bonusInput) {
    const bonusNumber = Number(bonusInput);
    if (Number.isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자를 입력해주세요.');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 ~ 45 범위의 숫자로 입력해주세요.');
    }
    if (winningInput.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호에 없는 숫자를 입력해주세요.');
    }
  }
}

module.exports = Validation;