class Validator {
    static purchaseInput(input) {
        if (isNaN([...input])) thorw new Error("[ERROR] 문자열이 포함되었습니다.");
    const pirce = parseInt(input, 10) % 1000;
    if (pirce !== 0) throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
  }
}
module.exports = Validator;
