const MESSAGES = {
  PURCHASEPRICE: "구입금액을 입력해 주세요.\n",
  PURCHASEDLOTTO: "개를 구매했습니다.\n",
  WINNINGNUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUSNUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const LOTTOREQUIREMENT = {
  LENGTH: 6,
  MIN: 1,
  MAX: 45,
  LOTTOPRICE: 1000,
};

const WINNINGCONDITION = {
  LENGTH: `[ERROR] 로또 번호는 ${LOTTOREQUIREMENT.LENGTH}개여야 합니다.`,
  NaN: "[ERROR] 로또 번호는 숫자여야 합니다.",
  RANGE: `[ERROR] 로또 번호의 범위는 ${LOTTOREQUIREMENT.MIN}~${LOTTOREQUIREMENT.MAX}까지입니다.`,
  DUPLICATE: "[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.",
};

const BONUSCONDITION = {
  DUPLICATE: "[ERROR] 로또 번호와 중복되지 않는 숫자여야 합니다.",
  RANGE: `[ERROR] 로또 번호의 범위는 ${LOTTOREQUIREMENT.MIN}~${LOTTOREQUIREMENT.MAX}까지입니다.`,
  NaN: "[ERROR] 로또 번호는 숫자여야 합니다.",
};

const PURCHASEUNIT = {
  NaN: "[ERROR] 로또 구입 금액은 숫자여야 합니다.",
  PRICE: `[ERROR] 로또 구입 금액 단위는 ${LOTTOREQUIREMENT.LOTTOPRICE}원 단위여야 합니다.`,
  RANGE: `[ERROR] 로또 구입 금액의 범위는 양수입니다.`,
};

const LOTTOPRIZE = {
  THREEMATCHES: 5000,
  FOURMATCHES: 50000,
  FIVEMATCHES: 1500000,
  BONUSMATCHES: 30000000,
  SIXMATCHES: 2000000000,
};

const ProfitMessage = (profit) => {
  return `총 수익률은 ${profit}%입니다.\n`;
};

const StatisticsMessage = ({ three, four, five, bonus, six }) => {
  return `3개 일치 (${LOTTOPRIZE.THREEMATCHES.toLocaleString()}원) - ${three}개\n4개 일치 (${LOTTOPRIZE.FOURMATCHES.toLocaleString()}원) - ${four}개\n5개 일치 (${LOTTOPRIZE.FIVEMATCHES.toLocaleString()}원) - ${five}개\n5개 일치, 보너스 볼 일치 (${LOTTOPRIZE.BONUSMATCHES.toLocaleString()}원) - ${bonus}개\n6개 일치 (${LOTTOPRIZE.SIXMATCHES.toLocaleString()}원) - ${six}개\n`;
};

module.exports = {
  MESSAGES,
  LOTTOREQUIREMENT,
  WINNINGCONDITION,
  BONUSCONDITION,
  PURCHASEUNIT,
  LOTTOPRIZE,
  ProfitMessage,
  StatisticsMessage,
};
