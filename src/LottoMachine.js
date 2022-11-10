const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoMachine {
  #money;
  #lottos;

  constructor(money){
    this.validate(money);
    this.#money = Number(money);
    this.#lottos = this.generateLottos();
  }

  validate(money) {
    if(!Number(money)) {
      throw new Error("[ERROR] 금액은 숫자만 입력해야 합니다.");
    }
    if(Number(money) % 1000 !== 0 ){
      throw new Error("[ERROR] 금액은 1,000원 단위만 입력 가능합니다.")
    }
  }

  generateSixNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  generateLotto() {
    return new Lotto(this.generateSixNumber());
  }

  generateLottos() {
    const lottos = [];
    const lottosCount = this.#money / 1000;
    for(let count = 0; count < lottosCount; count++) {
      lottos.push(this.generateLotto);
    }
    return lottos;
  }
  
}

module.exports = LottoMachine;