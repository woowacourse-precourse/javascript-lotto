# 우아한테크코스 3주차 미션 - 로또

## 출력을 이용해 기능 분리하기

- Customer.buyLotto(), readLine 함수를 이용해 구입 금액을 입력받고 콜백 -> 로또 생성까지

```
구입금액을 입력해 주세요.
8000
```

- LottoStore.generateLottoNumber(), readLine 함수 입력 후 입력값을 1000으로 나눈 뒤 몫만큼 로또 생성 후 출력, this.numbers에 세이브

```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

- LottoCompany.enterWinningLottoNumber(), readLine 함수를 이용해 당첨 번호를 입력받는다.

```
당첨 번호를 입력해 주세요. :
1,2,3,4,5,6
```

- LottoCompany.enterLottoBonusNumber(), readLine 함수를 이용해 당첨 번호를 입력받는다.

```
보너스 번호를 입력해 주세요. :
7
```

- Customer.winLottoStatistic(), 계산된 통계 값을 받아 일치하는 복권의 개수와 수익률을 출력한다.

```
당첨 통계 :
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

## 분리한 기능을 구체화시키기

### not use callback

- [x] 1. Customer.buyLotto()

  - get money : readLine() >> mock fn
  - transfer type : string -> int
  - price exception handling
  - return money;

- [x] 2. LottoStore.generateLotto(money)

  - calculateLottoCount(money)
  - generateLottoNumber(lotto count) >> mock fn
    - Lotto.constructor
    - Lotto.validate() : numbers.length validate
    - Lotto.isUniqueNumberValidate()
  - return Lotto Instance Array

- [x] Customer.buyLotto(Lottos) : set lottoInstance

- [x] 3. LottoCompany.drawLottoNumber()

  - get winning numbers : getWinningNumber() >> mock fn
  - transferIntArray(winningNumberString)
    - isNumberValidate()
  - return winning numbers;

- [ ] LottoCampany.setWinningLottoNumbers(winning lotto numbers);

- [x] 4. Customer.winLottoStatistic( {winning numbers, winning bonus number, generate lottos} )

  - find winning numbers in generate lottos(lotto object)
  - print lotto statistic(statistics object)
  - calculate lotto yield
  - close console

### use callback

- call App.play
  - buyLotto()
    - readline(answer =>
      - exception
      - generate number(answer)
        - calculate count(answer), return count
        - Random.Pick~ (), return numbers
        - exception
        - winning lotto numbers()
          - readline(answer1 =>
            - exception
            - readline(answer2 =>
              - exception
              - winning lotto statistic(answer1, answer2, numbers)
                - find winning number in generated numbers(), return statistic
              - print lotto statistic(statistic)
              - close

## 객체 분리하기

1. Customer
   1. property
      1. lotto number
   2. method
      1. buy lotto
      2. set lotto numbers
      3. winning lotto statistics
2. LottoStore
   1. No property
   2. method
      1. generate lotto
         1. calculate lotto count
         2. generate lotto number
3. LottoCompany
   1. property
      1. winning lotto numbers : include bonus
   2. method
      1. enter winning lotto number
      2. enter lotto bonus number

## 미션 후기

### 학습 과정

- 기능 설계 고민
  - [v] 콜백 사용 X
    - 단위 테스트에서나 다른 면에서 콜백을 사용하지 않는 것이 좋다고 판단했습니다. 다만, 테스트를 어떻게 통과할지는 고민을 조금 더 해야할 듯 싶습니다.
- isNaN 검증 관련 고민
  - 숫자 검증 시 어떤 값을 설정해야 할 지 고민했습니다.
    - NaN의 타입이 number라는 것을 알았습니다.
    - isNaN으로 값을 비교해야 된다는 것을 알았습니다.
- 궁금한 점
  - TDD를 하면서 테스트 코드를 작성하고, 테스트를 통과하는 코드를 짜는 것은 실제 기능을 만드는 것과는 다르다는 생각이 들었습니다. 이를 의도하고 이러한 미션을 짜신 건지 궁금합니다.
- truthy, falsy
  - -1은 truthy한 값이며 0은 falsy한 값이다

### 배운점
