const INPUT_MESSAGE = {
  money: "구입 금액을 입력해 주세요.",
  userNumbers: "당첨 번호를 입력해 주세요.",
  bonusNumber: "보너스 번호를 입력해 주세요.",
};

const ERROR_MESSAGE = {
  moneyUnit: "[ERROR] 1,000원 단위로 입력해 주세요.",
  uniqueNumber: "[ERROR] 중복된 번호가 있습니다.",
  numberLength: "[ERROR] 로또 번호는 6개여야 합니다.",
  outOfRange: "[ERROR] 번호는 1부터 45사이의 숫자여야 합니다.",
};

const OUTPUT_MESSAGE = {
  lottoCount: (command) => `${command}개를 구매했습니다.`,
  result: "당첨 통계\n---",
  threeMatch: (command) => `3개 일치 (5,000원) - ${command}개`,
  fourMatch: (command) => `4개 일치 (50,000원) - ${command}개`,
  fiveMatch: (command) => `5개 일치 (1,500,000원) - ${command}개`,
  fiveBonusMatch: (command) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${command}개`,
  sixMatch: (command) => `6개 일치 (2,000,000,000원) - ${command}개`,
  rateOfReturn: (command) => `총 수익률은 ${command}%입니다.`,
};

const REWADR = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

exports.INPUT_MESSAGE = INPUT_MESSAGE;
exports.ERROR_MESSAGE = ERROR_MESSAGE;
exports.OUTPUT_MESSAGE = OUTPUT_MESSAGE;
exports.REWADR = REWADR;
