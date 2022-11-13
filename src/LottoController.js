const MissionUtils = require('@woowacourse/mission-utils');
const LottoPublisher = require('./LottoPublisher.js');
const LottoStore = require('./LottoStore.js');
const LottoViewer = require('./LottoViewer.js');
const Customer = require('./Customer.js');

class LottoController {
  constructor() {
    this.lottoPublisher = new LottoPublisher();
    this.lottoStore = new LottoStore();
    this.lottoViewer = new LottoViewer();

    this.init();
  }
  init() {}
}

module.exports = LottoController;
