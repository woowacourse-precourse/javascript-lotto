const { InputConsole, OutputConsole } = require('./Console');
const { LottoComputerDto, LottoUserDto } = require('./LottoDto');
const { LOTTO_COST } = require('./Resource');
class App {
  async play() {
    const money = await InputConsole.getMoney();
    const LottoArrays = Array.from(
      { length: money / LOTTO_COST },
      () => new LottoUserDto(),
    );
    LottoArrays.forEach((lotto) => {
      console.log(lotto.numbers);
    });
  }
}

module.exports = App;

new App().play();