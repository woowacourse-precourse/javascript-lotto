// 화폐단위 원
const PRICE_OF_ONE_LOTTO = 1000;

const LOTTO_NUMBER_RANGE = {
  min: 1,
  max: 45,
};

const STATISTICS_MESSAGE = {
  match3(count) {
    return `3개 일치 (5,000원) - ${count}개`;
  },
  match4(count) {
    return `4개 일치 (50,000원) - ${count}개`;
  },
  match5(count) {
    return `5개 일치 (1,500,000원) - ${count}개`;
  },
  match5andBonus(count) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
  },
  match6(count) {
    return `6개 일치 (2,000,000,000원) - ${count}개`;
  },
};

const WINNING_PRICE = {
  match3: 5000,
  match4: 50000,
  match5: 1500000,
  match5andBonus: 30000000,
  match6: 2000000000,
};

const ERROR = {
  noSmallChange: new Error("[ERROR] 잔돈이 없습니다."),
  lengthIsSix: new Error("[ERROR] 로또 번호는 6개여야 합니다."),
  noOverlappingNumber: new Error("[ERROR] 중복된 번호는 입력할 수 없습니다."),
  onlyNumber: new Error("[ERROR] 숫자만 입력해주세요."),
  wrongNumberRange: new Error("[ERROR] 로또 번호의 범위는 1~45입니다."),
  noOverlappingNumberAndBonus: new Error(
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다."
  ),
};

module.exports = {
  PRICE_OF_ONE_LOTTO,
  LOTTO_NUMBER_RANGE,
  STATISTICS_MESSAGE,
  WINNING_PRICE,
  ERROR,
};
