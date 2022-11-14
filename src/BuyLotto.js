const { Random } = require("@woowacourse/mission-utils");
const ascendingSort = require("./util/AscendingSort");

function buyLotto(Count) {
  const boughtLotto = [];
  for (let i = 0; i < Count; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    boughtLotto.push(ascendingSort(numbers));
  }
  return boughtLotto;
}

module.exports = buyLotto;
