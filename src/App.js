const MissionUtils = require("@woowacourse/mission-utils");

const BuyLotto = require("./modules/BuyLotto");
const UserLotto = require("./modules/UserLotto");
const AnswerLotto = require("./modules/AnswerLotto");
const CorrectLotto = require("./modules/CorrectLotto");
const Award = require("./modules/Award");
const Print = require("./modules/Print");
const Margin = require("./modules/Margin");

class App {
  play() {
    //로또 구입 금액을 입력하면 해당하는 로또를 발행한다.
    const BUYLOTTO = new BuyLotto();
    const nTime = BUYLOTTO.nTimes();
    const price = BUYLOTTO.havePrice();

    //로또 번호 1~45까지의 서로 다른 임의의 수 6자리를 뽑는다.
    const USERLOTTO = new UserLotto();
    const lottoArr = USERLOTTO.haveLotto(nTime);
    USERLOTTO.LottoPrint();

    // 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
    const ANSWERLOTTO = new AnswerLotto();
    const answer = ANSWERLOTTO.haveAnswer();
    const bonus = ANSWERLOTTO.bonusAnswer();

    // 로또 번호와 당첨 번호를 비교한다.
    const CORRECT = new CorrectLotto(lottoArr, answer, bonus);
    const correctArr = CORRECT.haveCorrect();

    // 몇개 일치하는 지에 따라 상금을 정한다.
    const AWARD = new Award(correctArr, CORRECT.haveBonus());
    const PROFIT = AWARD.haveAward();

    // 상금 개수와 일치 개수에 따라 출력한다.
    const PRINT = new Print();
    PRINT.haveObject(correctArr);
    PRINT.doPrint();

    //수익률 계산
    const MARGIN = new Margin();
    MARGIN.haveMargin(price, PROFIT);

    //종료
    return MissionUtils.Console.close();
  }
}

module.exports = App;
