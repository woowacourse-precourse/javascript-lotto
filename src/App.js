const Service = require('./Service');
class App {
  play() {
    const service = new Service();
    service.printLottoCount();
    service.printLottoNumbers();
    service.printGetWinningNumber();
    service.printGetBonusNumber();
    service.printResult();
  }
}

module.exports = App;
