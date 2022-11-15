const getDefaultMessages = {
  purchase: (amount) => `${amount}개를 구매했습니다.`,
  earnings_rate: (rate) => `총 수익률은 ${rate}%입니다.`,
};

function getMessagesByStatistics(awards, count) {
  switch (awards) {
    case 3:
      return `3개 일치 (5,000원) - ${count}개`;

    case 4:
      return `4개 일치 (50,000원) - ${count}개`;

    case 5:
      return `5개 일치 (1,500,000원) - ${count}개`;

    case "BONUS":
      return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;

    case 6:
      return `6개 일치 (2,000,000,000원) - ${count}개`;

    default:
      return;
  }
}

module.exports = { getDefaultMessages, getMessagesByStatistics };
