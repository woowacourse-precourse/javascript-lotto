const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const LOTTO = 1000;

class App {
  play() {
    lottoPriceInput();
  }
}

const lottoPriceInput = () => {
  MissionUtils.Console.readLine('구입금액을 입력해 주세요. \n', (answer) => {
    lottoPriceValidate(+answer);
    const lottoCnt = answer / LOTTO;
    const lottoArr = createLottoArr(lottoCnt);
    winLottoNum();
    bonusLottoNum();
  });

}

const lottoPriceValidate = (lottoprice) => {
  if ((lottoprice % LOTTO) !== 0) {
    throw new Error("[ERROR] 올바른 금액을 입력 하세요.");
  }
}


const createLottoArr = (lottocnt) => {
  const lottoArr = [];
  MissionUtils.Console.print(`\n${lottocnt}개를 구매했습니다.`);
  for (let i = 0; i < lottocnt; i++){
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lottoNum = new Lotto(numbers);
    lottoArr.push(lottoNum.getArr());
  }
  return lottoArr;
}


const winLottoNum = () => {
  MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.', (answer) => {
    winLottoValidate(answer);
    bonusLottoNum();
  })
}

const winLottoValidate = (winNumber) => {
  if (winNumber.split(",").length !== 6) {
    throw new Error("[ERROR] 올바른 당첨 번호를 입력 하세요.");
  }
  for (let num of winNumber) {
    if (+num > 45 || +num < 1) {
      throw new Error("[ERROR] 올바른 당첨 번호를 입력 하세요.");
    }
  }
}

const bonusLottoNum = () => {
  MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.', (answer) => {
    bonusLottoValidate(answer);
  })
}

const bonusLottoValidate = (bonusNumber) => {
  if (bonusNumber.length > 1) {
      throw new Error("[ERROR] 올바른 보너스 번호를 입력 하세요.");
  }
  if (+bonusNumber > 45 || +bonusNumber < 1) {
      throw new Error("[ERROR] 올바른 보너스 번호를 입력 하세요.");
  }
  if (!Number.isNaN(bonusNumber)) {
      throw new Error("[ERROR] 올바른 보너스 번호를 입력 하세요.");
  }
} 

const app = new App();
app.play();


module.exports = App;


