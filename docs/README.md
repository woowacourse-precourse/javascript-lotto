# 구현 기능 목록

## 입력
- `buyLotto`: 로또 구매 금액 입력 받는 기능
- `inputLottoNumbers`: 당첨 번호 입력 받는 기능
- `inputBonusNumber`: 보너스 번호 입력 받는 기능

## 출력
- `printLottoNumbers`: 발행한 로또 수량 및 번호 출력
    - 로또 번호 오름차순 정렬
- `printWinningHistory`: 당첨 내역 출력
    - 일치하는 번호 개수 (금액) - 당첨 횟수
- `printYield`: 수익률 출력
    - 소수점 둘째 자리에서 반올림

## 유효성 검사
- `isVaildAmount`: 입력한 금액이 유효한 금액인지 검사하는 기능
    - 1000원으로 나누어 떨어지지 않는 경우 에러
- `isVaildNumver`: 입력한 숫자가 유효한 숫자인지 검사하는 기능
    - 1부터 45 사이의 숫자 아닐 경우 에러