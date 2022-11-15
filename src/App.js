const { Random, Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');
const input = require('./UserInput');
const UserLotto = require('./UsetLotto');
const Lotto = require('./Lotto');
const winWon = require('./NumberWonMap');
const numberObj = require('./NumberEqaulCount');
const winWonCount = require('./UserWinNumCount');
const {
  THOUSAND,
  LOTTO_INIT_STR,
  LOTTO_LENGTH,
  USER_NUMBER_LOTTOS,
  Three,
  Five,
  FiveBonus,
  YIELD_END_MESSAGEL,
  YIELD_START_MESSAGE,
} = require('./MESSAGE');

class App {
  #winnumbers;
  #numoflottos;
  #numoflottosWon;
  #bonusnumber;
  #userlottos;
  #lottos;
  constructor() {
    this.#winnumbers = '';
    this.#numoflottos = 0;
    this.#numoflottosWon = 0;
    this.#bonusnumber = '';
    this.#lottos = [];
  }

  inputWon() {
    input.getInput();
    const inputResult = input.isValidInput();
    if (inputResult === MESSAGE.INPUT_ERROR_MESSAGE) {
      Console.close();
      throw inputResult;
    }
  }

  buylotto() {
    this.#numoflottos = input.numofLotts(input.userInput);
    this.#numoflottosWon = this.#numoflottos * THOUSAND;
    Console.print(this.#numoflottos + USER_NUMBER_LOTTOS);
  }

  getrandomlotto() {
    this.#userlottos = new UserLotto(LOTTO_LENGTH);
    this.#lottos = this.#userlottos.getUserLottos(this.#numoflottos);
    this.#userlottos.printLottos(this.#lottos);
  }

  getwinbonuslotto() {
    const winlottos = new Lotto(LOTTO_INIT_STR);
    this.#winnumbers = winlottos.getWinLotto();
    this.#bonusnumber = winlottos.getBounsLotto();
    Console.print(this.#bonusnumber);
  }

  AllLottoCompare(AllLotto, winLotto, bonusNumber) {
    AllLotto.forEach((eachlotto) => {
      const result = this.#userlottos.compareLotto(eachlotto, winLotto);
      if (result >= Three) {
        numberObj[result] += 1;
      }
      if (
        result === Five &&
        this.#userlottos.compareBonusNumber(eachlotto, bonusNumber)
      ) {
        numberObj[FiveBonus] += 1;
      }
    });
  }

  play() {
    this.inputWon();
    this.buylotto();
    this.getrandomlotto();
    this.getwinbonuslotto();
    this.AllLottoCompare(this.#lottos, this.#winnumbers, this.#bonusnumber);
    let totalyield = winWonCount() / this.#numoflottosWon;
    totalyield = (totalyield * 100).toFixed(1);
    Console.print(
      YIELD_START_MESSAGE + totalyield.toString() + '%' + YIELD_END_MESSAGEL
    );
    Console.close();
  }
}

module.exports = App;
