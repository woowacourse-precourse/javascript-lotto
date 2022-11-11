class ValidationCheck {
  isMoneyValid(money) {
    if (isNaN(money)) throw new Error("[ERROR] 숫자를 입력해 주세요.");
    if (!/[0-9]{4,}/.test(money)) throw new Error("[ERROR] 4자리 이상의 숫자를 입력해 주세요.");
    if (parseInt(money) % 1000 !== 0) throw new Error("[ERROR] 1000원 단위의 금액을 입력해 주세요.");
    return true;
  }

  isBonusNumberValid(bonusNumber) {
    if (+bonusNumber < 1 || +bonusNumber > 45) throw new Error("[ERROR] 보너스 숫자는 1-45 사이의 수여야 합니다.");
    if (numbers.includes(bonusNumber)) throw new Error("[ERROR] 이전에 입력한 번호가 보너스 숫자와 중복됩니다.");
    return true;
  }

  isWinningNumberValid(winningNumber) {
    if (/\d{1,},\d{1,},\d{1,},\d{1,},\d{1,},\d{1,}/g.test(winningNumber))
      throw new Error("[ERROR] 숫자+',' 형태로 입력해 주세요. ex) 1,2,3,4,5,6");
  }
}
