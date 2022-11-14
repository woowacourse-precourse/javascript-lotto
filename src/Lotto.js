const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers){
    this.#numbers = numbers;
  }

  setNumbers(userInput){
    this.#numbers = userInput;
  }

  start(){
    this.enterQuantity();
  }

  isEachUniqueNumer(numbers){
    return new Set(numbers).size === 6 ? true : false;
  }

  isValidNumber(number){
    return (number > 0 && number < 46) ? true : false;
  }

  isValidLength(numbers){
    return numbers.length === 6 ? true : false;
  }

  validate(numbers) {
    if (!this.isValidLength(numbers)) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    if (!this.isEachUniqueNumer(numbers)) throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    
    numbers.forEach(number => {
      if (!this.isValidNumber(number)) throw new Error("[ERROR] 로또 번호는 1에서 45사이여야 합니다.");
    })

    return true;
  }

  enterQuantity(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      if ((input % 1000) !== 0) throw new Error("[ERROR] 올바르지 않은 구입금액입니다.");
      const quantity = input / 1000;
      this.printQuantity(quantity);
      this.makeLotto(quantity);
    });
  }

  enterNumbers(){
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      let userInput = input.split(',').map(item => parseInt(item));
      if (this.validate(userInput)) this.setNumbers(userInput);
    });
  }

  makeLotto(quantity){
    let uniqueNumbersList = [];
    for (let i=0; i<quantity; i++) uniqueNumbersList.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    this.printLotto(uniqueNumbersList);
    this.enterNumbers();
  }

  printQuantity(quantity){
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
  }

  printLotto = (uniqueNumbersList) => {
    uniqueNumbersList.map(numbers => MissionUtils.Console.print(numbers));
  }
}

module.exports = Lotto;
