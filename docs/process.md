## 로직분리

- App
  - state
    - ✅ 구입금액 : payment
    - ✅ 로또번호들 : lottos
    - ✅ 당첨번호 : winning_number
    - ✅ 보너스번호 : bonus_number
    - ✅ 당첨결과 : result
    - 수익률 : profit_rate
  - method
    - ✅ 시작 : play
    - ✅ 금액 입력받기 : getPayment
    - ✅ 로또 구매개수 출력 : printPurchaseQuantity
    - ✅ 로또 발행 : generateLottos
    - ✅ 당첨번호 입력받기 : getWinningNumeber
    - ✅ 보너스번호 입력받기 : getBonusNumber
    - ✅ 당첨결과 도출 : generateResult
    - ✅ 당첨결과 출력 : printResult
    - ✅ 수익률 출력 : printProfitRate
    - ✅ 종료 : close

- Lotto 
  - state : 
    - ✅ numbers (로또 1장의 6자리 번호 : instance 생성시 인자로 넘어옴) -> private
    - ✅ result
  - method
    - ✅ 번호 유효성 체크 : validate(numbers)
    - ✅ 번호 출력 : get(numbers)
    - ✅ 당첨내역 확인 : checkResult(numbers, winning)

- constants
  - ✅ 에러 메세지
  - ✅ 입력 메세지
  - ✅ 출력 메세지


- utils
  - ✅ validation 
    - ✅ number
    - ✅ duplicate
    - ✅ range

## validation 재사용성

< 구현목록 >
- ✅ 유효한 숫자
- ✅ 1~ 45 사이 -> lotto / utils
- ✅ 중복된 숫자 여부 -> lotto / utils
- ✅ 6자리 -> lotto 


< lists >
- payment : 
  - ✅ 유효한 숫자 : 
  - ✅ 1000원 이상
  - ✅ 1000원 단위

- lotto number
  - ✅ 유효한 숫자 
  - ✅ 1~ 45 사이 -> lotto / utils
  - ✅ 6자리 -> lotto 
  - ✅ 중복된 숫자 여부 -> lotto / utils

- winning number
  - ✅ , 사이의 모든 공백제거 : 정규표현식 사용
  - ✅ , 구분자로 split

  - ✅ 유효한 숫자
  - ✅ 1~ 45 사이 -> lotto / utils
  - ✅ 6자리 -> lotto 
  - ✅ 중복된 숫자 여부 -> lotto / utils

- bonus number
  - ✅ 유효한 숫자 (1자리)
  - ✅ 1~ 45 사이
  - ✅ winning number과 중복 숫자 여부


# 테스트 코드 추가
- ✅ 구입금액
  - ✅ 숫자외의 입력값인 경우
    - ✅ 문자열
    - ✅ 공백
    - ✅ 특수문자
  - ✅ 1000원 단위가 아닌 경우
  - ✅ 1000원 미만인 경우

- 로또번호
  - ✅ 6자리 초과인 경우
  - ✅ 6자리 미만인 경우
  - ✅ 1-45 사이의 숫자가 아닌 경우
  - ✅ 중복숫자가 있는 경우

- ✅ 당첨번호
  - ✅ 숫자, 공백, 콤마 외의 입력값이 있는 경우

- ✅ 보너스 번호
  - ✅ 숫자외의 입력값인 경우
  - ✅ 당첨번호와 중복된 숫자인 경우
