# 구현할 기능 목록

## Lotte 메서드 정의
- Lotte(numbers) Lotte생성 validate호출
- validate(numbers) 입력된 numbers를 활용하여 데이터를 this.#numbers 를 생성
- toString() #numbers를 문자열로 변환 하여 리턴
- generateNumObject() 1 ~ 45 까지의 number: boolean 으로 이루어진 Object를 생성하여 리턴
- countingWin(winNumbers) 맞춘 숫자의 개수를 세어준후 그 개수를 리턴
- rank(winNumbers, bonusNumber) #number의 숫자와 당첨숫자, 보너스 숫자를 이용하여 등수를 리턴

## App 메서드 정의
1.  play() 시작
2. setMoney() 돈을 입력받아 money에 저장한다. setWinNumbers를 호출한다.
3. setWinNumbers() 당첨숫자들을 입력받는다.  setBonusNumber()를 호출한다.
4. setBonusNumber() 보너스 숫자를 입력받는다 buy()를 호출한다.
5. buy() 로또를 구매하고 개수를 출력한다. viewLottes()를 호출한다.
   1. viewLottes() 구매한 로또의 숫자들을 보여준다.
6. result() 당첨 결과들을 출력한다. earningRate()를 호출한다.
7. earningRate() 수익률을 출력한다. 종료한다.\