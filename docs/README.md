# 우아한프리코스 3주차 미션

## 미션 - 로또

입력된 금액 만큼의 로또를 구입해 로또를 발행하고, 당첨번호와 보너스 번호를 입력한다.  
구입한 로또와 당첨번호를 비교하여 당첨 내역과 수익률을 출력하는 게임.

[깃허브 저장소](https://github.com/woowacourse-precourse/javascript-lotto)

## 기능 목록
* [x] 로또 발행하기  
    * [x] 금액 입력받기  
    * [x] 입력된 금액으로 몇장의 로또를 살 수 있는가? howManyLotto()  
    * [x] 금액 만큼의 로또 발행 lottoNumberPackage()  
    * [x] 나열된 로또 번호는 오름차순으로 정리한다.  
---
* [x] 당첨번호 및 보너스 번호 입력받기  
    * [x] 당첨번호 입력받기  
    * [x] 보너스 번호 입력받기  
---
* [x] 비교하기  
    * [x] 발행된 로또 번호와 당첨 번호 비교하기  
        * [x] 3개가 일치하는 경우  
        * [x] 4개가 일치하는 경우  
        * [x] 5개가 일차하는 경우  
            * [x] 5개가 일치함과 동시에 보너스 볼이 일치하는 경우  
        * [x] 6개가 일치하는 경우  
---
* [x] 결과 출력하기
---
* [x] 총 수익률 계산하기  
    * [x] 수익률 계산하기(소수점 둘째 자리에서 반올림 예시) 총 수익률은 62.5%입니다.)  
---
* [x] 예외사항
    * [x] 로또 발행시 예외사항
        * [x] 입력된 값이 숫자인지 아닌지 검사
        * [x] 입력된 값이 1000원 단위로 나누어 떨어지는지 검사 
    * [x] 당첨번호 입력 받을시 예외사항
        * [x] 값이 숫자인지 검사
        * [x] 1 ~ 45 사이의 수를 입력 했는지 검사
        * [x] 중복되었는지 검사
        * [x] 쉼표에 맞춰 잘 입력하였는지 검사
        * [x] 6개의 숫자를 잘 입력하였는지 검사
    * [x] 보너스 번호 입력 받을시 예외사항
        * [x] 당첨 번호와 중복되는지 검사
        * [x] 1 ~ 45 사이의 수를 입력 했는지 검사
        * [x] 값이 한개인지 검사
        * [x] 값이 숫자인지 검사

## 기능 테스트 목록
* [x] LottoTest.js
    * [x] howManyLotto 로또를 몇장 살수있는지 검사
    * [x] sortLottoNumber 정렬 기능 검사
    * [x] isItNumber 돈이 들어왔는지 검사
    * [x] rightAmount 천원단위로 들어왔는지 검사
---
* [x] ValidationTest.js
    * [x] itThatRightFormat 올바른 형식인지 검사
    * [x] isThatSix 로또 번호 갯수 검사
    * [x] numberNet 1과 45 사이인지 검사(배열일때)
    * [x] isThatDuplicate 중복되는지 검사
    * [x] itThatNumber 숫자인지 검사
    * [x] singleNumberNet 1과 45 사이인지 검사(1개의 숫자일때)
    * [x] isThatInclude 당첨번호와 값이 중복되는지 검사
---
* [ ] CompareLottoTest.js
    * [x] count 당첨 번호와 로또 대조 결과 검사
    * [x] countBonus 로또와 보너스 대조 결과 검사
    * [ ] result 몇등에 몇번 당첨됐는지 확인 검사
    * [ ] number 몇개 당첨됐고 보너스 점수는 맞았는지 확인 검사
    * [ ] totalMoney 총 당첨 상금 계산 검사

## 마무리
* [ ] 함수 세분화하기 
    * [ ] 로또 발행하기 Lotto
    * [ ] 당첨번호 및 보너스 번호 입력받기 App
    * [ ] 비교하기 CompareLotto
    * [ ] 예외사항 Validation



## 참고사항
[JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)  
[커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)  
[MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)  
[Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)
