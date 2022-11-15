module.exports = Object.freeze({
  MINIMUM_AMOUNT: 1000,
  //error message
  LOTTO_NUMBERS_SHOULD_BE_UNIQUE: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INPUT_ONLY_NUMBER: "[ERROR] 숫자만 입력하세요.",
  INPUT_OVER_1000: "[ERROR] 1000원 이상 입력하세요.",
  INPUT_SHOULD_DIVIDED_1000: "[ERROR] 1000원 단위로 입력하세요.",
  LOTTO_NUMBERS_LENGTH_SHOULD_BE6: "[ERROR] 로또 번호는 6개여야 합니다.",
  INPUT_ONLY_ONE_BONUS_NUMBER: "[ERROR] 보너스 번호는 1개만 입력하세요",
  INPUT_ONLY_1_TO_45: "[ERROR] 보너스 번호는 1부터 45까지만 입력하세요.",
  INPUT_NUMBER_BETWEEN_COMMA: "[ERROR] 당첨번호 사이에 ','를 입력하세요.",
  DUPLICATE_WITH_LOTTO_NUMBERS:
    "[ERROR] 보너스 넘버는 기존 번호와 중복될 수 없습니다.",

  //UI
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_LOTTO_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  SHOW_LOTTO_COUNT: (countLotto) => `${countLotto}개를 구매했습니다.`,
  STATS_WIN: "당첨 통계",
  LINE: "---",
  SHOW_RESULT_ONE_BYONE: (text, price, count) =>
    `${text} (${price}원) - ${count}개`,
  SHOW_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
  //price
  PRICE: {
    3: { text: "3개 일치", price: 5000, count: 0 },
    4: { text: "4개 일치", price: 50000, count: 0 },
    5: { text: "5개 일치", price: 1500000, count: 0 },
    6: { text: "5개 일치, 보너스 볼 일치", price: 30000000, count: 0 },
    7: { text: "6개 일치", price: 2000000000, count: 0 },
  },
});
