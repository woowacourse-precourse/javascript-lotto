class Calculation {
  static getRatesOfReturn(a, b) {
    const num = (a / b) * 100;
    const ROR = this.roundToTwo(num);
    return this.setCommas(ROR);
  }
  static roundToTwo(num) {
    return (+(Math.round(num + 'e+2') + 'e-2')).toFixed(1);
  }
  static setCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

module.exports = Calculation;
