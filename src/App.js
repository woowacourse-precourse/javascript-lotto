const Question1 = require("./mainLogic/Question1");

class App {
  constructor() {
    this.question1 = new Question1();
  }
  play() {
    this.question1.start();
  }
}

module.exports = App;
