###JAVASCRIPT-LOTTO

##[기능 요구 사항]
---
 1. play() 프로그램 시작
 2. constructor() 안에 설정
    [purchase, ranking, random, lottoNumber,winningNumber,bonusNumber]
 3. inputPurchaseMoney() / 로또 구입 금액 입력받기 ->winningLottoNumber()
    --> 예외처리 3번
 4. winningLottoNumber(), bonusLottoNumber() / 당첨 번호 입력, 보너스 번호 입력
    --> 예외처리 4번
 5. randomPurchaseLotto() / 구매 개수 출력, 랜덤 번호(setRandomNumberLotto() 함수 사용), 오름차순으로 정렬
    --> 예외처리 5번
 6. printLottoNumber() / 랜덤 함수 [숫자1, 숫자2 ...] 형태로 출력
 7. calculateLotto() / 당첨 별로 배열에 저장
 7-1. Lotto.js calculate() / 당첨 계산
 8. resultLotto(rank), resultRate(rank) / 당첨 출력, 수익률 계산

예외처리
 3. validatePurchase 구입금액 예외 처리 ->App.js 내
    [구입금액 단위 확인]
 4. validateWinning 당첨 번호 예외 처리, validateBonus 보너스 번호 예외처리
    [길이(6) 확인, 숫자중복 확인, 1-45사이 확인]
 5. Lotto.js에 랜덤 사용자 로또 예외 처리
    [길이(6) 확인, 숫자중복 확인, 1-45사이 확인]
---
