# 미션 - 로또

## 📝 목차

1. [💁‍♂️ 프로젝트 소개](#프로젝트-소개)
2. [🚀 학습 목표](#학습-목표)
3. [📂 클래스(객체)간 구조와 역할](#클래스객체간-구조와-역할)
4. [🛠 기능 목록](#기능-목록)
5. [🔍 도메인 로직에 대한 단위 테스트 목록](#도메인-로직에-대한-단위-테스트-목록)
6. [✨ 테스트를 작성하면서 느낀 테스트의 유용함](#테스트를-작성하면서-느낀-테스트의-유용함)

## 프로젝트 소개

해당 프로젝트는 **[로또 게임]** 입니다.

게임은 다음 순서로 진행됩니다.

1. 입력한 금액 만큼 로또를 구매한다. (로또 번호는 랜덤)
2. 당첨 번호와 보너스 번호를 입력한다.
3. 당첨 통계를 출력한다.

### 🕹 게임 실행 예시

![로또 게임](https://user-images.githubusercontent.com/33623078/201916804-cb940b2b-fbe0-4b02-9887-bb27e03f499b.gif)

## 학습 목표

해당 프로젝트를 진행하며 다음 2가지 항목을 연습했습니다.

1. **클래스(객체)를 분리하는 연습**
2. **도메인 로직에 대한 단위 테스트를 작성하는 연습**

추가로 다음 항목들도 지키며 구현했습니다.

- **문자열, 숫자 등의 값을 하드코딩하지 않는다.**
  - 상수를 만들고 이름을 통해 변수의 역할을 드러내자.
- **구현순서도 컨벤션이다**

  - 클래스를 작성할 때 필드, 생성자, 메서드 순으로 작성하자.

  ```js
  class A {
    필드;

    생성자;

    메서드;
  }
  ```

- **한 함수가 한가지 기능만 담당한다.**
  - 여러 일을 하고 있다면 적절하게 분리하자.
- **함수가 한가지 기능을 하는지 확인하는 기준을 세운다.**
  - 중복되는 코드가 있다면 함수 분리를 고민하자.
  - 함수 길이는 15라인을 넘지 않도록 하자.

## 클래스(객체)간 구조와 역할

<center><img src="https://user-images.githubusercontent.com/33623078/201932769-9065f0fe-6941-4bc7-81f6-4dddba8015dc.png" width="600" height="550"></center>
 
클래스는 구현내용에 따라 **도메인 로직**, **UI 로직**으로 나눌 수 있다.

- UI 로직은 **사용자에게 보이는 부분에 대한 로직**을 의미한다.

- 도메인 로직은 **사용자에게 보이지 않고 뒤쪽에서 처리하는 로직**을 의미한다.
  - **데이터가 생성되고 저장되고 수정**되는 과정에 대한 로직이다.

도메인 로직은 `Lotto`, `LottoMachine`, `LottoStore`, `Player` 클래스에,

UI 로직은 `InputView`, `OutputView` 클래스에 구현했다.

### 클래스 분리하며 느낀 점

각 역할에 맞게 클래스를 분리하니,

역할이 구분되어 로직 추가가 수월했고, 전체적인 코드 구조가 깔끔해지고 알아보기 쉬워졌다.

또한 클래스에 맞게 테스트 코드도 분리하여 작성하기 때문에 도메인 로직이 크게 어떤 로직들로 이루어졌는지 파악하기 쉬웠다.

## 기능 목록

- [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자(1~45)를 뽑는다.
- [x] 로또 구입 금액을 입력받는다.
  - [x] ❗️예외 처리
    - [x] 입력이 1000원으로 나누어 떨어지지 않는 경우 입력된 로또 구입 금액으로 Lotto 생성
    - [x] 입력이 0원 이하인 경우
- [x] 구입 금액에 해당하는 만큼 로또(1장에 1000원)를 발행한다.
- [x] 발행한 로또 수량을 출력한다.
- [x] 발행한 로또 번호를 출력한다.
  - [x] 번호는 오름차순으로 정렬한다.
- [x] 중복되지 않는 6개의 숫자로 구성된 당첨 번호를 입력받는다.
  - [x] ❗️예외 처리
    - [x] 입력이 6개의 숫자로 구성되지 않은 경우
    - [x] 입력이 1~45 사이의 숫자가 아닌 경우
    - [x] 입력에 중복된 숫자가 있는 경우
- [x] 보너스 번호 1개를 입력받는다.
  - [x] ❗️예외 처리
    - [x] 입력이 1~45 사이의 숫자가 아닌 경우
    - [x] 입력이 당첨 번호에 존재하는 숫자인 경우
- [x] 당첨 번호와 사용자가 구매한 로또 번호를 비교할 수 있다. (일치하는 번호의 개수를 구할 수 있다.)
  - [x] 구매한 로또 번호의 등수를 알 수 있다.
- [x] 당첨 내역을 구할 수 있다.
- [x] 당첨 내역을 출력한다.
- [x] 당첨된 로또의 금액을 구할 수 있다. 상수로 선언한 부분
- [x] 구매한 로또 전체의 당첨금을 구할 수 있다.
- [x] 수익률을 구할 수 있다.
  - [x] 수익률은 소수점 둘째 자리에서 반올림한다.
- [x] 수익률을 출력한다.
- [x] 예외 상황 에러 문구는 "[ERROR]"로 시작한다.

## 도메인 로직에 대한 단위 테스트 목록

### Lotto 클래스

- [x] ❗️예외 처리
  - [x] 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.
  - [x] 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.
  - [x] 로또 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.

### LottoMachine 클래스

- `setBonusNumber(bonusNumber)`
  - [x] ❗️예외 처리
    - [x] 보너스 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.
    - [x] 보너스 번호가 당첨 번호에 존재하는 숫자인 경우 예외가 발생한다.

### LottoStore 클래스

- `getGeneratedLottos(purchasedAmount)`
  - [x] 구입 금액에 해당하는 만큼 로또 번호를 생성한다.
  - [x] 생성한 각 로또 번호는 오름차순으로 정렬되어 있다.
  - [x] 생성한 각 로또 번호는 중복되지 않는 6개의 숫자로 구성된다.

### Player 클래스

- `purchaseLottos(purchasedAmount)`
  - [x] ❗️예외 처리
    - [x] 로또 구입 금액이 1000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.
    - [x] 로또 구입 금액이 0원 이하인 경우 예외가 발생한다.
- `calculateStatistic(lottoWinningNumbers, bonusNumber)`
  - [x] 당첨 내역을 구할 수 있다.

### common 유틸

- `getAscending(numbers)`
  - [x] 오름차순으로 정렬한 numbers를 리턴한다.
- `getRateOfReturn(earnedAmount, purchasedAmount)`
  - [x] 로또 수익률을 구할 수 있다. (소수점 둘째 자리에서 반올림)
- `getEarnedAmount(statistic)`
  - [x] 구매한 로또 전체의 당첨금을 구할 수 있다.
- `getMatchedNumberCount(lottoWinningNumbers, generatedLotto)`
  - [x] 당첨번호와 로또번호를 비교하여 일치하는 번호의 개수를 구할 수 있다.

## 테스트를 작성하면서 느낀 테스트의 유용함

### 잘못 작성된 로직을 발견하고, 수정할 수 있다.

다음은 로또 수익률을 구하는 `getRateOfReturn(earnedAmount, purchasedAmount)` 을 테스트하는 코드이다.

```jsx
test('getRateOfReturn(earnedAmount, purchasedAmount) - 로또 수익률을 구할 수 있다. (소수점 둘째 자리에서 반올림)', () => {
  const earnedAmount = 70000;
  const purchasedAmount = 230000;

  const rateOfReturn = getRateOfReturn(earnedAmount, purchasedAmount);

  expect(rateOfReturn).toEqual(30.4);
});
```

아무 문제가 없을 거라고 생각했지만, test를 해보니 fail이 났다.

<img width="816" alt="image" src="https://user-images.githubusercontent.com/33623078/201937732-5f83901c-1580-48a2-84b8-44b5fb1a1d71.png">

`getRateOfReturn` 에서 `string` 형태로 값을 리턴하고 있었다.

수익률을 구하는 함수는 `number` 로 값을 리턴해야 한다.

```jsx
// 수정 전
const getRateOfReturn = (earnedAmount, purchasedAmount) => {
  return ((earnedAmount / purchasedAmount) * 100).toFixed(1);
};

// 수정 후
const getRateOfReturn = (earnedAmount, purchasedAmount) => {
  return parseFloat(((earnedAmount / purchasedAmount) * 100).toFixed(1));
};
```

`string` 값을 `float` 값으로 변환해주는 `parseFloat` 을 이용해서 `getRateOfReturn` 을 올바르게 고칠 수 있었다.

**테스트 코드를 작성함으로써, 알아채지 못했던 잘못된 로직을 발견하고 수정할 수 있다.**

### 분리되어 있던 로직을 모을 수 있다.

로또 당첨 번호를 생성할 때 예외처리에 대한 테스트를 작성하면서

예외처리 로직이 분산되어 있다는 걸 알게 되었다.

총 세개의 예외처리 로직 중

2개는 클래스 내부에서, 1개는 사용자 입력을 number로 변환하는 메소드 내부에 있었다.

```jsx
getWinningNumbersFromInput = (input) => {
    const lottoWinningNumbers = input.split(',').map((number) => {
      const lottoNumber = parseInt(number, 10);

			// if (!(lottoNumber >= 1 && lottoNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);

      return lottoNumber;
    });
```

```jsx
class Lotto {
	...
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.notSixNumbers);
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.duplicatedNumbers);
    } else if (!numbers.every((number) => number >= 1 && number <= 45)) { // 이동
      throw new Error(ERROR.notOneToFourtyFiveRange);
    }
  }
	...
}
```

한 곳에서 로직을 관리하기 위해

모든 예외처리를 클래스 내부에서 하는 것으로 수정했다.

**테스트 코드를 작성함으로써, 분산되어 있는 로직을 한곳에 모을 수 있다.**

### 새로 만든 함수나 변수로 인한 사이드 이펙트를 감지할 수 있다.

추가한 코드가 사이드 이펙트를 일으키는지 확인하려면 프로그램을 실행한 뒤 수작업으로 입력하면서 정상 작동하는지 테스트 해야한다.

하지만

**테스트 코드를 작성해놓는다면, 실행을 통해 바로 사이드 이펙트 여부를 확인할 수 있다.**

### 도메인 로직을 한눈에 파악할 수 있다.

테스트 코드는 해당 프로젝트에서 중요한 도메인 로직을 테스트한다.

따라서

**테스트 코드를 보는 것 만으로 해당 프로젝트의 핵심 로직을 파악할 수 있다.**
