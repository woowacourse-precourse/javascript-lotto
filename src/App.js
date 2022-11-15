const Prompt = require('./views/Prompt');
const Lotto = require('./domains/Lotto');
const WinningLotto = require('./domains/WinningLotto');
const Messages = require('./constants/Messages');

class App {
  /** @type {Lotto[]} */
  #lottos;

  /** @type {WinningLotto} */
  #winningLotto;

  /** @type {Reward[]} */
  #rewards;

  /**
   * @param {Prompt} prompt
   * @yields {string}
   */
  *#routineBuy(prompt) {
    yield Messages.ROUTINE_BUY_PUT_MONEY;
    const money = prompt.readNumber();
    this.#lottos = Lotto.buyLottos(money);

    prompt.print(Messages.ROUTINE_BUY_SUCCESS, this.#lottos.length);
    this.#lottos.forEach((lotto) => prompt.print(lotto.toString()));
  }

  /**
   * @param {Prompt} prompt
   * @yields {string}
   */
  *#routineReward(prompt) {
    yield Messages.ROUTINE_REWARD_PUT_WINNING_NUMBERS;
    yield Messages.ROUTINE_REWARD_PUT_BONUS_NUMBER;
    this.#winningLotto = new WinningLotto(Lotto.fromString(prompt.read()), prompt.readNumber());
    this.#rewards = this.#lottos
      .map((lotto) => this.#winningLotto.getRewardFor(lotto))
      .filter((reward) => !!reward);
  }

  /**
   * @param {Prompt} prompt
   */
  // eslint-disable-next-line require-yield
  *#routineStats(prompt) {
    prompt.print(Messages.ROUTINE_STATS_TITLE);
    [...this.#winningLotto.getAvailableRewards()]
      .reverse()
      .map((reward) => [reward, this.#rewards.filter((myReward) => myReward === reward).length])
      .forEach(([reward, count]) => prompt.print(`${reward.toString()} - ${count}개`));

    const investment = Lotto.PRICE * this.#lottos.length;
    const rateOfReturn = WinningLotto.getRateOfReturn(investment, this.#rewards);
    prompt.print(Messages.ROUTINE_STATS_RATE_OF_RETURN, rateOfReturn);
  }

  /**
   * @param {Prompt} prompt
   * @yields {string}
   */
  *#routine(prompt) {
    yield* this.#routineBuy(prompt);
    yield* this.#routineReward(prompt);
    yield* this.#routineStats(prompt);
  }

  play() {
    new Prompt(this.#routine.bind(this)).start();
  }
}

module.exports = App;
