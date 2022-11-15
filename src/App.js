const Manager = require("./Manager.js");

class App {
  constructor(){
    this.manager = new Manager();
  }
  play(){
    this.manager.start();
  }
}

const app = new App();
app.play();

module.exports = App;
