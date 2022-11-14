const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getLotto(){
    return [...this.#numbers];
  }

  printLotto(){
    Console.print(this.#numbers);
  }
  
  filter(array){
    return this.getLotto().filter(num => array.includes(num));
  }

  includes(num){
    return this.getLotto().includes(num);
  }

}

module.exports = Lotto;
