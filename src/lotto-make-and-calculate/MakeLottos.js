const { Random } = require('@woowacourse/mission-utils');

class MakeLottos {
  constructor(amount) {
    this.lottoLists = this.makeNewLottos(amount);
  };

  makeNewLottos(amount) {
    let arr = [];
    for (let i = 0; i < amount; i++) {
      arr.push(this.sortLotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    };

    return arr;
  };

  sortLotto(lottoNumbers) {
    return lottoNumbers.sort(function(a, b) {
      return a - b;
    });
  };
};

module.exports = MakeLottos;
