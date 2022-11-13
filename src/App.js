const MissionUtils = require("@woowacourse/mission-utils");
const INPUT_ERROR = require('./Constants');
const Lotto = require("./Lotto");

class App {
  #bonus = 0;

  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      const how_many = this.isPurchaseAmountValid(answer);
      const published_Lottos = this.getLottos(how_many);
      this.InputLottos(published_Lottos, how_many);
    });
  }

  isPurchaseAmountValid(money) {
    if(Number(money) % 1000 != 0){
      throw INPUT_ERROR.NOT_DIVIDED;
    }
    return Number(money) / 1000;
  }

  getLottos(how_many) {
    const published_Lottos = [];
    for(let i = 0; i < how_many; i++){
      const one_lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      published_Lottos.push(one_lotto);
    }
    return published_Lottos;
  }

  InputLottos(published_Lottos, how_many) {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      const numbers = answer.split(',');
      new Lotto(numbers);
      this.InputBonus(published_Lottos, numbers, how_many);
    });
  }

  InputBonus(published_Lottos, array, how_many) {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      this.isBonusDuplicated(answer, array);
      array.push(answer);
      this.getAllResults(published_Lottos, array, how_many);
    });
  }

  isBonusDuplicated(answer, array) {
    if(array.includes(answer)){
      throw INPUT_ERROR.DUPLICATED;
    }
  }

  getAllResults(published_Lottos, winning, count) {
    const all_results = [0, 0, 0, 0, 0];
    for(let i = 0; i < count; i++){
      const result = this.getSingleResult(published_Lottos[i], winning);
      if(result >= 3){
        all_results[result - 3] += 1
      }
    }
  }

  getSingleResult(published_Lotto, winning) {
    const result = 0;
    for(let i = 0; i < 6; i++){
      if(published_Lotto.includes(winning[i])){
        result += 1;
      }
      if(result == 5 && published_Lotto.includes(winning[-1])) {
        result += 1;
      }
    }
  }

}

const app = new App;
app.play();
module.exports = App;
