# src 디렉토리 구조

```src
├── constatnt
│   └── constant.js
├── Constroller
│   └── GameController.js
├── Model
│   ├── BonusNumber.js
│   ├── Lotto.js
│   ├── LottoGame.js
│   ├── Lottos.js
│   ├── Money.js
│   └── Result.js
├── Constroller
│   ├── Input.js
│   └── printMessage.js
└────
```

# 설계

도메인과 서비스로직을 분리하기 위해 MVC모델을 체택하여 View에 서비스로직(UI)을, 모델에 도메인 로직을 구현하였다.
둘을 연결시키기 위해서 Controller를 사용했다.

Model의 전체적인 정보는 LottoGame이 관리한다.
LottoGame은 lottos(랜덤로또배열), winLotto(당첨로또), bonusNumber(보너스번호), money(돈)을 관리한다.
각각의 프로퍼티는 class형태로 관리되며 lottos와 winLotto는 Lotto클래스를 갖는다.
Lotto, BonusNumber, Money는 생성자가 실행될 때 validation을 거치며 이에 대한 단위테스트를 작성하였다.

LottoGame은 Model에 대한 전체적인 정보를 가짐과 동시에 Result모델의 인터페이스이기도 하다.
LottoGame을 통해 Result모델은 score객체를 프로퍼티로 가지며, 이를 통해 당첨현황과 수익률을 계산한다.

![UML 클래스다이어그램](./3주차%20미션%20uml.png)

# 필요한 기능

1. [x] 입력
   1. [x] 돈 입력
   2. [x] 당첨번호 입력
   3. [x] 보너스 번호 입력
2. [x] 돈의 액수에 따라 로또 수량 발행(random number)
3. [x] 오름차순 정렬
4. [x] 로또 구매숫자 및 로또번호 출력
5. [x] 당첨여부 확인, 출력
6. [x] 수익률 계산 (당첨금액/사용금액\*100) 후 소숫점 반올림

# 예외 경우

1. [x] 로또번호가 중복되는경우
2. [x] 정답번호와 보너스 번호가 중복되는 경우
3. [x] 로또가 번호가 아닌 경우
4. [x] 돈이 숫자가 아닌 경우
5. [x] 로또 범위가 1보다 작거나, 45를 넘어가는 경우
