class Validator {
  checkPurchaseMoney(purchaseMoney) {
    const check = /^[0-9]+$/; 
    if (!check.test(purchaseMoney)) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
    }

    if (purchaseMoney % 1000 || purchaseMoney === 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로만 입력 가능합니다.");
    }
  }

  checkWinningNumber(winningNumber) {
    const check = /^[0-9]+(,[0-9]+)+$/; 
    if (!check.test(winningNumber)) {
      throw new Error("[ERROR] 숫자를 쉼표로 구분하여 입력해주세요.");
    }
  }
}

module.exports = Validator;
