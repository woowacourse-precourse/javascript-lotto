const Console = require('./Console');

class OutputConsole {
  static lottoNumbers = (lottoPurchaseDtos) => {
    lottoPurchaseDtos.forEach((lottoPurchaseDto) => {
      Console.Output(lottoPurchaseDto.numbers);
    })
  }
}

module.exports = OutputConsole;
