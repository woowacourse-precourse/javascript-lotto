const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sort();
    this.printLotto();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const numberSet = new Set(numbers);
    if(numbers.length !== numberSet.size){
      throw new Error("[ERROR] 로또 번호가 중복되었습니다.");
    }
  }

  getLotto(){
    return [...this.#numbers];
  }

  sort(){
    this.#numbers.sort((a,b) => a-b);
  }

  printLotto(){
    Console.print(`[${this.#numbers.join(', ')}]`);
  }
  
  filter(array){
    return this.getLotto().filter(num => array.includes(num));
  }

  includes(num){
    return this.getLotto().includes(num);
  }
}

module.exports = Lotto;
