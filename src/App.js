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

  play() {
    this.inputWon();
    this.buylotto();
    this.getrandomlotto();
    this.getwinbonuslotto();
    /*
    array,String
    */
    this.#lottos.forEach((eachlotto) => {
      const result = this.#userlottos.compareLotto(eachlotto, this.#winnumbers);
      if (result >= MESSAGE.Three) {
        numberObj[result] += 1;
      }
      if (
        result === MESSAGE.Five &&
        this.#userlottos.compareBonusNumber(eachlotto, this.#bonusnumber)
      ) {
        numberObj[MESSAGE.FiveBonus] += 1;
      }
    });
    const totalyield = winWonCount() / this.#numoflottosWon;
    Console.print(`총 수익률은 ${(totalyield * 100).toFixed(1)}${'%'}입니다.`);
    Console.close();
  }
}

module.exports = App;
