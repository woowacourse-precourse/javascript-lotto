# Features

구현할 기능을 기술합니다.

## 초기 세팅

- [x] 로또 게임 관련 상수 및 문구 config.js에 명시

## 게임

- [x] 로또 티켓 생성 : generateLotto()
- [x] 로또 당첨 내역 확인: checkWinningLottoRank()
- [x] 로또 수익률 통계 생성: generateLottoStat()

## 게임 입출력

- [x] 로또 구입 금액 입력: getLottoBudget()
- [x] 당첨 번호 입력: getTargetNumber()
- [x] 보너스 번호 입력: getBonusNumber()
- [x] 로또 티켓 getter: get numbers()

- [x] 구매 로또 출력: printLottos()
- [x] 통계 출력: generatePhrase()
- [x] 수익률 생성: generateLottoProfit()
- [x] 통계 생성: generateLottoStatPhrase()

## 입출력 검증

- [x] 구입 입출력 검증: validateLottoBudget()
- [x] 당첨 번호 입력 검증: validateTargetNumber()
- [x] 보너스 번호 입력 검증: validateBonusNumber()
- [x] 보너스 번호와 당첨 번호가 겹치지 않는지 검증: validateBonusNumberNotInLottoNumber()
- [x] game을 성공적으로 종료: endGame()

## 연동

- [x] Game 클래스가 Lotto 클래스 사용하게 변경
- [x] Rank 클래스가 Lotto 클래스 사용하게 변경
- [x] Rank 클래스 Game 내 삽입: generateLottoRanks()
- [x] App 클래스에 Input 적용
- [x] App 클래스에 Game 적용

## 예외 처리

- [x] 구입 입력 오류
- [x] 당첨번호 입력 오류
- [x] 보너스번호 입력 오류
- [x] 보너스번호와 당첨번호가 겹치는 오류

## 테스트 구현

- [x] 로또 티켓 정상 생성 테스트
- [ ] 당첨 번호 입력 검증 테스트
- [ ] 보너스 번호 입력 검증 테스트
- [ ] 로또 통계가 올바른지 테스트
