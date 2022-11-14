const MissionUtils = require("@woowacourse/mission-utils");
const Constants = require('./Constants');
const Lotto = require("./Lotto");

class App {

  play() {
    this.inputPurchase();
  }

  inputPurchase() {
    MissionUtils.Console.readLine(`${Constants.GAME_MESSAGES.PURCHASE}\n`, (answer) => {
      MissionUtils.Console.print(answer);
      this.isPurchaseAmountValid(answer);
      const how_many = Number(answer) / 1000;
      this.getLottos(how_many);
    });
  }

  isPurchaseAmountValid(money) {
    if(Number(money) % 1000 != 0){
      throw Constants.INPUT_ERROR.NOT_DIVIDED;
    }
  }

  getLottos(how_many) {
    MissionUtils.Console.print(`${how_many}${Constants.GAME_MESSAGES.PURCHASE_RESULT}\n`)
    const published_Lottos = [];
    for(let i = 0; i < how_many; i++){
      const array = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const one_lotto = this.stringifyLottos(array);
      MissionUtils.Console.print(one_lotto);
      published_Lottos.push(array);
    }
    this.inputWinnings(published_Lottos, how_many);
  }

  stringifyLottos(array) {
    let string = '[';
    for(let i = 0; i < 6; i++) {
      if(i < 5){
        string += `${array[i]}, `;
        continue
      }
      string += `${array[i]}]`;
    }
    return string
  }

  inputWinnings(published_Lottos, how_many) {
    MissionUtils.Console.readLine(`${Constants.GAME_MESSAGES.INPUT_NUMBER}\n`, (answer) => {
      MissionUtils.Console.print(answer);
      const winning = answer.split(',').map(Number);
      new Lotto(winning);
      this.inputBonus(published_Lottos, winning, how_many);
    });
  }

  inputBonus(published_Lottos, winning, how_many) {
    MissionUtils.Console.readLine(`${Constants.GAME_MESSAGES.BONUS_NUMBER}\n`, (answer) => {
      MissionUtils.Console.print(answer);
      this.isBonusDuplicated(answer, winning);
      winning.push(answer);
      this.getAllResults(published_Lottos, winning, how_many);
    });
  }

  isBonusDuplicated(answer, winning) {
    if(winning.includes(answer)){
      throw Constants.INPUT_ERROR.DUPLICATED;
    }
  }

  getAllResults(published_Lottos, winning, how_many) {
    let all_results = [0, 0, 0, 0, 0];
    for(let i = 0; i < how_many; i++){
      const result = this.getSingleResult(published_Lottos[i], winning);
      if(result >= 3){
        all_results[result - 3] += 1
      }
    }
    this.printResults(all_results, how_many);
  }

  getSingleResult(published_Lotto, winning) {
    let result = 0;
    for(let i = 0; i < 6; i++){
      if(published_Lotto.includes(winning[i])){
        result += 1;
      }
      if(result == 5 && published_Lotto.includes(winning[-1])) {
        result += 1;
      }
    }
    return result
  }

  printResults(all_results, how_many) {
    MissionUtils.Console.print(Constants.GAME_MESSAGES.PURCHASE_RESULT);
    let i = 0;
    Constants.RESULT.forEach(element => {
      MissionUtils.Console.print(`${element} - ${all_results[i]}개`);
      i++;
    });
    this.getYield(all_results, how_many);
  }

  getYield(all_results, how_many) {
    let sum = 0;
    const prizes = Constants.PRIZES;
    const money = how_many * 1000
    for(let i = 0; i < 5; i++){
      sum += prizes[i] * all_results[i]
    }
    let total = ((sum / money) * 100).toFixed(1);
    MissionUtils.Console.print(`${Constants.GAME_MESSAGES.YIELD_FIRST}${total}${Constants.GAME_MESSAGES.YIELD_LAST}`)
  }

}

const app = new App;
app.play();
module.exports = App;
