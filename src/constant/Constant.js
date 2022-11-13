const MESSAGES = {
  INPUTPURCHASEAMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASED: '를 구매했습니다.\n',
  INPUTWINNINGNUMBER: '당첨 번호를 입력해 주세요.\n',
  INPUTBONUSNUMBER: '보너스 번호를 입력해 주세요.\n',
};

const REQUIREMENT = {
  LENGTH: 6,
  MIN: 1,
  MAX: 45,
};

const ERROR = {
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  NaN: "[ERROR] 로또 번호는 숫자여야 합니다.",
  RANGE: "[ERROR] 로또 번호의 범위는 1~45까지입니다.",
  DUPLICATE: "[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.",
};

function getProfitMessage (profit) {
  return `총 수익률은 ${profit}%입니다.\n`;
}

function getStatisticsMessage ({ three, four, five, bonus, six }) {
  return `당첨 통계\n---\n3개 일치 (5,000원) - ${three}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonus}개\n6개 일치 (2,000,000,000원) - ${six}개\n`;
  
}


module.exports = { MESSAGES, REQUIREMENT, ERROR, getProfitMessage, getStatisticsMessage };
