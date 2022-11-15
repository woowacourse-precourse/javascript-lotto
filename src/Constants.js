const Notice = Object.freeze({
  start: "구입금액을 입력해 주세요.",
  amounts: "개를 구매했습니다.",
  inputWinningNumbers: "당첨 번호를 입력해 주세요.",
  inputBonusNumbers: "보너스 번호를 입력해 주세요.",
});

const Result = Object.freeze({
  title: "당첨 통계",
  line: "---",
  three: "3개 일치 (5,000원) - ",
  four: "4개 일치 (50,000원) - ",
  five: "5개 일치 (1,500,000원) - ",
  fiveWithBonus: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  six: "6개 일치 (2,000,000,000원) - ",
  unit: "개",
});

const RateOfReturn = Object.freeze({
  title: "총 수익률은 ",
  closing: "%입니다.",
});

const ErrorMessage = Object.freeze({
  puchaseAmount: "[ERROR] 로또는 1,000원 단위로 입력해야 합니다.",
  range: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  duplicated: "[ERROR] 로또 번호는 1부터 45 사이의 중복없는 숫자여야 합니다.",
  length: "[ERROR] 로또 번호는 6개여야 합니다.",
  bonusDuplicated:
    "[ERROR] 당첨 번호와 보너스 번호는 중복없는 숫자여야 합니다.",
});

module.exports = {
  Notice,
  Result,
  RateOfReturn,
  ErrorMessage,
};
