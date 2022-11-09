const { Console, Random } = require("@woowacourse/mission-utils");

const PROMPT_MONEY = '구입금액을 입력해 주세요.';
const PROMPT_LOTTO = '당첨 번호를 입력해 주세요.';
const PROMPT_BONUS = '보너스 번호를 입력해 주세요.';
const RESULT_STATISTICS = '\n당첨 통계\n---';
const THREE_SAME = '3개 일치 (5,000원)';
const FOUR_SAME = '4개 일치 (50,000원)';
const FIVE_SAME = '5개 일치 (1,500,000원)';
const FIVE_BONUS_SAME = '5개 일치, 보너스 볼 일치 (30,000,000원)';
const SIX_SAME = '6개 일치 (2,000,000,000원)';
const LOTTO_PRICE = 1000;

class App {
  constructor() {
    this.arrayLotto = [];
    this.arrayWinLotto = 0;
    this.numberBonus = 0;
    this.result = {
      THREE_SAME : 0,
      FOUR_SAME : 0,
      FIVE_SAME : 0,
      FIVE_BONUS_SAME : 0,
      SIX_SAME : 0
    };
  }

  play() {
    this.moneyInput(PROMPT_MONEY);
  }

  moneyInput(prompt) {
    Console.readLine(`${prompt}\n`, (input) => {
      this.countLotto(input);
    });
  }

  countLotto(money) {
    const amountLotto = money / LOTTO_PRICE;
    Console.print(`\n${amountLotto}개를 구매했습니다.`);
    this.createLotto(amountLotto);
  }

  createLotto(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(numbers);
      this.arrayLotto.push(numbers);
    }
    this.lottoInput(PROMPT_LOTTO);
  }

  lottoInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.arrayWinLotto = input.split(",");
      this.arrayWinLotto = this.arrayWinLotto.map(number => parseInt(number));
      console.log(this.arrayWinLotto);
      this.bonusInput(PROMPT_BONUS);
    });
  }

  bonusInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.numberBonus = input;
      this.compareLottoNumbers();
    });
  }

  compareLottoNumbers() {
    this.arrayLotto.map((numbers) => {
      let countSameNumbers = 0;
      numbers.map((number) => {
        if(this.arrayWinLotto.includes(number)) countSameNumbers += 1;
      });
      this.separateWin(countSameNumbers);
    });
    Console.print(this.result);
  }

  separateWin(count) {
    if (count === 3) this.result['THREE_SAME'] += 1;
    if (count === 4) this.result['FOUR_SAME'] += 1;
    if (count === 5) this.result['FIVE_SAME'] += 1;
    if (count === 6) this.result['SIX_SAME'] += 1;
  }
}

let app = new App();
app.play();

module.exports = App;
