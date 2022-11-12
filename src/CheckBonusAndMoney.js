const validateMoney = (money) => {
  if (money % 1000 !== 0) {
    throw new Error(`[ERROR] 돈은 1000원 단위로 입력이 가능합니다.`);
  }
  if (money <= 0) {
    throw new Error(`[ERROR] 돈은 1000원부터 입력이 가능합니다.`);
  }
};

const validateBonusNum = (bonusNum, winningNum) => {
  if (bonusNum > 45 || bonusNum < 1) {
    throw new Error(`[ERROR] 1~45사이의 번호를 입력해주세요`);
  }
  if (bonusNum) {
    if (/^[0-9]*$/g.test(bonusNum) === false) {
      throw new Error(`[ERROR] 숫자만을 입력해주세요`);
    }
  }
  if (winningNum.includes(bonusNum) === true) {
    throw new Error(
      `[ERROR] 당첨번호에 입력한 숫자를 보너스 번호에 입력할 수 없습니다.`
    );
  }
};
module.exports = { validateBonusNum, validateMoney };
