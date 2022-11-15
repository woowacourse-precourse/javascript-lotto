class Payment {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validatePaymentInteger(numbers);
    this.validatePaymentMultipleOfThousand(numbers);
    this.validatePaymentNotNegative(numbers);
  }

  validatePaymentInteger(numbers) {
    if (!Number.isInteger(paymentNum)) {
      throw new Error("[ERROR] 구매금액은 정수여야 합니다.");
    }
  }

  validatePaymentMultipleOfThousand(numbers) {
    if (paymentNum % 1000 !== 0) {
      throw new Error("[ERROR] 구매금액은 1000원 단위여야 합니다.");
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Payment;
