const Controller = require('./Controller/Controller');
const Model = require('./Model/Model');
const View = require('./View/View');

class App {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model);
  }

  play() {
    this.controller.start();
  }
}

module.exports = App;
