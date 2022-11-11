const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  play() {
    getPurchaseAmount();
  }
}

const getHowManyLottos = (money) => {
  const numberOfTicket = money / 1000;

  Console.print(`${numberOfTicket}개를 구매했습니다.`);

  const lottos = [];

  while (lottos.length < numberOfTicket) {
    lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  return lottos;
};

// 아래는 구입금액, 당첨번호 입력받기 관련 함수들

const getWinningNumbers = () => {
  Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
    const lotto = new Lotto(makeSixNumbersArr(numbers));
  });
};

const makeSixNumbersArr = (str) => {
  return str.split(',');
};

const getPurchaseAmount = () => {
  Console.readLine('구입금액을 입력해주세요.', (num) => {
    if (isDivisibleBy1000(num)) {
      getHowManyLottos(num);
    } else {
      errorMessage();
    }
  });
};

const isDivisibleBy1000 = (num) => {
  if (num % 1000 === 0) {
    return true;
  }
  return false;
};

const errorMessage = () => {
  throw new Error('[ERROR] 임시 에러메세지');
};

module.exports = App;
