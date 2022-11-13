const MESSAGE = {
  INPUT_AMOUNT: "구입금액을 입력해 주세요. ",
  INPUT_LOTTO: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS: "보너스 번호를 입력해 주세요.",
};

const PRIZE = {
  FIRST: 2_000_000_000,
  SECOND: 30_000_000,
  THIRD: 1_500_000,
  FOURTH: 50_000,
  FIFTH: 5_000,
};

const RANK = {
  FIRST: "6개 일치 (2,000,000,000원)",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  THIRD: "5개 일치 (1,500,000원)",
  FOURTH: "4개 일치 (50,000원)",
  FIFTH: "3개 일치 (5,000원)",
};

module.exports = {
  MESSAGE,
  PRIZE,
  RANK,
};
