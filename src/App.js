const Manager = require('./Manager');
class App {
  play() {
    const manager = new Manager();
    manager.buyLotto();
    manager.getResultNumber();
  }
}

const app = new App();
app.play();
module.exports = App;
