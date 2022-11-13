const MissionUtils = require("@woowacourse/mission-utils");

class LottoController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.getPayInput();
  }

  game() {

  }
}

module.exports = LottoController;
