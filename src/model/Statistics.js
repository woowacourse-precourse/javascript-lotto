const { RANKING, RANKING_MATCH_BONUS } = require('../constant/Winnings');

class Statistics {
  #lottoNumber;
  #bonusNumber;
  #lottoTickets;
  #rankingMap;

  constructor(fullLotto, lottoTickets) {
    [this.#lottoNumber, this.#bonusNumber] = fullLotto;
    this.#lottoTickets = lottoTickets;
  }

  /**
   * 몇개가 당첨되었는지
   * @returns array 일치하는 로또 개수가 배열형태
   * 로 반환 [ [ 1, false ], [ 0, false ] ]
   */

  #countWinning() {
    return this.#lottoTickets.map((ticket) => {
      const countWinning = this.#countMatchNumbers(this.#lottoNumber, ticket);
      const countBonus =
        RANKING_MATCH_BONUS === countWinning
          ? this.#includeElementInList(this.#bonusNumber, ticket)
          : false;
      return [countWinning, countBonus];
    });
  }

  /**
   * 서로 다른 2개의 배열이 일치하는 요소의 개수. 단 요소는 숫자형태의 문자열.
   * @param {Array} answer 첫번째 검사할 배열 요소
   * @param {Array} quest 두번째 배열 요소
   * @returns 일치하는 요소의 개수
   */

  #countMatchNumbers(answer, quest) {
    return answer.filter((number) => quest.includes(Number(number))).length;
  }

  /**
   * 배열 속에 특정 요소가 있는지 확인한다. 단 요소는 모두 숫자형태의 문자열이다.
   * @param {String} answer
   * @param {Array} quest
   * @returns 특정요소가 있는지 불린 값으로 반환
   */

  #includeElementInList(answer, quest) {
    return quest.includes(Number(answer)) ? true : false;
  }
}

module.exports = Statistics;
