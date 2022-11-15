function checkValiPrice(number) {
  if (number % 1000 !== 0) {
    throw new Error(
      "[ERROR] 로또 구입 금액은 1000원 단위로 입력해 주셔야 합니다."
    );
  }
}

module.exports.checkValiPrice = checkValiPrice;
