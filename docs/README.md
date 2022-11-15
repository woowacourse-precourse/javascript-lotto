# 미션 - 로또

## 1. 로또 게임 구조

<img src="https://user-images.githubusercontent.com/66871265/201825960-649ee2ec-1009-4b15-a88e-29913e79c049.png" alt="프로젝트_구조">

## 2. 기능목록

### `Class`

- #### Seller

  - 로또의 구매와 결과까지 과정을 관리하는 클래스
  - 전체적인 상태를 총 관리하고 뷰에 상태를 넘겨준다.
  - [x] 구입 금액을 요청한다.
  - [x] 금액에 맞는 로또를 발행하는 기능.
  - [x] 당첨 번호를 입력 받는 기능.
  - [x] 보너스 번호를 입력 받는 기능
  - [x] 각 단계 프로세스가 진행되는 걸 핸들링한다.
  - [x] 로또 결과를 발표하는 기능.

```javascript
// 사용자로 부터 입력 받은 값과 내부 상태 값은 Seller 클래스에서 관리
const Private = Symbol();
this[Private] = { buyLottoNumber: Number(amount) / LOTTO_AMOUNT.VALID_UNIT };
Object.assign(this[Private], { lottos: this.#generateLottos() });
```

```javascript
// 사용자에게 구입 금액/당첨 번호 등 입력을 요청하는 기능
#requestLottoSale() {
  this.#io.readline("구입금액을 입력해주세요.\n", this.#handleLottoSale.bind(this));
}
```

```javascript
// 각 단계를 핸들링하는 메서드
#handleLottoSale(amount) {
  if (!this.validateAmount(amount)) this.#io.close();
  this[Private] = { buyLottoNumber: Number(amount) / LOTTO_AMOUNT.VALID_UNIT };
  Object.assign(this[Private], { lottos: this.#generateLottos() });
  const { buyLottoNumber, lottos } = this[Private];
  this.#buyer.outputView({ buyLottoNumber, lottos });
  this.#requestLottoWinNumber();
}
...
```

- #### Buyer

  - 구매한 로또에 대한 내역 뷰를 그려주는 클래스
  - [x] 구입한 금액만큼의 로또 갯수와 로또에 대한 뷰를 출력한다.

```javascript
// Seller로 부터 상태를 넘겨받아 로또 구매내역 뷰를 그려준다.
outputView({ buyLottoNumber, lottos }) {
  this.#io.print(`\n${buyLottoNumber}개를 구매했습니다.`);
  lottos.forEach((lotto) => this.#io.print(`[${lotto.join(", ")}]`));
}
```

- #### Statistic

  - 구매한 로또와 당첨 번호를 가지로 통계 뷰를 그려주는 클래스
  - [x] 당첨번호와 구입한 로또를 비교해 결과를 해쉬 맵을 사용하여 리턴한다.
  - [x] 해쉬맵을 바탕으로 수익률을 계산한다.
  - [x] 통계 뷰를 출력한다.

```javascript
// Seller로 부터 상태를 넘겨받아 당첨 결과 통계 뷰를 그려준다.
outputView({ lottos, winNumber, bonusNumber }) {
  const rank = this.getRankResult({ lottos, winNumber, bonusNumber });
  const messages = this.generateMessage({
    rank,
    totalYield: this.getYield({ rank, lottos }),
  });
  this.#io.print("\n당첨 통계");
  this.#io.print("---");
  messages.forEach((message) => this.#io.print(message));
}
```

- #### Lotto

  - 로또를 발급해주는 클래스
  - [x] 받은 로또 번호가 유효한 로또 번호인지 검증한다.
  - [x] 검증하고 유효한 로또 번호를 돌려준다.

- #### Console

  - 사용자의 입/출력을 담당하는 유틸 클래스
  - readline, print, close

- #### Validator

  - 일반적인 검증을 담당하는 유틸 클래스

## 3. 예외사항

- #### Seller

  - 구입 금액이 1,000원 단위로 입력을 했는지 검증한다
  - 당첨 번호를 입력 받을 때, 당첨 번호가 ,를 포함한 11자리 인지 검증한다
  - 당첨 번호가 1~45까지의 번호인지 검증한다.
  - 당첨번호가 숫자인지 검증한다.
  - 보너스 번호가 1자리 초과/미만 인지 검증한다.
  - 보너스 번호가 숫자인지 검증한다.
  - 보너스 번호가 1~45까지의 번호인지 검증한다

- #### Lotto

  - 로또 번호가 6개인가?
  - 중복된 번호가 있는가?
  - 1부터 45까지의 범위인가?

## 4. 주의사항

- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

```
총 수익률은 62.5%입니다.
```

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

```
[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```
