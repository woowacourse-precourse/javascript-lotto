const LottoView = require('./view/LottoView');
const LottoModel = require('./model/LottoModel');
const LottoCtrl = require('./controller/LottoCtrl');

const App = class {
  constructor() {
    this.LottoView = new LottoView();
    this.LottoModel = new LottoModel();
    this.LottoCtrl = new LottoCtrl(this.LottoView, this.LottoModel);
  }

  play() {
    this.LottoCtrl.start();
  }
};

const app = new App();
app.play();

module.exports = App;
