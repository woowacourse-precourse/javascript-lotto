const {
  LOTTO_RATE_MESSAGE, LOTTO_RESURL_STATISTICS_MESSAGE, LOTTO_RESULT_MESSAGE,
} = require('./lib/Constants');
const { print } = require('./lib/Utils');

class LottoResult {
  constructor(result, rate) {
    this.result = result;
    this.rate = rate;
  }

  printResult() {
    print(LOTTO_RESURL_STATISTICS_MESSAGE);
    this.printMatchCount();
    return this;
  }

  printMatchCount() {
    const resultList = Object.entries(this.result);

    resultList.forEach(([key, value]) => {
      print(LOTTO_RESULT_MESSAGE[key](value.count));
    });
  }

  printRate() {
    print(LOTTO_RATE_MESSAGE.rate(this.rate));
    return this;
  }
}

module.exports = LottoResult;
