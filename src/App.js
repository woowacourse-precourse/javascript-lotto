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
    winLottoNum(lottoArr);
  });

}

const lottoPriceValidate = (lottoPrice) => {
  if ((lottoPrice % LOTTO) !== 0) {
    throw new Error("[ERROR] 올바른 금액을 입력 하세요.");
  }
}


const createLottoArr = (lottoCnt) => {
  const lottoArr = [];
  MissionUtils.Console.print(`\n${lottoCnt}개를 구매했습니다.`);
  for (let i = 0; i < lottoCnt; i++){
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lottoNum = new Lotto(numbers);
    lottoArr.push(lottoNum.getArr());
  }
  return lottoArr;
}


const winLottoNum = (lottoArr) => {
  MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.', (answer) => {
    winLottoValidate(answer);
    bonusLottoNum(lottoArr);
    
  })
}

const winLottoValidate = (winNumber) => {
  const text = /[^0-9,]/;
  if (text.test(winNumber)) {
    throw new Error("[ERROR] 올바른 당첨 번호를 입력 하세요.");
  }
  if (winNumber.split(",").join('').trim().length !== 6) {
    throw new Error("[ERROR] 올바른 당첨 번호를 입력 하세요.");
  }

  for (let num of winNumber) {
    if (+num > 45 || +num < 1) {
      throw new Error("[ERROR] 올바른 당첨 번호를 입력 하세요.");
    }
  }
}

const bonusLottoNum = (lottoArr) => {
  MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.', (answer) => {
    bonusLottoValidate(answer);
    calLotto(lottoArr);

  })
}

const bonusLottoValidate = (bonusNumber) => {
  if (bonusNumber.length > 1) {
      throw new Error("[ERROR] 올바른 보너스 번호를 입력 하세요.");
  }
  if (+bonusNumber > 45 || +bonusNumber < 1) {
      throw new Error("[ERROR] 올바른 보너스 번호를 입력 하세요.");
  }
  if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 올바른 보너스 번호를 입력 하세요.");
  }
} 


const calLotto = (lottoArr) => {
  MissionUtils.Console.print("당첨통계");
}

const app = new App();
app.play();


module.exports = App;


