class Calculation {
  static getRatesOfReturn(a, b) {
    const num = (a / b) * 100;
    return this.roundToTwo(num);
  }
  static roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }
}

module.exports = Calculation;
