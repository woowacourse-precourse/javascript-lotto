const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
  constructor(){
    this.lottoQuantity;
  }
  lottoQuantity(money){
    this.lottoQuantity = money / 1000;
    return this.lottoQuantity;
  }

  makeLottoNumbers(){
    
  }
}

module.exports = LottoMachine;