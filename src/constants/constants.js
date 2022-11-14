const QUESTION = Object.freeze({
  buy: "구입금액을 입력해 주세요.",
  setWinningNum: "당첨 번호를 입력해 주세요.",
  setBonusNum: "보너스 번호를 입력해 주세요.",
});

const PRETTY_MSG = Object.freeze({
  winningResult: "당첨 통계\n---",
});

const LOTTO_PRICE = 1000;

const ERR_MSG = Object.freeze({
  notNumber: "[ERROR] 숫자만 입력해주세요.",
  notThousand: `[ERROR] ${LOTTO_PRICE.toLocaleString()}원 단위로 입력해주세요.`,
  notSixCount: "[ERROR] 로또 번호는 6개여야 합니다.",
  notUniqueNumber: "[ERROR] 중복된 번호가 있습니다.",
  notLottoNumber: "[ERROR] 로또 번호는 숫자여야 합니다.",
  notLottoRange: "[ERROR] 로또 번호는 1~45사이여야 합니다.",
});

const MATCH_MSG = Object.freeze({
  3: "3개 일치 (5,000원)",
  4: "4개 일치 (50,000원)",
  5: "5개 일치 (1,500,000원)",
  5.5: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  6: "6개 일치 (2,000,000,000원)",
});

const WINNING_AMOUNT = Object.freeze({
  3: 5000,
  4: 50000,
  5: 1500000,
  5.5: 30000000,
  6: 2000000000,
});

module.exports = {
  QUESTION,
  ERR_MSG,
  MATCH_MSG,
  WINNING_AMOUNT,
  PRETTY_MSG,
  LOTTO_PRICE,
};
