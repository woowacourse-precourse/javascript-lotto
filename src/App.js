const Service = require('./Service');
class App {
  play() {
    const service = new Service();
    service.printLottoCount();
    service.printLottoNumbers();
  }
}

module.exports = App;
