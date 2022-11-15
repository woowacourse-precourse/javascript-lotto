const LOTTO = {
  PRICE : 1000,
  COUNT : 6,
  MIN : 1,
  MAX : 45
}
const REWARD = {
  FIRST_PLACE : 2000000000,
  SECOND_PLACE : 30000000,
  THIRD_PLACE : 1500000,
  FOURTH_PLACE : 50000,
  FIFTH_PLACE : 5000
}
const INPUT_MESSAGE = {
  MONEY : '구입금액을 입력해 주세요 : ',
  WINNING_NUMBER : '\n당첨 번호를 입력해 주세요 : ',
  BONUS_NUMBER : '\n보너스 번호를 입력해 주세요 : '
}
const ERROR_MESSAGE = {
  WINNING_NUMBER_DUPLICATED : "[ERROR] 당첨 번호는 중복되지 않아야합니다.",
  WINNING_NUMBER_OUT_OF_RANGE : "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.",
  WINNING_NUMBER_MISMATCH : "[ERROR] 당첨 번호는 6개여야 합니다.",
  BONUS_NUMBER_OUT_OF_RANGE :"[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATED :"[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야합니다.",
  MONEY_OUT_OF_RANGE :'[ERROR] 구입금액은 1000원 단위여야 합니다',
}
const RESULT_MESSAGE = {
  HOW_MANY_TICKET : function(count){
    return "\n" + count + "개를 구매했습니다.";
  },
  WIN_LIST_TITLE: '\n당첨 통계\n---',
  WIN_FIRST_PLACE : function(count){
    return '6개 일치 (2,000,000,000원) - ' + count + '개'
  },
  WIN_SECOND_PLACE : function(count){
    return '5개 일치, 보너스 볼 일치 (30,000,000원) - ' + count + '개'
  },
  WIN_THIRD_PLACE : function(count){
    return '5개 일치 (1,500,000원) - ' + count + '개';
  },
  WIN_FOURTH_PLACE : function(count){
    return '4개 일치 (50,000원) - ' + count + '개';
  },
  WIN_FIFTH_PLACE : function(count){
    return '3개 일치 (5,000원) - ' + count + '개';
  },
  RATE_OF_RETURN : function(num){
    return '총 수익률은 ' + num.toFixed(1) + '%입니다.';
  },
}
module.exports = {
  LOTTO,
  REWARD,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
}