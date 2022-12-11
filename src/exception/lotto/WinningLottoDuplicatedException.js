const Exception = require('../Exception');

class WinningLottoDuplicatedException extends Exception {
  static #ERROR_MESSAGE = '보너스 번호가 로또 번호에 포합됩니다: ';

  constructor(number) {
    super(`${WinningLottoDuplicatedException.#ERROR_MESSAGE} ${number}`);
  }
}

module.exports = WinningLottoDuplicatedException;
