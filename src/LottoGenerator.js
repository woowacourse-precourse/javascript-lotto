const { MissionUtils } = require("@woowacourse/mission-utils");

class LottoGenerator {

  createLottoNumbers() {
    const userLotto = [];
    while(userLotto.length < 6) {
    const number = MissionUtils.Random.pickNumberInRange(1,45);
    if(!userLotto.includes(number)){
      userLotto.push(number);
    }
  }
  return userLotto.sort();
  }

  printLottos(lottos){
    for(let i = 0; i < lottos.length; i++){
      MissionUtils.print(lottos[i] + "\n");
    }
  }
}
module.exports = LottoGenerator;