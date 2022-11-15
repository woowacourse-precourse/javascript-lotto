const {Random} = require("@woowacourse/mission-utils");

const makeLottoNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

const sortLottoNumberInAscendignOrder= (lottoNumber)=> {
  return lottoNumber.sort((a, b) => a - b);
}

const getMatchedinWinningNumberCount=(lotto, winningLotto) => {
  return lotto.reduce((sum, number) => {
    winningLotto.includes(number) ? (sum += 1) : null;
    return sum;
  }, 0);
}

const hasBounsNumber = (lotto, bounsNumber) => {
  return lotto.includes(bounsNumber);
};

const getTotalReward = (rankingResult)=>{
  return rankingResult.reduce((sum, value) => {
    sum += value.reward * value.amount;
    return sum;
  }, 0);
}

const getResultRanking = (value)=>{
  if (value.ranking== "SECOND"){
    return `${
      value.mathcedCount
    }개 일치, 보너스 볼 일치 (${changeNumberWithCommas(
      "" + value.reward
    )}원) - ${value.amount}개`;
  }
  return `${value.mathcedCount}개 일치 (${changeNumberWithCommas(
    "" + value.reward
  )}원) - ${value.amount}개`;
}



const getEarningsRate = (rankingResult, lottoPayment) => {
  const totalReward = getTotalReward(rankingResult);
  const earningsRate = ((totalReward / lottoPayment) * 100).toFixed(1)
  return changeNumberWithCommas(earningsRate);
};

const changeNumberWithCommas = (string) => {
  return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = {
  makeLottoNumber,
  sortLottoNumberInAscendignOrder,
  getMatchedinWinningNumberCount,
  hasBounsNumber,
  getResultRanking,
  getEarningsRate,
};
