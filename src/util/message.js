const message = {
  INPUT_MESSAGE: "구입금액을 입력해 주세요.",
  BUY_MESSAGE: "개를 구매했습니다.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  PRIZE_STAT: "당첨 통계",
  LINE: "---",

  hitStat(number, amount, lotto, isBonus) {
    if (isBonus && number === 5) {
      return `${number}개 일치, 보너스 볼 일치 (${amount}원) - ${lotto}개`;
    }

    return `${number}개 일치 (${amount}원) - ${lotto}개`;
  },

  returnOfInvestment(percent) {
    return `총 수익률은 ${percent}%입니다.`;
  },
};

module.exports = message;
