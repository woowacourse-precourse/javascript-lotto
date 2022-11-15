const message = {
  INPUT_AMOUNT: '구입금액을 입력해 주세요.',
  BUY_AMOUNT: '개를 구매했습니다.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  HIT_NUMBER: '당첨 번호를 입력해 주세요.',
  PRIZE_STAT: '당첨 통계',
  LINE: '---',
  hitStat(number, amount, lotto, isBonus) {
    const prize = amount.toLocaleString('ko-KR');
    if (isBonus && number === 5) {
      return `${number}개 일치, 보너스 볼 일치 (${prize}원) - ${lotto}개`;
    }
    return `${number}개 일치 (${prize}원) - ${lotto}개`;
  },
  returnOfInvestment(percent) {
    return `총 수익률은 ${percent}%입니다.`;
  },
};

module.exports = message;
