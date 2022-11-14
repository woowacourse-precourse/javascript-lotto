const TITLE_MESSAGE = '당첨 통계\n---\n';
const UNIT = { BALL: '개', MONEY: '원' };
const RESULT_MAP = new Map();
const LOTTO_KEYWORDS = ['30', '40', '50', '51', '60'];
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

function getRateMessage(myMoney, winMoney) {
  return `${RATE_MESSAGE.START}${((winMoney / myMoney) * 100).toFixed(1)}${RATE_MESSAGE.END}`;
}

function countWinMoney(myLottoResult) {
  let winMoney = 0;
  myLottoResult.forEach((winCount, lottoMoney) => {
    winMoney += RESULT_MAP.get(lottoMoney).money * winCount;
  });
  return winMoney;
}

function getLottoResultMessage(myLottoResult) {
  let message = '';
  LOTTO_KEYWORDS.forEach((keyword) => {
    const myLottoCount = myLottoResult.get(keyword);
    const lottoMessage = RESULT_MAP.get(keyword);
    message += `${lottoMessage.count}${lottoMessage.word} (${lottoMessage.money.toLocaleString()}${
      UNIT.MONEY
    }) - ${myLottoCount}${UNIT.BALL}\n`;
  });
  return message;
}

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
    let message = TITLE_MESSAGE;
    const myLottoResult = checkAllLotto(lotto, bonus, myLottos);
    message += getLottoResultMessage(myLottoResult);
    const winMoney = countWinMoney(myLottoResult);
    message += getRateMessage(cost, winMoney);
    return message;
  },
};

module.exports = lottoResult;
