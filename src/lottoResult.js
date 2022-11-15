const TITLE_MESSAGE = '당첨 통계\n---\n';
const UNIT = { BALL: '개', MONEY: '원' };
const LOTTO_KEYWORDS = ['30', '40', '50', '51', '60'];
const RESULT_MAP = new Map();
RESULT_MAP.set('30', { count: 3, money: 5000, word: `${UNIT.BALL} 일치` })
  .set('40', {
    count: 4,
    money: 50000,
    word: `${UNIT.BALL} 일치`,
  })
  .set('50', { count: 5, money: 1500000, word: `${UNIT.BALL} 일치` })
  .set('51', { count: 5, money: 30000000, word: `${UNIT.BALL} 일치, 보너스 볼 일치` })
  .set('60', { count: 6, money: 2000000000, word: `${UNIT.BALL} 일치` });
const RATE_MESSAGE = { START: '총 수익률은 ', END: '%입니다.' };

function getRate(myMoney, winMoney) {
  return ((winMoney / myMoney) * 100).toFixed(1);
}

function getRateMessage(myMoney, winMoney) {
  return `${RATE_MESSAGE.START}${getRate(myMoney, winMoney)}${RATE_MESSAGE.END}`;
}

// 로또 당첨으로 번 돈을 구한다
function countWinMoney(myLottoResult) {
  let winMoney = 0;
  myLottoResult.forEach((winCount, lottoMoney) => {
    winMoney += RESULT_MAP.get(lottoMoney).money * winCount;
  });
  return winMoney;
}

// 로또 당첨 결과를 출력한다
function getLottoResultMessage(myLottoResult) {
  return LOTTO_KEYWORDS.reduce(function (message, keyword) {
    const myLottoCount = myLottoResult.get(keyword);
    const lottoMessage = RESULT_MAP.get(keyword);
    return (
      message +
      `${lottoMessage.count}${lottoMessage.word} (${lottoMessage.money.toLocaleString()}${
        UNIT.MONEY
      }) - ${myLottoCount}${UNIT.BALL}\n`
    );
  }, '');
}

// 구매한 로또 한 개로 로또와 보너스 맞춘 개수를 세고 그 결과와 금액을 리턴한다 ('30' -> 로또 3개, 보너스 0개 당첨)
function countMatchLotto(lotto, bonus, myLotto) {
  const lottoMatch = myLotto.filter((number) => lotto.includes(number)).length.toString();
  const bonusMatch = myLotto.includes(bonus) ? '1' : '0';
  const keyword = lottoMatch + bonusMatch;
  let money = 0;
  if (RESULT_MAP.has(keyword)) {
    money = RESULT_MAP.get(keyword).money;
  }
  return { keyword, money };
}

// 구입한 로또 전체를 확인한다
function checkAllLotto(lotto, bonus, myLottos) {
  const resultCountMap = new Map();
  LOTTO_KEYWORDS.forEach((keyword) => resultCountMap.set(keyword, 0));
  myLottos.forEach((myLotto) => {
    const result = countMatchLotto(lotto, bonus, myLotto);
    if (resultCountMap.has(result.keyword)) {
      resultCountMap.set(result.keyword, resultCountMap.get(result.keyword) + 1);
    }
  });
  return resultCountMap;
}

const lottoResult = {
  getLottoResult(cost, lotto, bonus, myLottos) {
    let message = TITLE_MESSAGE; // 제목
    const myLottoResult = checkAllLotto(lotto, bonus, myLottos);
    message += getLottoResultMessage(myLottoResult); // 로또 결과
    const winMoney = countWinMoney(myLottoResult);
    message += getRateMessage(cost, winMoney); // 수익률
    return message;
  },
};

module.exports = lottoResult;
