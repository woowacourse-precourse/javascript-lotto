const Lotto = require("./Lotto");

class Lottos {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  static createLottos(lottoNum) {
    const lottos = [];

    for (let i = 0; i < lottoNum; i++) {
      lottos.push(Lotto.createRandomLotto());
    }

    return new Lottos(lottos);
  }

  getLottoScores(winningLotto) {
    const scores = [];

    for (let i = 0; i < this.#lottos.length; i++) {
      const eachScore = this.#lottos[i].calculateScore(winningLotto);
      scores.push(eachScore);
    }

    return scores;
  }
}

module.exports = Lottos;
