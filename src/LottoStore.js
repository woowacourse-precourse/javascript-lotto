const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoStore { 
  static LOTTO_PRICE = 1000;

  buy(money) {
    this.vaildate(money);

    const lottoList = [];

    while(money > 0) {
      money -= 1000;
      const lotto =  generateLotto();
      lottoList.push(lotto);
    }
    return lottoList;
  }

  vaildate(money) {
    if(isNaN(money)) {
      throw new Error("[ERROR] 금액은 숫자로 입력해야 합니다.");
    }
    if(money % LottoStore.LOTTO_PRICE != 0) {
      throw new Error("[ERROR] 금액은 "+ LottoStore.LOTTO_PRICE +"로 나누어 떨어져야 합니다."); 
    }
  }

  generateLotto() {
    return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  setWinningNum(nums){
    this.winningNum = nums;
  }
  setBonusNum(num) {
    this.bonusNum = num;
  }
}

module.exports = LottoStore;