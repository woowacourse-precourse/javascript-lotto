const PayAmount = require("./controller/PayAmount");

class App{
  play(){
    const payAmount = new PayAmount({});
    payAmount.start();
  }
}
module.exports = App;
const app = new App();
app.play();