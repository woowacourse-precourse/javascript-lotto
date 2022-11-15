## 구현할 기능 목록

- 유효성 검사 함수

  - [V] 숫자 범위 1~45 : checkNumRange()
    - 범위 밖의 숫자인 경우 예외 발생 : throw new error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
  - [V] 중복 허용X : checkNumDuplicate()
    - 중복되는 숫자가 있는 경우 예외 발생 : throw new error("[ERROR] 로또 번호는 중복이 허용되지 않습니다.")
  - [V] 숫자 6개 : validate()
    - 숫자 6개 아닌 경우 throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

- [V] 발행된 로또 유효성 검사 : constructor 내에서

  - checkNumRange, checkNumDuplicate, validate 실행

- [] 추첨된 당첨 번호 유효성 검사 : validateWinNum()

  - 숫자 6개 + 보너스 숫자 1개
  - checkNumRange(), checkNumDuplicate() 실행

- [V] 당첨 범호 입력받기 : inputWinNum()

  - 숫자 6개 입력받기 (쉼표 기준으로 구분)

    - 예외
      1. 쉼표가 입력되지 않거나 다른 구분자가 들어있는 경우 throw new error("[ERROR] 쉼표를 기준으로 6개의 숫자를 입력해주세요.")
      2. 숫자가 6개가 아닌 경우 throw new error("[ERROR] 6개의 숫자를 입력해주세요.")

  - validateWinNum() 실행

  - 보너스 숫자 1개 입력
    - 예외 : 숫자가 1개가 아닌 경우, 숫자가 1~45가 아닌 경우, 기존 숫자 중복인 경우
    - 보너스 숫자 예외 체크 함수 : validateBonusNum()
  - checkNumRange() 실행

- [V] 구입 금액 입력받기 : inputMoney()

  - 예외 발생 시(1000원으로 나누어떨어지지 않는 경우) throw new error("[ERROR] 잘못된 금액입니다.")

- [V] 로또 발행 : publishLotto()

  - 구입 금액에 해당하는 만큼의 로또 발행 (로또 1장 : 1000원)

- [V] 로또 출력 : printLotto()
- [V] 로또 내 번호 조건 내 문자열로 변환하여 리턴하는 메서드 : Lotto클래스 내 getNumString()

- [V] 당첨 여부 체크 : checkHit()

  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

- [] 당첨 내역 출력 : printHit()

  - 낮은 등수부터 출력
  - 출력 포맷은 다음과 같음
    - "3개 일치 (5,000원) - N개
      4개 일치 (50,000원) - N개
      5개 일치 (1,500,000원) - N개
      5개 일치, 보너스 볼 일치 (30,000,000원) - N개
      6개 일치 (2,000,000,000원) - N개"

- [] 수익률 출력 : printIncrease()
  - 당첨금 / 구매금액
  - 소수점 둘째 자리에서 반올림 \_\_.n%
  - 출력 포맷 "총 수익률은 \__._%입니다."
