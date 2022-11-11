const INPUT_MESSAGES = {
  money: "구입금액을 입력해 주세요.",
  winNumberPrint: "당첨 번호를 입력해 주세요.",
  bonusNumberPrint: "보너스 번호를 입력해 주세요.",
};
const ERROR_MESSAGES = {
  sixLength: "[ERROR] 로또 번호는 6개여야 합니다.",
  overlapNumber: "[ERROR] 중복된 로또 번호가 있습니다.",
  money: "[ERROR] 1,000원 단위로 입력 바랍니다.",
};
const MESSAGES_SNIPPETS = {
  lottoCountPrint: (command) => `${command}개를 구매했습니다.`,
  winnig: "당첨 통계\n---",
  threeMatch: (command) => `3개 일치 (5,000원) - ${command}개`,
  fourMatch: (command) => `4개 일치 (50,000원) - ${command}개`,
  fiveMatch: (command) => `5개 일치 (1,500,000원) - ${command}개`,
  fiveBonusMatch: (command) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${command}개`,
  sixMatch: (command) => `6개 일치 (2,000,000,000원) - ${command}개`,
  rateOfReturn: (command) => `총 수익률은 ${command}%입니다.`,
};

const NUMBER = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

exports.INPUT_MESSAGES = INPUT_MESSAGES;
exports.ERROR_MESSAGES = ERROR_MESSAGES;
exports.MESSAGES_SNIPPETS = MESSAGES_SNIPPETS;
exports.NUMBER = NUMBER;
