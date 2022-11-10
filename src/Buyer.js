class Buyer {
  payment;
  lottoCount;

  constructor(payment) {
    this.isValidpayment(payment);
  }

  isValidpayment(payment) {
    if (payment % 1000 > 0) {
      throw new Error("[ERROR] 1000원 단위만 입력 가능합니다.");
    }
    if (isNaN(payment)) throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    this.payment = payment;
  }

  setLottoCount() {
    this.lottoCount = this.payment / 1000;
  }
}

module.exports = Buyer;