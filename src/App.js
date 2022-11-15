const Store = require('./Store');

const store = new Store();

class App {
  play() {
    store.pay();
  }
}

const app = new App();
app.play();

module.exports = App;
