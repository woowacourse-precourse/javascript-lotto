# 구현 기능 목록

## BuyLotto 클래스
- `inputAmount`: 로또 구매 금액 입력 받는 기능
- `getNumberOfLotto`: 로또 구매 개수 구하는 기능
- `printNumberOfLotto`: 로또 구매 개수 출력하는 기능
- `createRandomLotto`: 랜덤 로또 번호 생성하는 기능
    - 랜덤으로 생성된 로또 번호(자동) 오름차순 정렬
- `printRandomLotto`: 랜덤 로또 번호 출력하는 기능
- `inputLottoNumbers`: 당첨 번호 입력 받는 기능
- `inputBonusNumber`: 보너스 번호 입력 받는 기능

## Lotto 클래스
**예외 처리**  
- `isVaildAmount`: 입력한 금액이 유효한 금액인지 검사하는 기능
    - 1000원으로 나누어 떨어지지 않는 경우 에러
- `validate`: 입력한 로또 번호가 유효한 번호인지 검사하는 기능
    - 숫자가 아닐 경우 에러(isNaN)
    - 6개의 숫자가 아닐 경우 에러(number.length)
    - 숫자가 중복될 경우 에러(isDuplicated)
    - 1부터 45 사이의 숫자가 아닐 경우 에러(isInRange)
- `validateBounus`: 입력한 보너스 번호가 유효한 번호인지 검사하는 기능
    - 보너스 번호가 로또 번호 6개와 중복되는 경우 에러(numbers.includes(bonus))
    - 숫자가 아닐 경우 에러(isNaN)
    - 1부터 45 사이의 숫자가 아닐 경우 에러(isInRange)

## Winning 클래스
- `printWinningAnnouncement`: 당첨 통계 안내 문구 출력하는 기능
- `calculateCorrectCount`: 랜덤 로또 중 당첨 번호와 몇 개 일치하는지 계산하는 기능
- `checkBonus`: 5개가 일치했을 때 보너스 번호가 일치하는지 체크하는 기능
- `calculateGradeCount`: 일치 개수에 따라 등수마다 몇 개가 당첨됐는지 계산하는 기능
- `printWinningHistory`: 당첨 내역 출력하는 기능
- `calculateYield`: 수익률 계산하는 기능
    - 소수점 둘째 자리에서 반올림
- `printYield`: 수익률 출력하는 기능