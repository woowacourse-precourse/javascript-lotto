const {
  LOTTO_INFO,
  PRIZE_MONEY,
  PRIZE_CORRECT_COUNT,
} = require('./lottoSetting');

const MESSAGE = {
  PROCESS: {
    inputMoney: '구입금액을 입력해 주세요.',
    showTicketQuantity: '개를 구매했습니다.\n',
    inputWinningDigit: '당첨 번호를 입력해 주세요.',
    inputBonusDigit: '보너스 번호를 입력해 주세요.',
  },

  PRIZE: {
    showPrizeNotice: '당첨 통계\n---',
    rankFirst: `${PRIZE_CORRECT_COUNT.rankFirst}개 일치 (${PRIZE_MONEY.rankFirst.toLocaleString('ko-KR')}원)`,
    rankSecond: `${PRIZE_CORRECT_COUNT.rankSecond}개 일치, 보너스 볼 일치 (${PRIZE_MONEY.rankSecond.toLocaleString('ko-KR')}원)`,
    rankThird: `${PRIZE_CORRECT_COUNT.rankThird}개 일치 (${PRIZE_MONEY.rankThird.toLocaleString('ko-KR')}원)`,
    rankFourth: `${PRIZE_CORRECT_COUNT.rankFourth}개 일치 (${PRIZE_MONEY.rankFourth.toLocaleString('ko-KR')}원)`,
    rankFifth: `${PRIZE_CORRECT_COUNT.rankFifth}개 일치 (${PRIZE_MONEY.rankFifth.toLocaleString('ko-KR')}원)`,
  },

  ERROR: {
    duplicateBonus: '[ERROR] 이미 존재하는 당첨 번호입니다.',
    duplicateDigit: '[ERROR] 로또 번호는 중복된 번호를 입력할 수 없습니다.',
    invalidDigit: `[ERROR] 로또 번호는 ${LOTTO_INFO.minimumDigit}부터 ${LOTTO_INFO.maximumDigit} 사이의 숫자여야 합니다.`,
    invalidLength: `[ERROR] 로또 번호는 ${LOTTO_INFO.digitLength}개여야 합니다.`,
    remainChange: `[ERROR] 구입 금액은 ${LOTTO_INFO.eachPrice}원 단위로 입력할 수 있습니다.`,
    invalidMoney: `[ERROR] 구입 금액은 ${LOTTO_INFO.eachPrice}원이상부터 입력할 수 있습니다.`,
  },
};

module.exports = MESSAGE;
