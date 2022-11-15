const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoMachine {
  constructor(){
    this.lottoQuantity;
    this.lottoList = [];
  }

  lottoQuantity(money){
    this.lottoQuantity = money / 1000;
    return this.lottoQuantity;
  }

  makeLottoNumbers(){
    for(let count = 1; count <= this.lottoQuantity;count++){
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((a,b)=>a-b).join(',');
      this.lottoList.push(lottoNumbers)
    }
    return this.lottoList;
  }
}

module.exports = LottoMachine;