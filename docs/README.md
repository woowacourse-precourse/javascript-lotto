# [로또 미션]

### 

### :computer:  기능 정리

----

### App.js

- Play()
- money()
  - 로또 구입 금액
- buyLotto()
  - 로또 구입
- createLottoNumber()
  - 로또 번호 생성 및 유효성 검사

- lottoNumbers()
  - 로또 번호 출력
- winNumber()
  - 당첨번호 입력
- bonusNumber()
  - 보너스 번호 입력
- statistics()
  - 로또 번호 등수 확인
- printResult()
  - 총 수익 계산하기
- printSwitch()
  - 등수 출력

- total()
  - 총 수익 금액 확인
- totalSwitch()
  - 수익 금액 별 switch문



### Check.js

- checkNumbers()
  - 금액이 숫자로 이루어져있는지 확인 || Error 출력
- buyLotto()
  - 로또 구입 장수 return



### Lotto.js

- setCheck() & checkNumber()
  - 중복 제거후 배열의 길이가 6이 아닐 때 Error 출력



### Statistics.js

- checkBonus()
  - 2등 과 3등 분류
- checkRank()
  - 로또 별 등수 확인
- checkNumber()
  - 로또 번호가 몇개가 맞았는지 확인
- checkMatch()
  - 로또 결과 확인