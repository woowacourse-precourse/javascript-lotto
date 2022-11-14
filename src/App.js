const { Console, Random } = require("@woowacourse/mission-utils");

const PURCHASE_MONEY = '구입금액을 입력해 주세요.';
const LOTTO_WINDOW = '당첨 번호를 입력해 주세요.'
const BONUS_WINDOW = '보너스 번호를 입력해 주세요.'
const ANSWER_STATS = '\n당첨 통계\n---';
const SAME_THREE = '3개 일치 (5,000원)';
const SAME_FOUR = '4개 일치 (50,000원)';
const SAME_FIVE = '5개 일치 (1,500,000원)';
const SAME_FIVE_BONUS = '5개 일치, 보너스 볼 일치 (30,000,000원)';
const SAME_SIX = '6개 일치 (2,000,000,000원)';
const PRICE_LOTTO = 1000;

class App {
  constructor() {
    this.lottoArray = [];
    this.winningNumber = 0;
    this.bonusNumber = 0;
    this.answer = {
      SAME_THREE: 0,
      SAME_FOUR: 0,
      SAME_FIVE: 0,
      SAME_FIVE_BONUS: 0,
      SAME_SIX: 0
    };
  }

  play() {
    this.moneyWindow(PURCHASE_MONEY);
  }

  moneyWindow(window) {
   Console.readLine(`${window}\n`, (input) => {
    this.lottoCount(input);
   });
  }

  lottoCount(money) {
    const lottoAmount = money / PRICE_LOTTO;
    Console.print(`\n${lottoAmount}개를 구매했습니다.`);
    this.lottoCreate(lottoAmount);
  }

  lottoCreate(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(numbers);
      this.lottoArray.push(numbers);
    }
    this.inputLotto(LOTTO_WINDOW);
  }

  inputLotto(window) {
    Console.readLine(`\n${prompt}\n`, (input) => {

      this.winningNumber = input.split(',');
      this.winningNumber = this.winningNumber.map(number => parseInt(number));
      console.log(this.winningNumber);
      this.bonusWindow(BONUS_WINDOW);
    });
  }
  bonusWindow(window) {
    Console.readLine(`\n${window}\n`, (input) => {
      this.bonusNumber = input;
      this.numberCompare();
    })
  }
  numberCompare() {
    this.lottoArray.map((numbers) => {
      let sameNumber = 0;
      numbers.map((number) => {
        if(this.winningNumber.includes(number)) sameNumber += 1;
      });
      this.winSeparate(sameNumber);
    });
    Console.print(this.answer);
  }
  winSeparate(count) {
    if (count === 3) this.answer['SAME_THREE'] += 1;
    if (count === 4) this.answer['SAME_FOUR'] += 1;
    if (count === 5) this.answer['SAME_FIVE'] += 1;
    if (count === 6) this.answer['SAME_SIX'] += 1;
  }
}

new App().play();

module.exports = App;
