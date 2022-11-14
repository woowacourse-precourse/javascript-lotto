const { BUDGET_MESSAGE } = require('../constants/lotto');
const GameCtrl = require('./GameCtrl');
const LottoView = require('../view/LottoView');
const LottoModel = require('../model/LottoModel');

const LottoCtrl = class extends GameCtrl {
  constructor() {
    super(new LottoView(), new LottoModel());
  }

  start() {
    this.view.input(BUDGET_MESSAGE, this.gameProcess.bind(this));
  }

  gameProcess(budget) {
    this.budget = Number(budget);
    this.model.setLottoBudget(this.budget);
  }

  end() {}
};

module.exports = LottoCtrl;
