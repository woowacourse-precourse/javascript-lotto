const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");

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
    const uniqueNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    Validation.isTrue(uniqueNumbers);
    return uniqueNumbers;
  }

  createLotto(quantity){
    for (let i=0; i<quantity; i++) this.#createdLottoList.push(this.makeUniqueNumbers());
  }
}

module.exports = CreatedLotto;