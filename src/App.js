const Service = require('./Service');
class App {
  play() {
    const service = new Service();
    service.printLottoCount();
  }
}

module.exports = App;
