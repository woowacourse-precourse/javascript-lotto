## 어플리케이션 흐름 정리
1. 로또 구입 금액을 입력 받는다
2. 한장당 1,000원으로 계산하여 입력한 금액에 맞는 로또 수량을 계산한다.
3. 수량에 맞게 로또를 발행한다
4. 발행한 로또 수량과 번호를 출력한다.
5. 당첨 번호를 입력 받는다.
6. 보너스 번호를 입력 받는다.
7. 1~5등 당첨 내역을 확인한다.
7. 당첨 내역을 출력한다.
8. 수익률을 출력한다.


---
## 클래스 명세

### App - 어플리케이션 UI
#### 변수 목록
- myLotto : MyLotto 클래스 인스턴스
- lotto : Lotto 클래스 인스턴스

#### 함수 목록
#### `play()`
- 어플리케이션 시작

#### `inputPurchase()`
- 로또 구입 금액을 입력 - validate
- 입력값을 `parseInt` 후 MyLotto 생성자 인자로 넘겨줌

#### `inputWinNum()`
- 당첨 번호 입력 - validate
- 6개의 숫자를 콤마(,)로 구분하여 입력
- 문자열을 배열로 파싱하여 Lotto 생성자 인자로 넘겨줌

#### `inputBonusNum()`
- 보너스 번호 입력 - validate

#### `getResult()`
- 로또 결과 출력 및 종료

#### `validate()`
- 숫자 입력 여부 확인
- 문자나 수가 아닌 값이 포함되어 있을 경우 에러 발생

#### `printStrings(strs)`
- 파라미터로 전달된 문자열/문자열 배열 `strs`를 출력하는 함수


---
### AppUtils - 어플리케이션 로직 함수
#### 연산 함수
#### `checkMatchLottoNum(myLottoNumbers, winNum)`
- 로또 하나의 발행번호와 당첨번호와 일치 조회 함수
- 일치하는 번호 개수를 반환

#### `checkBonusNum(myLottoNumbers, bonus)`
- 보너스 번호 일치 여부 조회 함수
- 보너스 번호가 있을 경우 true/ 없을 경우 false

#### `getHistories(myLottoes, winNum)`
- 발행된 모든 로또의 당첨 내역을 조회하는 함수
- 발행 로또를 순회하며 `checkMatchLottoNum`호출하고 결과를 배열에 아래 순서로 저장
```
Array histories : [3개 일치, 4개 일치, 5개 일치, 5개+보너스 일치, 6개 일치]
```
- `histories` 배열을 반환

#### `calReward(history)`
- 상금을 계산하는 함수

#### `calRate(reward)`
- 수익률을 계산하는 함수
- 수익률을 소수점 둘째 자리에서 반올림하여 반환
- 당첨금이 0원일 경우 수익률은 0을 반환

#### 문자열 반환 함수
#### `toStringCountLotto(countMyLotto)`
- 구매한 로또 개수 문자열 반환
- 반환 문자열 형식
```
{countMyLotto}개를 구매했습니다.
```

#### `toStringMyLotto(myLottoes)`
- 구매한 로또 내역 문자열 반환
- 반환 문자열 형식
```
[8, 21, 23, 41, 42, 43]
[1, 14, 17, 37, 38, 45]
...
```

#### `toStringHistories(histories)`
- 로또 당첨 내역 문자열 반환
- 반환 문자열 형식
```
3개 일치 (5,000원) - {histories[0]}개
4개 일치 (50,000원) - {histories[1]}개
5개 일치 (1,500,000원) - {histories[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - {histories[3]}개
6개 일치 (2,000,000,000원) - {histories[4]}개
```

#### `toStringRate(rate)`
- 수익률을 문자열 반환
- 반환 문자열 형식 (rate는 천단위 콤마, 소수점 이하 1자리 고정)
```
총 수익률은 {rate}%입니다
```

### `toStringStat(myLotto, reward)`
- 당첨 통계 문자열 반환
- 로또 당첨 내역: `histories`를 받아 `toStringHistories()`에 전달
- 수익률: `rate`를 받아 `toStringRate()`에 전달
- 반환 문자열 형식
```
당첨 통계
---
{로또 당첨 내역}
{수익률}
```


---
### MyLotto - 구매한 로또 정보 클래스
#### 변수 목록
- num purchase : 구입 금액
- num count : 발행된 로또 개수
- 2d array myLottoes : 발행된 로또들의 정보를 담은 배열

#### constructor(구매금액)
- 인스턴스 생성시 구매 금액 설정
- `validate`로 구매 금액이 1,000원으로 나누어 떨어지는지 확인 

#### `countLotto(purchaseAmount)`
- 입력받은 금액에 따른 로또 수량 계산
- 입력값을 1,000으로 나눈 몫을 반환

#### `issueLotto(countLotto)`
- 구매한 로또 수량에 맞게 발행
- 중복되지 않는 1~45인 6개의 숫자를 무작위로 뽑음

#### `sortNumbers()`
- 오름차순으로 한 회차의 로또번호 정렬

#### `getMyLottoes()`
- myLottoNums 반환

#### `getCount()`
- count 반환

#### `getPurchase()`
- purchase 반환


---
### Lotto - 로또 당첨 번호 클래스
#### 변수 목록
- [] numbers : 당첨 번호 배열 (6자리 + 보너스번호 1자리)

#### constructor(numbers)
- 인스턴스 생성시 당첨 번호 `numbers` 설정 (numbers는 len이 6인 숫자로 이루어진 배열)
- `numbers`의 오류 여부를 `validate`로 확인

#### `validate(numbers)`
- 당첨 번호로 전달된 배열의 오류 여부를 확인하는 함수
- 에러 확인
    - 길이가 6인 배열이어야 함
    - 각 수가 1~45 범위 내 존재해야 함
    - 중복된 수가 존재하지 않아야 함

#### `setBonusNum(bonus)`
- 보너스 번호를 설정하는 함수

#### `bonusValidate(bonus)`
- 보너스 번호 유효 검사 함수
- 에러확인
    - 1~45인 1개의 수를 입력받음
    - 기존의 당첨 번호와 중복되지 않아야 함

#### `getNumbers()`
- 당첨 번호 반환

#### `getBonus()`
- 보너스 번호 반환