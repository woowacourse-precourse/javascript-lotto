class Payment {
  #payment;

  constructor(payment) {
    this.validate(payment);
    this.#payment = payment;
  }

  validate(payment) {

  }
}

module.exports = Payment;
