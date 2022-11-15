const ERROR = "[ERROR]";
const NEW_LINE = "\n";

const ERROR_MESSAGE = {
  hasRepeat: `${ERROR} 로또 번호는 중복되는 수가 들어갈 수 없습니다.`,
  wrongQuantity: `${ERROR} 로또 번호는 6개여야 합니다.`,
  notInRange: `${ERROR} 로또 번호는 1부터 45사이의 수여야 합니다.`,
  wrongUnit: `${ERROR}1000원 단위로 입력해야 합니다.`,
};

const INPUT_MESSAGE = {
  money: "구입금액을 입력해 주세요." + NEW_LINE,
  winningNumber: "당첨 번호를 입력해 주세요." + NEW_LINE,
  bonusNumber: "보너스 번호를 입력해 주세요." + NEW_LINE,
};

const RESULT_MEESAGE = {
  purchase: (n) => `${n}개를 구매했습니다.`,
  lottoResult: `당첨 통계${NEW_LINE}---`,
  match3: (n) => `3개 일치 (5,000원) - ${n}개`,
  match4: (n) => `4개 일치 (50,000원) - ${n}개`,
  match5: (n) => `5개 일치 (1,500,000원) - ${n}개`,
  match5andBonus: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
  match6: (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
  profit: (n) => `총 수익률은 ${n}%입니다.`,
};

const UNIT = {
  money: 1000,
};

const PRIZE_MONEY = {
  3: 5000,
  4: 50000,
  5: 15000000,
  5.5: 30000000,
  6: 2000000000,
};

module.exports = {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  RESULT_MEESAGE,
  UNIT,
  PRIZE_MONEY,
  NEW_LINE,
};
