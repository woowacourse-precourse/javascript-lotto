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
* [ ] 비교하기  
    * [ ] 발행된 로또 번호와 당첨 번호 비교하기  
        * [ ] 3개가 일치하는 경우  
        * [ ] 4개가 일치하는 경우  
        * [ ] 5개가 일차하는 경우  
            * [ ] 5개가 일치함과 동시에 보너스 볼이 일치하는 경우  
        * [ ] 6개가 일치하는 경우  
    * [ ] 총 수익률 계산하기  
        * [ ] 수익률 계산하기(소수점 둘째 자리에서 반올림 예시) 총 수익률은 62.5%입니다.)  
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

## 마무리
* [ ] 함수 세분화하기 
    * [ ] 로또 발행하기
    * [ ] 당첨번호 및 보너스 번호 입력받기
    * [ ] 비교하기
    * [ ] 예외사항



## 참고사항
[JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)
[커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)  
[MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)
[Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)
