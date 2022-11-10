const { Console } = require('@woowacourse/mission-utils');
const getLottoNum = require('./getLottoNum');

function giveUserLottoNum() {
  Console.readLine('구입금액을 입력해 주세요.', (answer) => {
    let numberOfLotto = answer % 1000 ? 0 : answer / 1000;
    if (!numberOfLotto) throw '돈 안 맞음 적어';
    console.log(`${numberOfLotto}개를 구매했습니다.`);
    while (numberOfLotto > 0) {
      console.log(getLottoNum());
      numberOfLotto -= 1;
    }
  });
}

module.exports = giveUserLottoNum;
