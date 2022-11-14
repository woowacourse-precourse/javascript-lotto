const {
  LOTTO_RESURL_STATISTICS_MESSAGE,
} = require('./lib/Constants');
const { print } = require('./lib/Utils');

class LottoResult {
  constructor(result, rate) {
    this.result = result;
    this.rate = rate;
  }

  printResult() {
    print(LOTTO_RESURL_STATISTICS_MESSAGE);

    Object.keys(this.result).forEach((key) => {
      const value = this.result[key];
      return print(`${value.text}${value.count}개`);
    });

    return this;
  }

  printRate() {
    print(`총 수익률은 ${this.rate}%입니다.`);
    return this;
  }
}

module.exports = LottoResult;
