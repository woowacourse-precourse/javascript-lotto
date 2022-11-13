class Constant {
  NEW_LINE = '\n';
  GAME_MSG = Object.freeze({
    pleaseEnterMoney: '구입금액을 입력해주세요.' + NEW_LINE,
    bought: '개를 구매했습니다.' + NEW_LINE,
    pleaseEnterWinningNumbers:
      NEW_LINE + '당첨 번호를 입력해 주세요.' + NEW_LINE,
    pleaseEnterBonusNumbers:
      NEW_LINE + '보너스 번호를 입력해 주세요.' + NEW_LINE,
  });
  RESULT_MSG = Object.freeze({
    stats: NEW_LINE + '당첨 통계' + NEW_LINE + '---' + NEW_LINE,
    match3: '3개 일치 (5,000원) - ',
    match4: '4개 일치 (50,000원) - ',
    match5: '5개 일치 (1,500,000원) - ',
    matchBonus: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    match6: '6개 일치 (2,000,000,000원) - ',
    ea: '개' + NEW_LINE,
    totalProfit: '총 수익률은 ',
    isNPercent: '%입니다.',
  });
  ERROR_MSG = Object.freeze({
    prefix: '[ERROR] ',
    outOfRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    notNumber: '숫자여야 합니다.',
    only1000WonUnits: '구입금액은 1,000원 단위여야 합니다.',
    only6Numbers: '로또 번호는 6개여야 합니다.',
  });
}

module.exports = Constant;
