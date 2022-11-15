const INPUT_MESSAGE = {
    Money : '구입금액을 입력해 주세요.',
    PrintWinningNum : '당첨 번호를 입력해 주세요.',
    PrintBonusNum : '보너스 번호를 입력해 주세요.',
    ResultStatistics : '\n당첨 통계\n---'
  };
  
  const ERROR_MESSAGE = {
    lottoRangeError : "[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.",
    lottoNumError: "[ERROR] 로또 번호는 6개여야 합니다.",
    overlapNumError: "[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.",
    overlapBonusNumError : "[ERROR] 보너스 번호로 당첨 번호와 중복된 숫자를 입력할 수 없습니다.",
    moneyError: "[ERROR] 1,000원 단위의 금액이어야 합니다.",
    inputError : "[ERROR] 숫자와 쉼표를 제외한 문자는 입력할 수 없습니다."
  };
  
  const MONEY = {
    FristPlaceMoney : '2000000000',
    SecondPlaceMoney : '30000000',
    ThirdPlaceMoney : '1500000',
    FourthPlaceMoney : '50000',
    FifthPlaceMoney : '5000',

    LottoPrice : 1000
  };
  
module.exports = { INPUT_MESSAGE, MONEY, ERROR_MESSAGE };