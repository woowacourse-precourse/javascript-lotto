class ValidatePay {

  constructor(inputPay) {
    this.validate(inputPay);
    this.pay = inputPay;
  };

  validate(inputPay) {
    const isCorrect = /[^0-9]/g;

    if (isCorrect.test(inputPay)) {
      throw new Error('[ERROR] 구입 금액은 정수로만 이루어져야 합니다.');
    };

    if (Number(inputPay) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
    };

    if (Number(inputPay) === 0) {
      throw new Error('[ERROR] 최소 한 장 이상을 구입해야 합니다.');
    };

  };

  count() {
    return parseInt(Number(this.pay) / 1000);
  }

}

module.exports = ValidatePay;