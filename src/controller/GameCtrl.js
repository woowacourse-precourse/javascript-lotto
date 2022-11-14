const IGameCtrl = require('./IGameCtrl');

const GameCtrl = class extends IGameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  start() {}

  gameProcess() {}

  end() {}

  renderGameResult(message) {
    this.view.output(message);
  }
};

module.exports = GameCtrl;
