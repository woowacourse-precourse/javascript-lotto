미션 - 로또

1. [v]사용자 번호 입력
   - 중복되지 않는 숫자 6개 선택 [1 ~ 45]
   - 잘못된 값 입력시 throw
     (예외): 중복, 숫자가 아닌 값, 6개가 아닌 경우, 쉼표로 구분하지 않는 경우
   - 에러 메시지 출력 [ERROR]에러 메시지
   - 종료
2. 당첨 번호 선택 [1 ~ 45]
   - 중복되지 않는 숫자 6개
   - 보너스 번호 1개 : 보너스 번호를 구분
3. 당첨 조건
   - 5등: 3개 번호 일치 / 5,000원
   - 4등: 4개 번호 일치 / 50,000원
   - 3등: 5개 번호 일치 / 1,500,000원
   - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
   - 1등: 6개 번호 일치 / 2,000,000,000원
4. [v]로또 구입 금액만큼 위의 1번을 반복, 한장에 1천원, 천원 단위로 입력
   - 예외처리 (천원으로 나누어 떨어지지 않는 경우, 숫자가 아닌 값)
     [k 번 반복]
   - 구매한 로또 수량 출력
   - 번호 6개 출력
   - 오름차순 정렬
5. 비교
   compare
   - 당첨 번호와 구매 번호를 비교
   - 당첨 내역 출력
   - 수익률 출력 (소수점 둘째 자리에서 반올림)

### 오류 문구

[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
[ERROR] 중복 문자가 존재합니다.
[ERROR] 숫자가 아닌 값이 존재합니다.
[ERROR] 로또 번호는 6개를 선택하셔야 합니다.
[ERROR] 쉼표로 구분하지 않으셨습니다.
[ERROR] 천원으로 나누어 떨어지지 않는 금액입니다.

-> 함수

### 출력 문구

INPUT_PURCHASE_AMOUNT_MESSAGE = '구입금액을 입력해 주세요.'
PURCHASED_MESSAGE = '개를 구매했습니다.'
INPUT_WINNING_NUMBER_MESSAGE = '당첨 번호를 입력해 주세요.'
INPUT_BONUS_NUMBER_MESSAGE = '보너스 번호를 입력해 주세요.'
WINNING_STATS_MESSAGE = '당첨 통계'
MATCHES_THREE_NUMBERS_MESSAGE = '3개 일치 (5,000원) - k개'
MATCHES_THREE_NUMBERS_MESSAGE = '4개 일치 (50,000원) - k개'
MATCHES_THREE_NUMBERS_MESSAGE = '5개 일치 (1,500,000원) - k개'
MATCHES_THREE_NUMBERS_MESSAGE = '5개 일치, 보너스 볼 일치 (30,000,000원) - k개'
MATCHES_THREE_NUMBERS_MESSAGE = '6개 일치 (2,000,000,000원) - k개'
TOTAL_REVENUE_MESSAGE = '총 수익률은 k%입니다.'
DIVISION_LINE = '--'

### 상수

MIN_NUMBER_RANGE = 1;
MAX_NUMBER_RANGE = 45;
NUMBERS_LENGTH = 6;
PERMISSIBLE_UNITS = 1000;
