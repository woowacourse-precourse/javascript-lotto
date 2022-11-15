<h1 align="middle">🎰 로또</h1>

# 🔍 규칙 설명

1️⃣ 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 `로또를 발행`함  
2️⃣ `당첨 번호`와 `보너스 번호`를 입력함  
3️⃣ 사용자의 로또 번호와 당첨 번호를 비교하여 `당첨 내역`과 `수익률`을 출력하고 종료함  
</br>

로또 1장의 가격은 `1,000원`  
로또 번호의 숫자 범위는 `1 ~ 45`  
1개의 로또를 발행 시, `중복되지 않는 6개의 숫자`    
`당첨 번호 6개`와 `보너스 번호 1개` 역시 __중복 X__    
당첨은 `1등부터 5등`까지  
- 1등: 6개 번호 일치 / 2,000,000,000원  
- 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원  
- 3등: 5개 번호 일치 / 1,500,000원  
- 4등: 4개 번호 일치 / 50,000원  
- 5등: 3개 번호 일치 / 5,000원  
</br>

❗❗ 사용자가 잘못된 값을 입력할 경우
- `throw`문을 사용해 예외 발생시키기
- "[ERROR]"로 시작하는 에러 메시지 출력 후 종료하기

</br>

# 📝 기능 목록

대략적인 흐름
- Machine에서 구입 금액을 입력 받고 금액에 따라 로또를 발행함  
- 발행한 로또는 User에게 넘겨주고, Manager를 호출함
- Manager는 당첨 번호와 보너스 번호를 선정하고(= 입력 받아서) Analysis에 넘겨줌
- Analysis는 유저의 로또 번호와 당첨 번호 및 보너스 번호를 비교하여 결과를 분석하고 보여줌

## [🔵] 구입 금액 입력 - `LottoMachine`
### [✅] 구입 금액 입력받기 - LottoMachine.inputMoney()
1,000원 단위로 구입 금액을 입력받는다.  
**MissionUtils 라이브러리**에서 제공하는 `Console.readLine()`를 활용하여 사용자에게 구입 금액을 입력받는다.  

### [✅] 구입 금액 입력값 확인하기 - LottoMachine.checkInputMoney()   
❗ 1,000원으로 나누어떨어지지 않는 경우 예외 처리를 한다.  
`throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.

</br>

## [🔵] 로또 발행 - `LottoMachine`.makeLotto()   
구입 금액에 해당하는 만큼 로또를 발행한다.  
발행한 로또 수량과 번호를 출력한다. 로또 번호는 오름차순으로 정렬한다.
### [✅] 로또 구매 수량 출력하기 - LottoMachine.printLottoAmount()  
**MissionUtils 라이브러리**에서 제공하는 `Console.print()`를 활용하여 출력한다.

### [✅] 로또 번호 생성하기 - LottoMachine.makeLottoNumber()  
Random 값은 **MissionUtils 라이브러리**의 `Random.pickUniqueNumbersInRange()`를 활용한다.  
1부터 45 범위의 숫자를 중복 없이 6개 생성한다.

### [✅] 로또 번호 정렬하기 - LottoMachine.sortLottoNumber()
생성된 6개의 번호를 오름차순으로 정렬한다.

### [✅] 로또 번호 출력하기 - LottoMachine.printLottoNumber()
**MissionUtils 라이브러리**에서 제공하는 `Console.print()`를 활용하여 출력한다.

### [✅] 로또 발행하기 - LottoMachine.publishLotto()
위의 과정을 통해 생성된 로또를 사용자에게 발행한다.

</br>

## [🔵] 당첨 번호와 보너스 번호 입력 - `LottoManager` 
### [✅] 당첨 번호 입력받기 - LottoManager.inputWinningNumbers()
**MissionUtils 라이브러리**에서 제공하는 `Console.readLine()`를 활용하여 입력받는다.   
서로 다른 6개의 번호를 입력받으며 쉼표(,)를 기준으로 구분한다.

### [✅] 당첨 번호 확인하기 - LottoManager.checkInputWinningNumbers()   
❗ 잘못된 값을 입력할 경우 예외 처리를 한다.  
- 숫자가 아닌 경우
- 6개를 입력하지 않은 경우
- 중복이 있는 경우
- 1부터 45사이의 값이 아닌 경우 - LottoManager.filterRange()
  
`throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.

### [✅] 보너스 번호 입력받기 - LottoManager.inputBonusNumber()  
**MissionUtils 라이브러리**에서 제공하는 `Console.readLine()`를 활용하여 입력받는다.   

### [✅] 보너스 번호 확인하기 - LottoManager.checkInputBonusNumber()     
❗ 잘못된 값을 입력할 경우 예외 처리를 한다.  
- 숫자가 아닌 경우
- 1부터 45사이의 값이 아닌 경우    
- 당첨 번호와 중복인 경우

`throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.

</br>

## [🔵] 당첨 결과 분석 - `LottoCalculator`  
### [✅] 로또 번호와 당첨 번호 비교하기 - LottoCalculator.compareNumber()
로또 번호와 당첨 번호 중 몇 개가 일치하는지 확인한다.   
5개 일치 시, 추가로 보너스 번호와 일치하는지 확인한다.

### [✅] 당첨 결과 통계 내기 - LottoCalculator.calculateResult()  
비교 결과를 통해 1등 ~ 5등 결과 및 수익률을 통계 낸다.

### [✅] 당첨 결과 출력하기 - LottoCalculator.printResult()  
**MissionUtils 라이브러리**에서 제공하는 `Console.print()`를 활용하여 출력한다.

</br>

# 📌 클래스 분리
### Lotto
하나의 로또를 의미하는 클래스

### User
usersLottos라는 배열을 갖는 클래스  
발행한 로또들을 목록으로 가지고 있기 위함

### App
프로그램의 시작 클래스  
**LottoMachine 객체를 생성**하고 start()를 실행한다.

### LottoMachine
구입 금액을 입력받고 로또를 발행해주는 클래스  
**Lotto 객체를 생성**하고 **User객체의 usersLottos 배열**에 담는다.  
이후, LottoManager 객체에 **usersLottos 배열**을 할당하여 생성하고 start()를 실행한다.

### LottoManager
당첨 번호와 보너스 번호를 입력받는 클래스  
LottoCalculator 객체에 **usersLottos, 당첨 번호, 보너스 번호**를 할당하여 생성하고 calculate()를 실행한다.

### LottoCalculator
User의 로또 번호와 당첨 번호(및 보너스 번호)를 비교하여 결과를 분석하고 출력하는 클래스




