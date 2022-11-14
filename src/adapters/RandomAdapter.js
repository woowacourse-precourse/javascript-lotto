const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 지정한 범위 내의 임의의 숫자를 반환하는 클래스
 * - `pickNumberInRange`: 범위 내의 임의의 숫자를 반환하는 메서드
 * - `pickNumberInList`: 숫자 배열 내의 임의의 숫자 반환하는 메서드
 * - `pickUniqueNumbersInRange`: 범위 내의 지정한 수 만큼 서로 다른 임의의 숫자 배열을 반환
 * @typedef Random
 * @property {(startInclusive: number, endInclusive: number) => number} pickNumberInRange
 * @property {(array: number[]) => number} pickNumberInList
 * @property {(startInclusive: number, endInclusive: number, count: number) => number[]}
 * pickUniqueNumbersInRange
 */

class RandomAdapter {
  #adapter;

  /**
   * @param {Random} [random=MissionUtils.Random]
   */
  constructor(random = MissionUtils.Random) {
    this.#adapter = random;
  }

  pickNumberInRange(startInclusive, endInclusive) {
    return this.#adapter.pickNumberInRange(startInclusive, endInclusive);
  }

  pickNumberInList(array) {
    return this.#adapter.pickNumberInList(array);
  }

  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return this.#adapter.pickUniqueNumbersInRange(
      startInclusive,
      endInclusive,
      count,
    );
  }

  shuffle(array) {
    return this.#adapter.shuffle(array);
  }
}

module.exports = RandomAdapter;
