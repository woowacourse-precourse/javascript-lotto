# 로또 구현하기

// 마크다운 문법 보고 보완해보기

## 미션 설명
우아한 테크코스 3주차 과제는 로또 게임을 구현하는 것이다. 
참가자가 돈을 지불하고 게임을 시작하면, 구매한 로또 당 랜덤으로 6개씩 숫자를 뽑는다. 
이후 당첨 번호 6개와 보너스 번호 1개를 입력하면, 이전 단계에서 랜덤으로 뽑았던 숫자들과 대조해 결과를 출력하고, 수익률을 계산해서 알려준다.

## 기능 목록
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
- [x] print win stats and earning rate