const { Console, Random } = require("@woowacourse/mission-utils");

class MakeLottos {
  constructor(amount) {
    this.lottoLists = this.makeNewLottos(amount);
    // Console.print(this.lottoLists)
  }

  makeNewLottos(amount) {
    let arr = []
    for (let i = 0 ; i < amount ; i++) {
      arr.push((Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    return arr
  }

}

module.exports = MakeLottos;