const { validatePayment } = require('./utils/inputValidate');
const App = require('./App');

class User {
  #payment;

  constructor() {
    this.#payment = 0;
  }

  get payment() {
    return this.#payment;
  }

  set payment(payment) {
    validatePayment(payment);
    this.#payment = payment;
  }
}

module.exports = User;
