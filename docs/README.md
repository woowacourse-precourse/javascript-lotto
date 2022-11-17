# **💰로또 구현하기**

![lottery](https://d.newsweek.com/en/full/1274432/mega-millions-results-12-28-19.webp?w=737&f=b454933a7d77fbed8a10d7d7a84ebfff)
요약: 6개의 번호를 받아, 6개의 당첨번호 + 1개의 보너스 번호와 비교해 결과를 출력한다! 
<br/>
<br/>
## **📝 미션 설명**
우아한 테크코스 3주차 과제는 로또 게임을 구현하는 것이다.   
참가자가 돈을 지불하고 게임을 시작하면, 구매한 로또 당 랜덤으로 1-45 사이 6개씩 숫자가 뽑힌다.   
이후 당첨 번호 6개와 보너스 번호 1개를 입력하면, 이전 단계에서 랜덤으로 뽑았던 숫자들과 대조해 결과를 출력하고, 수익률을 계산해서 알려준다.

<br/>

## **📌 기능 목록**
- [x] get user's payment amount
    - [x] check if the payment amount is valid (throw error when invalid e.g. not a multiple of 1000 won)
- [x] generate 6 random guessed numbers per ticket (from 1-45 without duplicates in ascending order)
- [x] print the number of purchased tickets and 6 random numbers per ticket
- [x] get winning numbers and compare with the guessed numbers
    - [x] winning numbers: 6 numbers (from 1-45 without duplicates per ticket) separated with a comma (throw error when invalid)
    - [x] count the number of matched numbers per ticket after comparison
- [x] get bonus number and compare with the guessed numbers
    - [x] bonus number: 1 number (from 1-45 without duplicates per ticket) (throw error when invalid)
    - [x] check bonus number only for tickets with 5 guessed number matches and return true/false
          return null for tickets with less than 5 guessed number matches
- [x] calculate win stats 
- [x] calculate earning rate by dividing prize money by payment amount and rounding to one decimal place
    - [x] round off to one decimal place with precision  
          cf. [precise round off in JS](https://studyingazae.tistory.com/155)
- [x] print out win stats and earning rate

<br/>

## **📁 파일 구성**

javascript-lotto  
**┣ src**  
┃ ┣ App.js  
┃ ┣ Bonus.js  
┃ ┣ Constants.js  
┃ ┣ Game.js  
┃ ┣ Lotto.js  
┃ ┗ Payment.js  
**┣ __tests__**  
┃ ┣ ApplicationTest.js  
┃ ┣ BonusTest.js  
┃ ┣ LottoTest.js  
┗ ┗ PaymentTest.js

<br/>

**src 폴더**  
- App.js: 프로그램을 구동하는 메인 파일
- Game.js: 실제 게임을 진행하는 파일
- Lotto.js: 당첨 번호에 오류가 있는지 검사하는 파일
- Bonus.js: 보너스 번호에 오류가 있는지 검사하는 파일
- Payment.js: 지불 금액에 오류가 있는지 검사하는 파일
- Constants.js: 상수와 메시지를 저장하는 파일

<br/>

**__tests__ 폴더**  
- ApplicationTest.js: App.js의 실행을 테스트하는 파일
- BonusTest.js: Bonus.js를 테스트하는 파일
- GameTest.js: Game.js를 테스트하는 파일
- LottoTest.js: Lotto.js를 테스트하는 파일
- PaymentTest.js: Payment.js를 테스트하는 파일