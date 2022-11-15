const IGameCtrl = require('./IGameCtrl');

const GameCtrl = class extends IGameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
    if (this.constructor === GameCtrl) {
      throw new Error('추상 클래스로 인스턴스를 생성하였습니다.');
    }
  }

  start() {
    this.gameProcess();
  }

  gameProcess() {}

  end() {}
};

module.exports = GameCtrl;
