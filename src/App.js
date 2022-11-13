const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { TICKET_PRICE, RANK } = require('./utils/CONSTANT');
const { convertNumberToComma } = require('./utils/string');
const { validateNumbers } = require('./utils/validation');

class App {
  #paid;

  #answerNumbers;

  #bonusNumber;

  #tickets = [];

  #totalResults;

  play() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      this.#paid = Number(answer);
      if (this.validateMoney(answer)) {
        const ticketsCount = this.countTickets(answer);
        MissionUtils.Console.print(`\n${ticketsCount}개를 구매했습니다.`);
        for (let i = 0; i < ticketsCount; i += 1) {
          this.#tickets.push(new Lotto(this.generateRandomNumbers()));
        }
        this.#tickets.map((ticket) => MissionUtils.Console.print(`[${ticket.getTicketNumbers().join(', ')}]`));
        this.setLottoNumbers();
      }
    });
  }

  validateMoney(answer) {
    const money = Number(answer);
    if (Number.isNaN(money)) {
      throw Error('[ERROR] 숫자여야 합니다.');
    }
    if (money % TICKET_PRICE !== 0) {
      throw Error(`[ERROR] ${convertNumberToComma(1000)}원 단위로 입력하세요`);
    }
    return true;
  }

  countTickets(answer) {
    return answer / TICKET_PRICE;
  }

  generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6); // [1, 10, 7, 8, 5, 3]
  }

  setLottoNumbers() {
    MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (answer) => {
      const numbers = answer.split(',').map((i) => Number(i));
      this.validate(numbers);
      this.#answerNumbers = numbers;
      this.setBonusNumber();
    });
  }

  validate(numbers) {
    validateNumbers(numbers);
  }

  setBonusNumber() {
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (answer) => {
      this.#bonusNumber = Number(answer);
      this.calculateTickets();
    });
  }

  calculateTickets() {
    MissionUtils.Console.print('\n당첨 통계\n---');
    this.#totalResults = this.#tickets
      .map((ticket) => ticket.calculateNumbers(this.#answerNumbers, this.#bonusNumber));
    let rewards = 0;
    RANK.forEach((rank) => {
      const count = this.#totalResults.filter((result) => result === rank.rank).length;
      MissionUtils.Console.print(`${rank.hit}개 일치${rank.bonus ? ', 보너스 볼 일치' : ''} (${convertNumberToComma(rank.money)}원) - ${count}개`);
      rewards += rank.money * count;
    });
    MissionUtils.Console.print(`총 수익률은 ${convertNumberToComma(this.profitRate(rewards, this.#paid))}%입니다.`);
    MissionUtils.Console.close();
  }

  profitRate(rewards, paid) {
    return ((rewards / paid) * 100).toFixed(1);
  }
}

module.exports = App;
