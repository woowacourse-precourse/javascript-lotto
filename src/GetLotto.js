const MissionUtils = require("@woowacourse/mission-utils");

class GetLotto {
 
  constructor() {
   this.lottoPrice = 1000;
   this.countOfLottos = 0;
   this.lottoList = [];
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
