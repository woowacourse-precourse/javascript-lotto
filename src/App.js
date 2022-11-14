const LottoView = require('./view/LottoView');
const LottoModel = require('./model/LottoModel');
const LottoCtrl = require('./controller/LottoCtrl');

const App = class {
  constructor() {
    this.lottoView = new LottoView();
    this.lottoModel = new LottoModel();
    this.lottoCtrl = new LottoCtrl(this.lottoView, this.lottoModel);
  }

  play() {
    this.lottoCtrl.start();
  }
};

const app = new App();
app.play();

module.exports = App;
