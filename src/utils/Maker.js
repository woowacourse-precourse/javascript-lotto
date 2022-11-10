const Checker = require('../Checker');
const Convertor = require('./Convertor');

class Maker {
  static makeUsablePrice(priceString) {
    Checker.isValidPriceString(priceString);
    const price = Convertor.stringToNumber(priceString);
    Checker.isValidPrice(price);

    return price;
  }

  static getLottoNumber(price) {
    return Math.floor(price / 1000);
  }
}

module.exports = Maker;
