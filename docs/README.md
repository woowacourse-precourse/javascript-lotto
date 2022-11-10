# 로또 게임

## 규칙

- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

## 기능 목록

## App

### 필드

- lottoAmount: 로또 갯수
- lottos: 구입한 로또 번호들
- winningLotteryNumbers: 당점번호
- bonusNumber: 보너스 번호
- result: 당첨 결과
- profit: 수익률

### 메서드

- play: 게임 시작
- validate: 구입 금액이 1,000원 단위가 아닌 경우
- makeLottoNumbers: 로또 번호 생성
- printPurchaseList: 구매 내역 출력
- printResult: 결과 출력
- printProfit: 수익률 출력
- getProfit: 수익률 구하기
- getWinningLotteryNumbers: 당첨번호 입력 받기
- getBonusNumber: 보너스 숫자 입력 받기
- getLottoAmount: 구입한 로또 개수 입력 받기
- compareNumbers: 당첨 번호와 로또 번호 비교하기

## Lotto

### 필드

- #numbers: 로또 번호

### 메서드

- validate: 로또 번호가 잘못된 경우
- show: 오름차순 배열로 반환

## 커밋 순서

- [x] 로또 만들기

  - [x] 예외 처리하기
    - [x] numbers.length가 6이 아닐 경우
    - [x] numbers가 배열이 아닌 경우
  - [x] #numbers 오름차순으로 리턴

- [x] 입력하기

  - [x] 구입금액
  - [x] 당첨 번호
  - [x] 보너스 번호

- [x] 출력하기

  - [x] 구입한 로또 개수
  - [ ] 구입한 로또 번호
  - [x] 당첨 통계
  - [ ] 수익률

- [ ] 로또 번호
  - [ ] numbers 배열 (1~45) 중복된 수 없이 6숫자 뽑아내기
