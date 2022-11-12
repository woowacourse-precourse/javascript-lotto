import IGameCtrl from './IGameCtrl';

const GameCtrl = class extends IGameCtrl {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {}

  gameProcess() {}

  renderGameResult(message) {
    this.view.output(message);
  }
};

export default GameCtrl;
