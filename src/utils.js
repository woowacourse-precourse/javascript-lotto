const { Console, Random } = require("@woowacourse/mission-utils");

const getRandomNum = () => {
  const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
  getRandomNumAscendingSort(randomArr);
  return randomArr;
};

const getRandomNumAscendingSort = (randomArr) => {
  randomArr.sort(function (prev, next) {
    return prev - next;
  });
};

const lottoQuantity = (money) => {
  const lottoQuantity = parseInt(money / 1000);
  return displayLotto(lottoQuantity);
};

const displayLotto = (lottoQuantity) => {
  const numbers = [];
  Console.print("\n" + lottoQuantity + "개를 구매했습니다.");
  for (let i = 0; i < lottoQuantity; i++) {
    numbers.push(getRandomNum());
  }
  numbers.forEach((number) => Console.print(`[${number.join(", ")}]`));
  return numbers;
};

module.exports = { lottoQuantity };
