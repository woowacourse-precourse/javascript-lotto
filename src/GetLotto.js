const MissionUtils = require("@woowacourse/mission-utils");
const {ERROR_MESSATE} = require("../constant/constants")

class GetLotto {
 
  constructor() {
   this.lottoPrice = 1000;
   this.countOfLottos = 0;
   this.lottoList = [];
  }

  isValidMoney(userMoney) {
    if (userMoney % this.lottoPrice !== 0) {
      throw new Error(ERROR_MESSATE.UNIT);
    }

    if (userMoney < this.lottoPrice) {
      throw new Error(ERROR_MESSATE.UNIT);
    }

    return true;
  }
    
  generateLottoNum(userMoney) {
   for (let count = 1; count <= this.countOfLottos; count++) {
    const LottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(LottoNumbers);
    this.lottoList.push(lotto);
   }
    
  return this.lottoList;
 }

    
}
