const View = require('./View');

class App {
  play () {
    this.process();
  }

  process () {
    new View();
  }
}

module.exports = App;
