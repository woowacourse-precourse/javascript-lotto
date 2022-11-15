module.exports = Object.freeze({
  MINIMUM_AMOUNT: 1000,
  //error message
  LOTTO_NUMBERS_SHOULD_BE_UNIQUE: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INPUT_ONLY_NUMBER: "[ERROR] 숫자만 입력하세요.",
  INPUT_OVER_1000: "[ERROR] 1000원 이상 입력하세요.",
  INPUT_SHOULD_DIVIDED_1000: "[ERROR] 1000원 단위로 입력하세요.",
  LOTTO_NUMBERS_LENGTH_SHOULD_BE6: "[ERROR] 로또 번호는 6개여야 합니다.",
  //UI
  INPUT_ONLY_1_TO_45: "[ERROR] 보너스 번호는 1부터 45까지만 입력하세요.",
  INPUT_ONLY_ONE_BONUS_NUMBER: "[ERROR] 보너스 번호는 1개만 입력하세요",

  //price
  PRICE: {
    3: { text: "3개 일치", price: 5000, count: 0 },
    4: { text: "4개 일치", price: 50000, count: 0 },
    5: { text: "5개 일치", price: 1500000, count: 0 },
    6: { text: "5개 일치, 보너스 볼 일치", price: 30000000, count: 0 },
    7: { text: "6개 일치", price: 2000000000, count: 0 },
  },
});
