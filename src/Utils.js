const LOTTO_PRICE = 1000;

const validateMoney = money => {
  if (Number.isNaN(+money)) {
    throw new Error('[ERROR] 올바르지 않은 금액입니다.');
  }
  if (Number(money) % LOTTO_PRICE !== 0) {
    throw new Error(`[ERROR] ${LOTTO_PRICE}원 단위로 입력해야 합니다.`);
  }
};

const validateBonusNumber = (number, winningNumbers) => {
  if (winningNumbers.getNumbers().includes(+number)) {
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
  }
};

const getLottoRanking = (lotto, winningNumbers, bonusNumber) => {
  let cnt = 0;
  winningNumbers.getNumbers().forEach(num => {
    if (lotto.includes(num)) {
      cnt += 1;
    }
  });

  if (cnt === 6) return 1;
  if (cnt === 5 && lotto.includes(bonusNumber)) return 2;
  if (cnt === 5) return 3;
  if (cnt === 4) return 4;
  if (cnt === 3) return 5;

  return 0;
};

module.exports = { validateMoney, validateBonusNumber, getLottoRanking };
