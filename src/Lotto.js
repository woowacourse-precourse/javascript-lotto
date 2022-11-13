const { Random, Console } = require("@woowacourse/mission-utils");

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

  userInput = (amount) => {
    this.isValidAmount(amount);
  }

  isValidAmount(amount) {
    if(parseInt(amount) % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다."); 
    }
    this.makeLottoList(amount / 1000);
  }
  
  makeLottoList(total) {
    const lottoList = {};
    for(let i = 0; i < total; i++) {
      let randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumbers = randomNumbers.sort((a, b) => a - b);
      lottoList[i] = randomNumbers;
    }
    this.printLottoList(total, lottoList);
  }

  printLottoList(total, lottoList) {
    Console.print(`\n${total}개를 구매했습니다.`);
    for(let i = 0; i < total; i++) {
      Console.print(lottoList[i]);
    }
  }

  buyLotto() {
    Console.readLine("구입금액을 입력해주세요.\n", this.userInput);
    
  }

}
const a = new Lotto;
a.buyLotto();

// module.exports = Lotto;
