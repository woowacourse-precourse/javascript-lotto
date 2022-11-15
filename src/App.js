const { SYSTEM } = require('./System');
const Person = require('./Person');

class App {
  play() {
    const person = new Person();
    person.buy();
  }
}

module.exports = App;
