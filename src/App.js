const MissionUtils = require("@woowacourse/mission-utils");
const BuyLotto = require("./modules/BuyLotto");
const UserLotto = require("./modules/UserLotto");
const AnswerLotto = require("./modules/AnswerLotto");
class App {
  play() {
    //로또 구입 금액을 입력하면 해당하는 로또를 발행한다.
    let nTime = 0;
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (price) => {
      const BUYLOTTO = new BuyLotto(price);
      nTime = BUYLOTTO.nTimes();
      MissionUtils.Console.print(`${nTime}개를 구매했습니다.`);
    });
    //로또 번호 1~45까지의 서로 다른 임의의 수 6자리를 뽑는다.
    const USERLOTTO = new UserLotto();
    const lottoArr = USERLOTTO.haveLotto(nTime);
    USERLOTTO.LottoPrint();

    // 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
    const ANSWERLOTTO = new AnswerLotto();
    const answer = ANSWERLOTTO.haveAnswer();
    const bonus = ANSWERLOTTO.bonusAnswer();
    // 로또 게임을 종료한다.
    MissionUtils.Console.close();
  }
}

module.exports = App;
