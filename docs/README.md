# 🛠️ 로또 기능 목록

## 📮 Lotto 클래스
추첨한 로또 번호와 보너스 번호에 대한 클래스입니다.

### Field
추첨한 로또 번호의 값을 설정한 필드입니다.
```javascript
#numbers;
```

### Constructor
추첨한 로또 번호에 예외 처리를 하여 저장한 생성자입니다.
```javascript
constructor(numbers) {
  this.validate(numbers);
  this.#numbers = numbers;
}
```

### Method
추첨한 로또 번호와 보너스 번호에 대한 메서드입니다.

#### `validate`
추첨한 로또 번호에 예외 처리를 합니다.
- [ERROR] 로또 번호는 6개여야 합니다.
- [ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.
- [ERROR] 로또 번호는 숫자로만 이루어져야 합니다.
- [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```javascript
validate(numbers) {
  if (numbers.length !== NUMBER.LOTTO_NUMBER) {
    throw new Error(ERROR.LOTTO_COUNT);
  }

  if (new Set(numbers).size !== NUMBER.LOTTO_NUMBER){
    throw new Error(ERROR.LOTTO_OVERLAP);
  }
    
  numbers.map((number) => {
    if (/[^0-9]/g.test(number)){
      throw new Error(ERROR.LOTTO_NUMBER);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR.LOTTO_RANGE);
  }
  });
}
```

#### `setBonus`
보너스 번호를 추첨해서 로또 번호에 추가합니다.
```javascript
setBonus(number){
  this.validateBonus(number);
  this.#numbers.push(number);
}
```

#### `validateBonus`
보너스 번호에 예외 처리를 합니다.
- [ERROR] 보너스 번호는 숫자로만 이루어져야 합니다.
- [ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.
- [ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.
```javascript
validateBonus(number) {
  if (/[^0-9]/g.test(number)){
    throw new Error(ERROR.BONUS_NUMBER);
  }

  if (number < 1 || number > 45) {
    throw new Error(ERROR.BONUS_RANGE);
  }

  if (this.#numbers.includes(number)){
    throw new Error(ERROR.BONUS_OVERLAP)
  }
}
```

#### `getLotto`
로또 번호를 반환해 줍니다.
```javascript
getLotto() {
  return this.#numbers;
}
```

<br/>

## 🏬 LottoStore 클래스
자동 로또를 판매하는 클래스입니다.

### Field
현금, 구매한 로또 개수, 자동 로또를 설정한 필드입니다.
```javascript
#money;
#count;
#autoLotto = [];
```

### Constructor
현금에 예외 처리를 하여 저장한 생성자입니다.
```javascript
constructor(money) {
  this.validate(money);
  this.#money = money;
}
```

### Method
현금, 구매한 로또 개수, 자동 로또에 대한 메서드입니다.

#### `validate`
현금에 예외 처리를 합니다.
- [ERROR] 구입금액은 숫자로만 이루어져야 합니다.
- [ERROR] 구입금액은 1,000 단위여야 합니다.

```javascript
validate(money) {
  if (/[^0-9]/g.test(money)) {
    throw new Error(ERROR.MONEY_NUMBER);
  }

  if (money % NUMBER.LOTTO_UNIT !== 0) {
    throw new Error(ERROR.MONEY_UNIT);
  }
}
```

#### `getCount`
구입한 로또의 개수를 반환합니다.
```javascript
getCount() {
  this.#count = this.#money / NUMBER.LOTTO_UNIT;
  return this.#count;
}
```

#### `setAutoLotto`
자동 로또를 출력합니다.
```javascript
setAutoLotto() {
  for(let index = 0; index < this.#count; index++){
    const numbers = Random.pickUniqueNumbersInRange(NUMBER.LOTTO_MINIMUM, NUMBER.LOTTO_MAXIMUM, NUMBER.LOTTO_NUMBER);
    this.#autoLotto.push(numbers.sort((a, b) => a - b));
  }
  return this.#autoLotto;
}
```

#### `getAutoLotto`
자동 로또를 반환합니다.
```javascript
getAutoLotto() {
  return this.#autoLotto;
}
```

<br/>

## 🥇 LottoResult 클래스
로또의 결과를 알려주는 클래스입니다.

### Field
로또 번호, 보너스 번호, 자동 로또를 설정한 필드입니다.
```javascript
#lotto;
#bonus;
#autoLotto;
```

### Constructor
로또 번호, 보너스 번호, 자동 로또를 저장한 생성자입니다.
```javascript
constructor(lotto, autoLotto) {
  this.#bonus = lotto.pop();
  this.#lotto = lotto;
  this.#autoLotto = autoLotto;
}
```

### Method
로또 번호, 보너스 번호, 자동 로또에 대한 메서드입니다.

#### `getCount`
정답인 번호의 개수와 보너스 번호의 유무를 반환합니다.
```javascript
getCount(autoLotto){
  let count = 0;
  let bonus = false;

  autoLotto.map((lotto) => {
    if (this.#lotto.includes(String(lotto))){
      count += 1;
    }
    if (String(lotto).includes(this.#bonus)){
      bonus = true;
    }
  });

  return { count, bonus };
}
```

#### `getResult`
로또의 등수 결과 반환합니다.
```javascript
getResult(){
  let result = [0, 0, 0, 0, 0];

  this.#autoLotto.map((lotto) => {
    const { count, bonus } = this.getCount(lotto);
    if (count === 3) result[0] += 1;
    if (count === 4) result[1] += 1;
    if (count === 5 && !bonus) result[2] += 1;
    if (count === 5 && bonus) result[3] += 1;
    if (count === 6) result[4] += 1;
  });

  return result;
}
```

#### `getRate`
로또의 총 수익률을 반환합니다.
```javascript
getRate(result) {
  let total = 0;
  total += result[0] * NUMBER.LOTTO_FIFTH_PLACE;
  total += result[1] * NUMBER.LOTTO_FOURTH_PLACE;
  total += result[2] * NUMBER.LOTTO_THIRD_PLACE;
  total += result[3] * NUMBER.LOTTO_SECOND_PLACE;
  total += result[4] * NUMBER.LOTTO_FIRST_PLACE;

  return (total / (this.#autoLotto.length * 10)).toFixed(1); 
}
```
