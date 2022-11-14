const { formatWithComma } = require('./formatNumber');

const WINNINGS = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];

const winningResult = (
  [correct3, correct4, correct5, correct5Bonus, correct6],
  rate
) => {
  let message = `당첨 통계\n`;
  message += `---\n`;
  message += `3개 일치 (${formatWithComma(WINNINGS[0])}원) - ${correct3}개\n`;
  message += `4개 일치 (${formatWithComma(WINNINGS[1])}원) - ${correct4}개\n`;
  message += `5개 일치 (${formatWithComma(WINNINGS[2])}원) - ${correct5}개\n`;
  message += `5개 일치, 보너스 볼 일치 (${formatWithComma(
    WINNINGS[3]
  )}원) - ${correct5Bonus}개\n`;
  message += `6개 일치 (${formatWithComma(WINNINGS[4])}원) - ${correct6}개\n`;
  message += `총 수익률은 ${rate}%입니다.`;

  return message;
};

module.exports = { WINNINGS, winningResult };
