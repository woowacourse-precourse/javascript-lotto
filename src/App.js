const Service = require('./Service');
class App {
  play() {
    const service = new Service();
    service.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
