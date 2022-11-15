const checkValidMoneyInput = (money) => {
  if (typeof money !== 'number') {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
  if (money < 1000 || money % 1000 !== 0) {
    throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
  }
};

const checkValidWinningNumberInput = (winningNumber) => {
  if (winningNumber.length !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
  if (new Set(winningNumber).size !== 6) {
    throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
  }
  if (winningNumber.some((number) => number < 1 || number > 45)) {
    throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.');
  }
};

const checkValidBonusNumberInput = (winningNumber, bonusNumber) => {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error('[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.');
  }
  if (winningNumber.includes(bonusNumber)) {
    throw new Error(
      '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
    );
  }
};

module.exports = {
  checkValidMoneyInput,
  checkValidWinningNumberInput,
  checkValidBonusNumberInput,
};
