const MESSAGES = {
  INPUTPURCHASEAMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASED: '개를 구매했습니다.',
  INPUTWINNINGNUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUTBONUSNUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const REQUIREMENT = {
  LENGTH: 6,
  MIN: 1,
  MAX: 45,
  LOTTOPRICE: 1000,
};

const WINNINGNUMERROR = {
  LENGTH: `[ERROR] 로또 번호는 ${REQUIREMENT.LENGTH}개여야 합니다.`,
  NaN: "[ERROR] 로또 번호는 숫자여야 합니다.",
  RANGE: `[ERROR] 로또 번호의 범위는 ${REQUIREMENT.MIN}~${REQUIREMENT.MAX}까지입니다.`,
  DUPLICATE: "[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.",
};

const BONUSNUMERROR = {
  DUPLICATE: "[ERROR] 로또 번호와 중복되지 않는 숫자여야 합니다.",
  RANGE: `[ERROR] 로또 번호의 범위는 ${REQUIREMENT.MIN}~${REQUIREMENT.MAX}까지입니다.`,
  NaN: "[ERROR] 로또 번호는 숫자여야 합니다.",
};

const PURCHASEAMOUNTERROR = {
  NaN: "[ERROR] 로또 구입 금액은 숫자여야 합니다.",
  PRICE: `[ERROR] 로또 구입 금액 단위는 ${REQUIREMENT.LOTTOPRICE}원 단위여야 합니다.`,
  RANGE: `[ERROR] 로또 구입 금액의 범위는 양수입니다.`,
};

const PRIZE = {
  THREEMATCHES: 5000,
  FOURMATCHES: 50000,
  FIVEMATCHES: 1500000,
  BONUSMATCHES: 30000000,
  SIXMATCHES: 2000000000,
};

function getProfitMessage (profit) {
  return `총 수익률은 ${profit}%입니다.\n`;
}

function getStatisticsMessage ({ three, four, five, bonus, six }) {
  return `3개 일치 (${PRIZE.THREEMATCHES.toLocaleString()}원) - ${three}개\n4개 일치 (${PRIZE.FOURMATCHES.toLocaleString()}원) - ${four}개\n5개 일치 (${PRIZE.FIVEMATCHES.toLocaleString()}원) - ${five}개\n5개 일치, 보너스 볼 일치 (${PRIZE.BONUSMATCHES.toLocaleString()}원) - ${bonus}개\n6개 일치 (${PRIZE.SIXMATCHES.toLocaleString()}원) - ${six}개\n`;
}

module.exports = { MESSAGES, REQUIREMENT, WINNINGNUMERROR, BONUSNUMERROR, PURCHASEAMOUNTERROR, PRIZE, getProfitMessage, getStatisticsMessage };
