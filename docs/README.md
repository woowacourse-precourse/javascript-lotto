# 로또 구현하기

## 미션 설명
우아한 테크코스 3주차 과제는 로또 게임을 구현하는 것이다. 
참가자가 돈을 지불하고 게임을 시작하면, 구매한 로또 당 랜덤으로 당첨번호 6개의 숫자를 뽑는다. 
참가자가 예상한 당첨 번호 6개와 보너스 번호 1개를 입력하면, 실제 당첨번호와 대조해 결과를 출력하고, 수익률을 계산해서 알려준다.

## 기능 목록
- [ ] get user's payment amount
    - [ ] check if the payment amount is valid (error when the amount is not a multiple of 1000 won)
- [ ] generate 6 random winning number per ticket (from 1-45 without duplicates)
- [ ] print the number of purchased tickets and winning number per ticket
- [ ] get user's number
    - [ ] 6 numbers (from 1-45 without duplicates per ticket) separated with a comma
    - [ ] 1 bonus number (from 1-45 without duplicates per ticket)
- [ ] calculate prize money by comparing winning number and user's number
- [ ] calculate earning rate by dividing prize money by payment amount and rounding to one decimal place
- [ ] print prize money and earning rate