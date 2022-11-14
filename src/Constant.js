class Constant {
  static NEW_LINE = '\n';
  static GAME_MSG = Object.freeze({
    pleaseEnterMoney: '구입금액을 입력해주세요.',
    bought: '개를 구매했습니다.',
    pleaseEnterWinningNumbers: '당첨 번호를 입력해 주세요.',
    pleaseEnterBonusNumber: '보너스 번호를 입력해 주세요.',
  });
  static RESULT_MSG = Object.freeze({
    stats: '당첨 통계',
    hrLine: '---',
    match3: '3개 일치 (5,000원) - ',
    match4: '4개 일치 (50,000원) - ',
    match5: '5개 일치 (1,500,000원) - ',
    matchBonus: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    match6: '6개 일치 (2,000,000,000원) - ',
    ea: '개',
    totalProfit: '총 수익률은 ',
    isNPercent: '%입니다.',
  });
  static ERROR_MSG = Object.freeze({
    prefix: '[ERROR] ',
    outOfRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    notNumber: '숫자여야 합니다.',
    only1000WonUnits: '구입금액은 1,000원 단위여야 합니다.',
    only6Numbers: '로또 번호는 6개여야 합니다.',
    duplicateNumbers: '로또 번호는 중복되지 않아야 합니다.',
  });
  static INCOMES = Object.freeze([2000000000, 30000000, 1500000, 50000, 5000]);
}

module.exports = Constant;
