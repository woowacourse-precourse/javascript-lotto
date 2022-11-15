const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const LOTTO = 1000;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;
const MONEY = [0, 0, 0, 5000, 50000, 1500000, 30000000, 2000000000];

class App {
  play() {
    lottoPriceInput();
  }
}

const lottoPriceInput = () => {
  let lottoCnt;
  MissionUtils.Console.readLine('구입금액을 입력해 주세요. \n', (answer) => {
    lottoPriceValidate(+answer);
    lottoCnt = answer / LOTTO;
    const lottoArr = createLottoArr(lottoCnt);
    winLottoNum(lottoArr, +answer);
  });
}

const lottoPriceValidate = (lottoPrice) => {
  if (+String(lottoPrice) < 1) {
    throw new Error("[ERROR] 숫자를 입력하세요 (공백 금지)");
  }
  if (isNaN(lottoPrice)) {
    throw new Error("[ERROR] 숫자를 입력하세요");
  }
  if ((lottoPrice % LOTTO) !== 0) {
    throw new Error("[ERROR] 올바른 금액을 입력 하세요.");
  }
  
}


const createLottoArr = (lottoCnt) => {
  const lottoArr = [];
  MissionUtils.Console.print(`${lottoCnt}개를 구매했습니다.`);
  for (let idx = 0; idx < lottoCnt; idx++){
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoArr.push(numbers.sort((a, b) => {
      return a - b;
    }));
    MissionUtils.Console.print(lottoArr[idx]);
  }
  return lottoArr;
}


const winLottoNum = (lottoArr, lottoPrice) => {
  MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (tmpAns) => {
    const ans = tmpAns.split(",");
    let answer = new Lotto(ans);
    answer = answer.getArr();
    bonusLottoNum(lottoArr, answer, lottoPrice);
    
  })
}

const bonusLottoNum = (lottoArr, winNumber, lottoPrice) => {
  MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (answer) => {
    bonusLottoValidate(winNumber, answer);
    const winCnt = calLottoPrint(lottoArr, winNumber, answer);
    const sum = calMoney(winCnt);
    const calAns = Math.round(((sum / lottoPrice) * 100) * 10) / 10;
    MissionUtils.Console.print(`총 수익률은 ${calAns}%입니다.`);
    MissionUtils.Console.close();
  })

}

const bonusLottoValidate = (winNumber, bonusNumber) => {
  if (winNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 당첨 번호와 중복됩니다.");
  }
  if (bonusNumber.length < 1) {
      throw new Error("[ERROR] 아무것도 입력하지 않으셨습니다.");
  }
  if (+bonusNumber > 45 || +bonusNumber < 1) {
      throw new Error("[ERROR] 로또번호는 1이상 45이하여야 합니다.");
  }
  if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자를 입력하세요.");
  }
} 


const calLottoPrint = (lottoArr, winNumber, bonusNumber) => {
  MissionUtils.Console.print("\n당첨통계");
  MissionUtils.Console.print("---\n");
  const winRank = calLotto(lottoArr, winNumber);
  const winCnt = rankCnt(winRank, bonusNumber, lottoArr);
  MissionUtils.Console.print(`${THREE}개 일치 (5,000원) - ${winCnt[THREE]}개`);
  MissionUtils.Console.print(`${FOUR}개 일치 (50,000원) - ${winCnt[FOUR]}개`); 
  MissionUtils.Console.print(`${FIVE}개 일치 (1,500,000원) - ${winCnt[FIVE]}개`); 
  MissionUtils.Console.print(`${FIVE}개 일치, 보너스 볼 일치 (30,000,000원) - ${winCnt[FIVE + 1]}개`); 
  MissionUtils.Console.print(`${SIX}개 일치 (2,000,000,000원) - ${winCnt[SIX + 1]}개`); 
  return winCnt;
  
}

const calLotto = (lottoArr, winNumber) => {
  let winCnt = new Array(lottoArr.length).fill(0);
  const winNum = winNumber.map(num => +num);
  for (let idx = 0; idx < lottoArr.length; idx++){
    winCnt[idx] = detailCalLotto(lottoArr[idx], winNum);
  }  
  return winCnt;
}

const detailCalLotto = (lottoNum, ansNum) => {
  let cnt = 0;
  lottoNum.map((num) => {
    cnt += ansNum.includes(num) ? 1 : 0;
  })
  return cnt;
}

const rankCnt = (winRank, bonusNumber, lottoArr) => {
  const cnt = [0, 0, 0, 0, 0, 0, 0, 0];
  for (let idx = 0; idx < winRank.length; idx++) {
    switch (winRank[idx]) {
      case THREE:
        cnt[THREE] += 1;
        break;
      case FOUR:
        cnt[FOUR] += 1;
        break;
      case FIVE:
        if (lottoArr[idx].includes(+bonusNumber)) {
          cnt[FIVE + 1] += 1;
          break;
        } 
        cnt[FIVE] += 1;
        break;
      case SIX:
        cnt[SIX+1] += 1;
    }
  }
  return cnt;
}

const calMoney = (winCnt) => {
  let sum = 0;
  winCnt.map((num, idx) => {
    sum += MONEY[idx] * num;
  })
  return sum;
}

const app = new App();
app.play();


module.exports = App;


