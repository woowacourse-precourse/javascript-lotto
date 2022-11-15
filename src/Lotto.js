const { MissionUtils } = require("@woowacourse/mission-utils");

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
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  
  static purchase(input) {

    if(!isNaN(input)) {
      throw new Error("[ERROR] 구매금액은 숫자만 입력하세요.");
    }
    if(input<1000 || input%1000 != 0) {
      throw new Error("[ERROR] 구매금액은 1,000원 단위로 입력하세요.");
    }

    const lotto = [];
    const count = input/1000;

    for(let i=0; i<count; i++) {
      lotto.push(new Lotto(this.drawLottos()));
    }

    return lotto;
  }

  static drawLottos() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1,45,6).sort();
  }

  static getmatch(lottos, winLottos, bonus) {

    let total_match = 0;

    var result = {
      3: {match:0, prize:'5,000'},
      4: {match:0, prize:'50,000'},
      5: {match:0, prize:'1,500,000'},
      BONUS: {match:0, prize: '30,000,000'},
      6: {match:0, prize:'2,000,000,000'},
    }

    lottos.forEach(lotto => {
      if(winLottos.include(lotto)) {
        total_match++;
      }
      if(winLottos.include(bonus)) {
        
      }
    });

    this.printResult(result);
  }

  printResult(result) {
    

  }


  // TODO: 추가 기능 구현
}

module.exports = Lotto;
