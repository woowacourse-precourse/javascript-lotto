class QuickPick {
  #amount;
  #myLottoArray;

  constructor(payment) {
    this.validate(payment);
    this.countAmount(payment);
    this.pickRandomNumbers();
  }
}

module.exports = QuickPick;
