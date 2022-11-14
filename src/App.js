const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  #lottos;
  #answer;
  #item;
  #bonusNum;
  #count;
  #reward;
  #bonusTrue;
  #match;

  constructor() {
    this.#bonusTrue;
    this.#lottos = [];
    this.#answer = [];
    this.#item = 0;
    this.#count = 0;
    this.#bonusNum = 0;
    this.#reward = [];
    this.#match = [
      { collect: 3, reward: "5,000" },
      { collect: 4, reward: "50,000" },
      { collect: 5, reward: "1,500,000" },
      { collect: 5, reward: "30,000,000", Bonus: true },
      { collect: 6, reward: "2,000,000,000" },
    ];
  }

  inputCost() {
    Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      this.isValidation(cost);
      this.#item = +cost;
      this.getLottoNumber(this.#item / 1000);
      this.printLotto();
      this.getAnswer();
    });
  }

  getLottoNumber(item) {
    this.#lottos = Array.from({ length: item }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
  }

  printLotto() {
    Console.print(`\n${this.#item / 1000}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => Console.print(lotto));
  }

  getAnswer() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (answer) => {
      this.#answer = answer.split(",").map((v) => +v);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      this.#bonusNum = parseInt(bonusNum);
      this.compare();
      this.counting();
      this.prizePrint();
    });
  }
  compare() {
    this.#lottos.forEach((lotto) => {
      this.#count = 0;
      this.#bonusTrue = lotto.includes(this.#bonusNum);

      lotto.forEach((number) => {
        if (this.#answer.includes(number)) {
          this.#count += 1;
        }
      });
      this.winner();
    });
  }
  winner() {
    this.#match.forEach((prize) => {
      const { collect, reward, Bonus } = prize;

      if (this.#count === 5 && this.#bonusTrue === Bonus) {
        this.#reward.push(reward);
        return;
      }

      if (collect === this.#count && this.#bonusTrue === Bonus) {
        this.#reward.push(reward);
      }
    });
  }

  counting() {
    this.#match.forEach((item) => {});
  }

  prizePrint() {
    Console.print("\n당첨통계\n");
    console.log(this.#reward);
    Console.close();
  }

  isValidation() {}
  play() {}
}

module.exports = App;
const app = new App();
app.inputCost();
