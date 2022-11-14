const MissionUtils = require("@woowacourse/mission-utils");

class CreatedLotto{
  #createdLottoList

  constructor(quantity){
    this.#createdLottoList = [];
    this.createLotto(quantity);
  }

  getCreatedLottoList(){
    return this.#createdLottoList;
  }

  makeUniqueNumbers(){
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  createLotto(quantity){
    for (let i=0; i<quantity; i++) this.#createdLottoList.push(this.makeUniqueNumbers());
  }
}

module.exports = CreatedLotto;