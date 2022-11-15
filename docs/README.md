## 🚩기능 목록

### App

콘솔을 통해 사용자에게 정보를 얻어와 로또 시뮬레이션을 수행한다. 각각의 주요 메소드는 콜백으로 이루어져 다음 단계를 실행하도록 촉발하는 역할을 겸한다.

#### play()

로또 앱을 실행한다.

```js
const app = new App();
app.play();
```

#### getInformation()

사용자에게서 구입 금액 정보를 받아온다. 나머지 정보를 얻도록 촉발한다.

#### getWinningNumbers()

사용자에게서 당첨 번호 정보를 받아온다. 보너스 번호 정보를 얻도록 촉발한다.

#### getBonusNumber()

사용자에게 보너스 번호 정보를 받아온다. 통계를 내도록 촉발한다.

#### receiveCash(userInput)

콘솔을 통해 사용자가 입력한 구입 금액을 받아 오류 여부를 확인하고 구입 금액을 저장한다.

#### receiveWinningNumbers(userInput)

콘솔을 통해 사용자가 입력한 당첨 번호를 받아 오류 여부를 확인하고 당첨 번호를 저장한다.

#### receiveBonusNumber(userInput)

콘솔을 통해 사용자가 입력한 보너스 번호를 받아 오류 여부를 확인하고 보너스 번호를 저장한다.

#### purchaseLotto()

구입 금액에 따라 가능한 만큼 로또를 구입한다. 구입 내역을 출력하도록 촉발한다.

#### produceStats()

얻은 정보를 통해 통계를 내고 사용자에게 출력한다. 앱이 종료하도록 촉발한다.

#### terminate()

콘솔을 닫고 앱을 종료한다.

---

### Lotto

1부터 45까지의 숫자 중 중복 없이 여섯 개의 번호를 입력받아 로또를 구현한다.

#### validate(numbers)

입력한 숫자가 올바른지 검사한다. 숫자가 여섯 개가 아니거나, 중복되는 숫자가 존재할 경우 에러를 발생시킨다.

#### showNumbers()

인스턴스 생성 시 입력받은 숫자를 반환한다.

```js
const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
const numbers = lotto.showNumbers();
console.log(numbers); // [1, 2, 3, 4, 5, 6]
```

---

### LottoArray

금액을 입력받아 가능한 만큼 로또를 구입한다. 로또의 구입은 Lotto 객체의 인스턴스를 생성하는 것으로 이루어진다.

```js
const cash = 3000;
const lottoArray = new LottoArray(cash);

console.log(lottoArray.amount);
// 3
console.log(lottoArray.lottoArray);
// [ Lotto() {}, Lotto() {}, Lotto() {}]
```

#### countAmount(cash)

입력받은 금액에 따라 구입할 수 있는 로또의 개수를 구해 반환한다.

#### purchaseLotto(amount)

구입 가능한 로또의 개수 만큼 로또를 구입하고 배열에 저장하여 반환한다.

#### makeLotto()

무작위 숫자를 받아와 Lotto 객체의 인스턴스를 하나 생성하여 반환한다.

---

### Stats

당첨 번호, 보너스 번호, 구입한 로또, 구입 금액을 입력 받아 통계를 낸다. 통계는 등수 별 당첨 횟수와 수익률로 이루어져 있다.

```js
//  ...
const stats = new Stats({
  winningNumbers,
  bonusNumber,
  purchased,
  cash,
});

console.log(stats.data);
// {
//   underThree: 7
//   three: 1
//   four: 2
//   five: 1
//   fivePlusBonus: 0
//   six: 0
// }

console.log(stats.performance);
// 500.65%
```

#### getScore(lotto)

당첨 번호와 일치하는 숫자의 개수를 통해 로또 하나의 등수를 구하여 반환한다.

#### getExpense(cash)

구입 금액 중 실제 사용한 비용을 구해 반환한다.

#### getPerformance()

수익률을 계산해 반환한다.

#### gather()

모든 등수를 취합한 데이터를 만들어 반환한다.

#### formatPercentage(performance)

수익률을 백분위 형태로 만들어 반환한다. 소수점 두 자리까지 표시하고, 소수점 끝자리가 0으로 끝나면 생략한다.

---

### Print

콘솔을 통해 사용자에게 단순히 정보를 출력하는 함수들을 가진 객체이다.

#### purchasedLottoAmount

LottoArray 인스턴스를 입력받아 구입한 로또 개수를 알리는 문구를 출력한다.

```js
// ...
Print.purchasedLottoAmount(purchased);
// 8개를 구매했습니다.
```

#### purchasedLottoList

LottoArray 인스턴스를 입력받아 구입한 로또 번호 목록을 출력한다.

```js
// ...
Print.purchasedLottoList(purchased);
// [8, 21, 23, 41, 42, 43]
// [3, 5, 11, 16, 32, 38]
// [7, 11, 16, 35, 36, 44]
// [1, 8, 11, 31, 41, 42]
// [13, 14, 16, 38, 42, 45]
// [7, 11, 30, 40, 42, 43]
// [2, 13, 22, 32, 38, 45]
// [1, 3, 5, 14, 22, 45]
```

#### purchasedLottoStatus

LottoArray 인스턴스를 입력받아 구입한 로또 개수를 알리는 문구와 로또 번호 목록을 출력한다.

```js
// ...
Print.purchasedLottoStatus(purchased);
// 8개를 구매했습니다.
// [8, 21, 23, 41, 42, 43]
// [3, 5, 11, 16, 32, 38]
// [7, 11, 16, 35, 36, 44]
// [1, 8, 11, 31, 41, 42]
// [13, 14, 16, 38, 42, 45]
// [7, 11, 30, 40, 42, 43]
// [2, 13, 22, 32, 38, 45]
// [1, 3, 5, 14, 22, 45]
```

#### totalStats

Stats 인스턴스를 입력받아 통계를 출력한다.

```js
// ...
Print.totalStats(stats);
// 당첨 통계
// ---
// 3개 일치 (5,000원) - 1개
// 4개 일치 (50,000원) - 0개
// 5개 일치 (1,500,000원) - 0개
// 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
// 6개 일치 (2,000,000,000원) - 0개
// 총 수익률은 62.5%입니다.
```

---

### ErrorCase

오류를 촉발하는 잘못된 입력인지 확인하는 함수들을 가진 객체이다.

#### isWrongCashInput(cashInput)

입력받은 구입 금액이 숫자가 아닐 경우 true를 반환한다. 그렇지 않을 경우 false를 반환한다.

```js
// ...
ErrorCase.isWrongCashInput(cashInput);
```

#### isWrongWinningNumbersInput(winningNumbersInput)

입력받은 당첨 번호의 형식이 잘못되었을 경우 true를 반환한다. 그렇지 않을 경우 false를 반환한다.

당첨 번호의 형식:

- 숫자여야 한다.
- 여섯 개여야 한다.
- 쉼표로 구분되어야 한다.
- 1부터 45까지의 범위에 존재하는 정수여야 한다.
- 중복되지 않아야 한다.

```js
// ...
ErrorCase.isWrongWinningNumbersInput(winningNumbersInput);
```

#### isWrongBonusNumberInput(bonusNumberInput)

입력받은 보너스 번호의 형식이 잘못되었을 경우 true를 반환한다. 그렇지 않을 경우 false를 반환한다.

보너스 번호의 형식:

- 숫자여야 한다.
- 하나여야 한다.
- 1부터 45까지의 범위에 존재하는 정수여야 한다.
- 당첨 번호와 중복되지 않아야 한다.

```js
// ...
ErrorCase.isWrongBonusNumberInput(bonusNumberInput);
```

#### duplicatedNumbers(numbers)

숫자로 이루어진 배열을 입력받아 중복된 숫자가 있는지 확인하고 있으면 true를 반환한다. 그렇지 않을 경우 false를 반환한다.

```js
// ...
ErrorCase.duplicatedNumbers(numbers);
```

#### isDuplicatedBonusNumber(winningNumbers, bonusNumber)

보너스 번호가 당첨 번호와 중복되는지 확인하여 중복되는 경우 true를 반환한다. 그렇지 않을 경우 false를 반환한다.

```js
// ...
ErrorCase.isDuplicatedBonusNumber(winningNumbers, bonusNumber);
```

---

### Utils

주요 객체 이외에 사용하는 기능들이다.

#### Check.wrongInput(userInput, errorHandler, errorMessage)

사용자의 입력이 올바른지 에러 핸들러를 통해 검증하고, 올바르지 않다면 에러 문구와 함께 에러를 발생시킨다.

#### Check.bonusNumberDuplicated(winningNumbers, bonusNumber, errorHandler)

보너스 번호가 당첨 번호와 중복되는지 에러 핸들러를 통해 검증하고, 중복된다면 에러 문구와 함께 에러를 발생시킨다.

#### Format.winningNumbers(winningNumbers)

당첨 번호를 입력받아 저장하기 위한 형태로 변환하여 반환한다.

#### Process.winningNumbersInput(input)

당첨 번호를 입력받아 검증하기 위한 형태로 변환하여 반환한다.

#### Create.randomNumbers()

1부터 45까지의 정수 중 중복되지 않는 여섯 개의 번호를 배열로 만들어 반환한다.

#### Create.statsBoard(data, performance)

통계 정보를 입력받아 출력형식으로 변환하여 반환한다.
