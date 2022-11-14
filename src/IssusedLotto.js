const MissionUtils = require("@woowacourse/mission-utils");

class InssusedLotto{
  #inssusedLottos

  constructor(quantity){
    this.quantity = quantity;
    this.#inssusedLottos = [];
  }

  setInssusedLottos(inssusedLottos){
    this.#inssusedLottos = inssusedLottos;
  }

  getInssusedLottos(){
    return this.#inssusedLottos;
  }

  makeUniqueNumbers(){
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  makeLotto(){
    for (let i=0; i<this.quantity; i++) this.#inssusedLottos.push(this.makeUniqueNumbers());
    this.setInssusedLottos(this.#inssusedLottos);
    this.printLotto()
  }

  printLotto(){
    this.#inssusedLottos.map(lottos => MissionUtils.Console.print(lottos));
  }
}

module.exports = InssusedLotto;