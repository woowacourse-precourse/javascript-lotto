const { SYSTEM } = require('./System');
const Person = require('./Person');

class App {
  play() {
    const person = new Person();
    person.buy();
  }
}

const app = new App();
app.play();

module.exports = App;
