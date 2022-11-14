const { Random } = require("@woowacourse/mission-utils");

function buyLotto(Count) {
  const boughtLotto = [];
  for (let i = 0; i < Count; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    boughtLotto.push(numbers);
  }
  return boughtLotto;
}

module.exports = buyLotto;
