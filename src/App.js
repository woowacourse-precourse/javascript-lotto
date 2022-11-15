const Manager = require('./Manager');
class App {
  play() {
    const manager = new Manager();
    manager.buyLotto();
  }
}

const app = new App();
app.play();
module.exports = App;
