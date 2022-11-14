# 로또 게임 기능 구현 목록

> 1등: 6개 번호 일치 / 2,000,000,000원
> 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
> 3등: 5개 번호 일치 / 1,500,000원
> 4등: 4개 번호 일치 / 50,000원
> 5등: 3개 번호 일치 / 5,000원

> 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.

## `App` 클래스

- [x] `play` 메서드로 프로그램을 실행한다.

## 로또에 대한 기능이 들어있는 `Lotto` 클래스를 생성한다.

- [x] 로또 번호를 return한다. : `getLottoNumbers`
- [x] 로또 번호와 당첨 번호를 비교하여 맞은 개수를 return한다. : `getMatchCount`
- [x] 보너스 번호가 있는지 확인한다. : `hasBonusNumber`

## Lotto를 살 수 있는 `LottoGameMachine` 클래스를 생성한다.

- [x] 게임 머신을 킨다. : `startLottoGameMachine`
- [x] 사용자에게 구입 금액을 입력받는다. : `setTotalPurchaseAmount`
- [x] 총 로또 개수를 저장한다. : `setTotalLottosCount`
- [x] 구입 금액에 해당하는 만큼 로또를 발행한다. : `setLottos`
  - `generateRandomLottoNumbers` util 함수를 사용한다.
- [x] 생성된 번호들을 출력한다. : `printLottoNumbers`
- [x] 당첨번호와 보너스 번호를 입력받는다.
  - [x] 당첨번호 입력 : `setWinningLottoNumbers`
  - [x] 보너스 번호 입력 : `setBonusLottoNumber`
- [x] 로또의 결과를 가져와 통계를 낸다. : `collectStatistics`
  - [x] 로또의 결과들을 저장한다. : `setLottosResult`
    - `getLottoRanking` util 함수를 사용한다.
    - 수익률은 `calculateProfitRate` util 함수를 사용한다.
- [x] 통계를 출력하고 로또 게임을 종료한다.
  - [x] 당첨 통계 및 수익률 통계 출력 : `printStatistics`
  - [x] 로또 게임 종료 : `endLottoGame`

## 로또 게임을 이용하는 사람인 `User` 클래스를 생성한다.
- [ ] 총 구입 금액을 입력한다. : `setTotalPurchaseAmount`
- [ ] 당첨번호를 입력한다. : `setWinningLottoNumbers`
- [ ] 보너스 번호를 입력한다. : `setBonusLottoNumber`

## 유효한 값인지 판단하는 `Validatior` 클래스를 생성한다.

- [x] 구입 금액 : `validateTotalPurchaseAmount`
  - [x] 자연수인지 판단 : `isNaturalNumber`
  - [x] 1,000원 단위인지 판단 : `isThousands`
- [x] 로또 번호들 : `validateLottoNumbers`
  - [x] 6개의 숫자로 이루어져있는지 판단 : `isSixNumbers`
  - [x] 중복된 수가 존재하는지 판단 : `isUniqueNumbers`
  - [x] 올바른 로또 번호가 들어있는지 판단 : `validateLottoNumber`
- [x] 로또 번호 : `validateLottoNumber`
  - [x] 자연수인지 판단 : `isNaturalNumber`
  - [x] 1~45의 수인지 판단 : `isBetween1And45`

## utils/

- [x] 로또 번호를 랜덤으로 생성한다. : `generateRandomLottoNumbers.js`

  - 로또 번호의 숫자 범위는 1~45까지이다.
  - 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
  - 오름차순으로 정렬하여 배열에 담아 return한다.

- [x] 수익률을 계산한다. : `calculateProfitRate.js`

  - 수익률은 소수점 둘째 자리에서 반올림한다.

- [x] 로또 랭킹을 가져온다. :`getLottoRanking.js`

## constants/

- [x] 예외 처리 문구를 상수로 저장한다. : `error.js`
- [x] 게임에 기본적으로 출력되는 문구를 상수로 저장한다. : `message.js`
- [x] 로또 게임에 관련된 설정들을 상수로 저장한다. : `gameSetting.js`
