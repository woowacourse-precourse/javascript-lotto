const INPUT_MESSAGES = {
  inputPay: "구입금액을 입력해 주세요.",
  inputWinNumbers: "당첨 번호를 입력해 주세요.",
  inputBonusNumbers: "보너스 번호를 입력해 주세요.",
};
const ERROR_MESSAGES = {
  errSixNumber: "[ERROR] 로또 번호는 6개여야 합니다.",
  errDuplication: "[ERROR] 중복된 로또 번호가 있습니다.",
  errUnit: "[ERROR] 1,000원 단위로 입력 바랍니다.",
};
const RESULT_MESSAGES = {
  printLottoAmount: (order) => `${order}개를 구매했습니다.`,
  winnig: "당첨 통계\n---",
  matchThree: (order) => `3개 일치 (5,000원) - ${order}개`,
  matchFour: (order) => `4개 일치 (50,000원) - ${order}개`,
  matchFive: (order) => `5개 일치 (1,500,000원) - ${order}개`,
  matchFiveBonus: (order) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${order}개`,
  matchSix: (order) => `6개 일치 (2,000,000,000원) - ${order}개`,
  getProfitRate: (order) => `총 수익률은 ${order}%입니다.`,
};

const REWARD = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

exports.INPUT_MESSAGES = INPUT_MESSAGES;
exports.ERROR_MESSAGES = ERROR_MESSAGES;
exports.RESULT_MESSAGES = RESULT_MESSAGES;
exports.REWARD = REWARD;
