## 로또 기능 목록

1. 로또 구입 금액 입력

- 1,000원 단위 아니면 예외처리

2. 당첨 번호 입력

- 쉼표 기준으로 구분

3. 보너스 번호 입력

4. 당첨 결과 계산

5. 당첨 금액 및 수익률 계산

## git commit 정리

- feat : 새로운 기능을 추가할 경우
- fix : 버그를 고친 경우
- docs : 문서를 수정한 경우
- style : 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- refactor : 프로덕션 코드 리팩토링
- test: 테스트 추가, 테스트 리팩토링 (코드 변경 X)
- chore : 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우 (코드 변경 X)

  <br/>

- design : CSS 등 사용자 UI 디자인 변경
- comment : 필요한 주석 추가 및 변경
- rename : 파일 혹은 폴더명을 수정하는 경우
- remove : 사용하지 않는 파일 혹은 폴더를 삭제하는 경우

## 기능 구현 과정 작성

1. 모듈 선언

- $npm i @woowacourse/mission-utils
- MissionUtils 라이브러리에서 제공하는 Console API 추가

2. test code 작성하여 Jest 사용

- $npm i -D jest
- $npm test로 테스트 코드 실행
- Jest : All-In-One 테스팅 라이브러리
- test.js로 끝나거나 _test_ 디렉토리 내 모든 파일들을 test 파일로 인식

<br />
- FeatureUnitTest.js 파일 추가
