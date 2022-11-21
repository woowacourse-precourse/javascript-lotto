# 미션 - 💵 로또 게임

## 기능목록

### 기능목록 1 유저가 로또를 몇 개 구입할지 입력 받는다.
* [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 사용해서 1000으로 나눠떨어지는 숫자를 입력받는다. 1000으로 나눠떨어지지 않으면 컨벤션에 따라 ["ERROR"]를 출력하고 종료된다.

### 기능목록 2 로또를 n개 만든다.
유저에게 입력받은 돈/1000(n) 만큼의 갯수의 로또를 만든다.

### 기능목록 3 유저에게 당첨번호를 입력받는다.
* [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 사용해서 6개의 당청번호와 1개의 보너스 번호를 입력받는다.
* 만약 숫자가 6개가 아니거나 숫자가 아닌 문자가 포함된경우 어플리케이션은 컨벤션에 따라 ["ERROR"]를 출력하고 종료된다.
### 기능목록 4 당첨번호와 로또 번호를 비교한다.
* 앞에서 뽑았던 로또의 번호를 순차적으로 당첨번호와 비교해서 당첨 통계를 낸다.
* 당첨 통계값으로 수익률을 계산한다.

#### 기능목록 4 - 1 번호 입력을 받는 Validation함수를 만든다.
* 모든 Validation을 간리하는 함수를 만들고 후에 추가되는 기능이 있을시 Validation함수 재사용

### 기능목록 5 유저에게 4번값을 출력해준다.
* 4번값중 수익률과 통계를 [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 이용하여 출력한다.
* [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 이용하여 어플리케이션을 종료한다.