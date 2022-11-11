# Features

구현할 기능을 기술합니다.

## 초기 세팅

- [ ] 로또 게임 관련 상수 및 문구 config.js에 명시

## 게임

- [ ] 로또 티켓 생성 : generateTicket()
- [ ] 로또 당첨 내역 확인: checkWinningTicket()
- [ ] 로또 수익률 통계 생성: generateTicketStat()

## 게임 입출력

- [ ] 로또 구입 금액 입력: getTicketBudget()
    - [ ] 구입 입출력 검증: validateTicketBudget()
- [ ] 당첨 번호 입력: getTargetNumber()
    - [ ] 당첨 번호 입력 검증: validateTargetNumber()
- [ ] 보너스 번호 입력: getBonusNumber()
    - [ ] 보너스 번호 입력 검증: validateBonueNumber()
- [ ] 로또 티켓 출력: printTicket()
- [ ] 통계 출력: printTicketStat()

## 예외 처리

- [ ] 입력 길이 오류: INVALID_INPUT_LENGTH
- [ ] 입력 타입 오류: INVALID_INPUT_TYPE
- [ ] 입력값 범위 오류: INVALID_INPUT_RANGE

## 테스트 구현

- [ ] 구입 입츨력 검증 테스트
- [ ] 당첨 번호 입력 검증 테스트
- [ ] 보너스 번호 입력 검증 테스트
- [ ] 로또 당첨 내역 생성 검증
- [ ] 로또 수익률이 올바른지 검증