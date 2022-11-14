const { getLottoBudget, getTargetNumber, getBonusNumber } = require('./inputUtils');
class App {
  play() {
    this.getLottoBudget();
  }

  getLottoBudget() {
    getLottoBudget((budget) => {
      this.budget = budget;
      this.getTargetNumber();
    });
  }

  getTargetNumber() {
    getTargetNumber((target) => {
      this.target = target;
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    getBonusNumber((bonus) => {
      this.bonus = bonus;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
