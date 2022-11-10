const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');

class LottoManager {
  #lottos = [];
  #winningNumbers = [];

  initLottos(purchaseAmountInput) {
    this.validatePurchaseAmount(purchaseAmountInput);
    this.#lottos = this.issueLottos(parseInt(purchaseAmountInput, 10));
  }

  validatePurchaseAmount(purchaseAmountInput) {
    if (this.isInvalidPurchaseAmount(purchaseAmountInput)) {
      throw new Error(
        '[ERROR] 구입 금액은 1,000으로 나누어 떨어지는 숫자여야 합니다.',
      );
    }
  }

  isInvalidPurchaseAmount(purchaseAmountInput) {
    return (
      !/^\d+$/g.test(purchaseAmountInput) ||
      parseInt(purchaseAmountInput, 10) % 1000 !== 0
    );
  }

  issueLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      lottos.push(new Lotto(this.createLottoNumbers()));
    }

    return lottos;
  }

  createLottoNumbers() {
    const lottoNumbers = new Set();

    while (lottoNumbers.size < 6) {
      lottoNumbers.add(Random.pickNumberInRange(1, 45));
    }

    return [...lottoNumbers].sort((a, b) => a - b);
  }

  initWinningNumbers(winningNumbersInput) {
    const winningNumbers = winningNumbersInput.split(',');

    this.validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers.map(winningNumber =>
      parseInt(winningNumber, 10),
    );
  }

  validateWinningNumbers(winningNumbers) {
    switch (true) {
      case this.hasNotNumber(winningNumbers):
        throw new Error(
          '[ERROR] 당첨 번호에 숫자가 아닌 문자가 입력되었습니다.',
        );
      case this.hasDuplicate(winningNumbers):
        throw new Error('[ERROR] 당첨 번호는 중복된 숫자가 없어야 합니다.');
      case this.hasOutOfBoundNumber(winningNumbers):
        throw new Error(
          '[ERROR] 당첨 번호는 1부터 45까지의 숫자로 구성되어야 합니다.',
        );
      case this.isNotLottoLength(winningNumbers):
        throw new Error(
          '[ERROR] 당첨 번호의 개수는 로또 번호의 개수와 동일해야 합니다.',
        );
    }
  }

  hasNotNumber(winningNumbers) {
    return winningNumbers.some(winningNumber => !/^\d+$/.test(winningNumber));
  }

  hasOutOfBoundNumber(winningNumbers) {
    return winningNumbers.some(
      winningNumber =>
        parseInt(winningNumber, 10) < 1 || parseInt(winningNumber, 10) > 45,
    );
  }

  hasDuplicate(winningNumbers) {
    return winningNumbers.length !== new Set(winningNumbers).size;
  }

  isNotLottoLength(winningNumbers) {
    return winningNumbers.length !== 6;
  }

  initBonusNumber(bonusNumberInput) {
    this.validateBonusNumber(bonusNumberInput);
    this.#winningNumbers.push(parseInt(bonusNumberInput, 10));
  }

  validateBonusNumber(bonusNumberInput) {
    if (this.isNotNumber(bonusNumberInput)) {
      throw new Error(
        '[ERROR] 보너스 번호에 숫자가 아닌 문자가 입력되었습니다.',
      );
    }

    if (this.isOutOfBound(parseInt(bonusNumberInput, 10))) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45까지의 숫자여야 합니다.');
    }

    if (this.isDuplicateWinningNumber(parseInt(bonusNumberInput, 10))) {
      throw new Error(
        '[ERROR] 보너스 번호는 이전에 입력한 당첨 번호에 없는 숫자여야 합니다.',
      );
    }
  }

  isNotNumber(numberInput) {
    return !/^\d$/.test(numberInput);
  }

  isOutOfBound(number) {
    return number < 1 || number > 45;
  }

  isDuplicateWinningNumber(number) {
    return this.#winningNumbers.includes(number);
  }

  get lottos() {
    return this.#lottos;
  }
}

module.exports = LottoManager;
