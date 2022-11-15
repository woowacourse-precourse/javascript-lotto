const Message = require('../constants/Message');

class staticLotto {
  #purchasePrice;
  #lottoList;
  #winLotto;
  #bonusNumber;
  #rank;

  setPurchasePrice (price) {
    this.#purchasePrice = price;
  }

  setLottoList (list) {
    this.#lottoList = list;
  }

  setWinLotto (num) {
    this.#winLotto = num;
  }

  setBonusNumber (number) {
    this.#bonusNumber = Number(number);
  }

  getLottoList () {
    return this.#lottoList;
  }

  getWinLotto () {
    return this.#winLotto;
  }

  getBonusNumber () {
    return this.#bonusNumber;
  }

  getSameNumberCount () {
    const totalList = this.#lottoList;
    const winNumbers = this.#winLotto?.getNumbers();
    const rank = {
      rankOne: 0,
      rankTwo: 0,
      rankThree: 0,
      rankFour: 0,
      rankFive: 0,
    };

    totalList.forEach((lotto) => {
      const correct = Message.LOTTO_LENGTH * 2 - new Set([...winNumbers, ...lotto]).size;

      if (correct === 6) return (rank.rankOne += 1);
      if (correct === 5 && lotto.includes(this.#bonusNumber)) return (rank.rankTwo += 1);
      if (correct === 5) return (rank.rankThree += 1);

      if (correct === 4) return (rank.rankFour += 1);
      if (correct === 3) return (rank.rankFive += 1);
    });

    this.#rank = rank;
  }

  getRank () {
    return this.#rank;
  }

  setTotalRevenue() {
    const rank = this.#rank;
    const revenue = (
      ((5000 * rank.rankFive +
        50000 * rank.rankFour +
        1500000 * rank.rankThree +
        30000000 * rank.rankTwo +
        2000000000 * rank.rankOne) /
        this.#purchasePrice) *
      100
    ).toFixed(1);
    return revenue;
  }

}

module.exports = staticLotto;
