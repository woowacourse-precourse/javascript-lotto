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

  checkBonusNumber(winningNumber, bonusNumber) {
    const check = /^[0-9]+$/; 
    if (!check.test(bonusNumber)) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (winningNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호에 존재하지 않는 값이어야 합니다.");
    }
  }

  checkLotto(lotto) {
    if (lotto.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    lotto.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
      
    if (new Set(lotto).size !== lotto.length){
      throw new Error("[ERROR] 로또 번호에 중복된 값이 포함되어있습니다.");
    }    
  }
}

module.exports = Validator;
