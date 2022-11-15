const { Console } = require("@woowacourse/mission-utils");

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

class App {
  play() {}
}

const app = new App();
app.play();

module.exports = App;
