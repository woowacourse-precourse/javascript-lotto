const Store = require("./Store");

class App {
  play() {
    const store = new Store();
    store.buy();
  }
}

const app = new App();
app.play();

module.exports = App;
