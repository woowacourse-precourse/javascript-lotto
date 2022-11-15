## 🔎 미션 - 로또

## 🐒 프로젝트 소개

---

사용자에게 구입 금액을 입력받아 해당 금액에 맞는 로또 수량을 구입 후 랜덤으로 생성된 사용자 로또 번호를 입력 받은 당첨 번호, 보너스 번호와 비교하여 당첨 결과를 출력한다.

### 💻 기능 목록

---

- 구입 금액을 입력 받기

  - 에러 발생
    - 숫자가 아닌 경우
    - 소수점이 있는 경우

- 해당 구입 금액으로 살 수 있는 로또 수량 구하기

- MissionUtils 라이브러리 사용하여 발행한 로또 번호 출력하기

  - 에러 발생
    - 숫자가 아닌 경우
    - 6자리가 아닌 경우
    - 1~45 정수 아닐 경우

- 당첨 번호 입력받기

  - 에러 발생
    - 숫자가 아닌 경우
    - 6자리가 아닌 경우
    - 1~45 정수 아닐 경우

- 보너스 번호 입력받기

  - 에러 발생
    - 1~45 정수 아닐 경우
    - 하나 이상의 정수일경우

- 당첨 내역 출력
  - 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
  - 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

### ✏️ 사용 라이브러리

---

- [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Random` 및 `Console` API를 사용하여 구현
  - Random 값 추출은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickUniqueNumbersInRange()`를 활용
  - 사용자의 값을 입력 받고 출력하기 위해서 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine`, `Console.print`를 활용

### 🔨 환경 설정

---

- prettier
- airbnb style guide

### 🥸 테스트 실행 가이드

---

- 테스트 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
npm test
```
