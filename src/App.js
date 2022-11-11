const { InputConsole, OutputConsole } = require('./Console');
const { LottoComputerDto, LottoUserDto } = require('./LottoDto');

class App {
  async play() {
    const money = await InputConsole.getMoney();
    const LottoArrays = Array.from(
      { length: money / 1000 },
      () => new LottoUserDto(),
    );
    LottoArrays.forEach((lotto) => {
      console.log(lotto.numbers);
    });
  }
}

module.exports = App;
