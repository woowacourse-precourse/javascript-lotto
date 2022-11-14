# 로또

## 📜 기능 요구 사항
- 로또 게임 기능을 구현해야 한다. 로또 게임은 아래와 같은 규칙으로 진행된다.
  - `로또 번호의 숫자 범위는 1~45까지`이다.
  - 1개의 로또를 발행할 때 `중복되지 않는 6개의 숫자`를 뽑는다.
  - 당첨 번호 추첨 시 `중복되지 않는 숫자 6개와 보너스 번호 1개`를 뽑는다.
  - 당첨은 `1등부터 5등`까지 있다. 당첨 기준과 금액은 아래와 같다.
      - 1등: 6개 번호 일치 / 2,000,000,000원
      - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
      - 3등: 5개 번호 일치 / 1,500,000원
      - 4등: 4개 번호 일치 / 50,000원
      - 5등: 3개 번호 일치 / 5,000원
- `로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행`해야 한다.
- `로또 1장`의 가격은 `1,000원`이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 `당첨 내역 및 수익률을 출력`하고 `로또 게임을 종료`한다.
- 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.
---

## 📜 기능
✅ : 완료,  ❌ : 미완료  
  
[✅] ✏️ 로또 구입 금액을 입력 받는다. `Person.buy()`

[✅] ✏️ 로또 구입 금액 값이 올바른 값인지 판단한다. `SYSTEM.isCorrectCash(cash)`
- 1,000원으로 나누어 떨어지지 않는 경우 예외 발생
  - `[ERROR] 구입 금액은 1000원 단위여야합니다.`
- 구입 금액은 0 이하의 숫자이면 예외 발생
  - `[ERROR] 입력값은 0보다 큰 숫자여야 합니다.`

[✅] ✏️ 구입 개수 만큼 로토를 발행한다. `SYSTEM.publishLotto(cash)` 
- 로또 번호는 구입 개수만큼 자동으로 생성 `SYSTEM.autoWrite(maxCount)`
  - 로또 개별 생성 `SYSTEM.makeLotto()`
- 로또 번호는 `오름차순으로 정렬` `SYSTEM.sortLotto(numbers)`

[✅] ✏️ 발행한 로또 수량 및 번호를 출력한다. `SYSTEM.printLottos(lottos, maxCount)`

    
[✅] ✏️ 당첨 번호를 입력 받는다. `SYSTEMS.makeWinningLotto(lottos, cash)` 
- 번호는 쉼표(,)를 기준으로 구분  
  
[✅] ✏️ 입력한 당첨번호가 올바른 값인지 판단한다. `Lottos.validate()`
- 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외 발생  
  - `[ERROR] 로또 번호는 총 6개여야 합니다.`
  - `[ERROR] 중복된 숫자가 포함되어있습니다.`
  - `[ERROR] 숫자가 아닌 값이 포함되어있습니다.`
  - `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`
  
[✅] ✏️ 보너스 번호를 입력 받는다. `SYSTEMS.makeBonusNumber(lottos, winningLotto, cash)`

[✅] ✏️ 입력한 보너스 번호가 올바른 값인지 판단한다. `SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto)`
- 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외 발생
  - `[ERROR] 보너스 번호는 1부터 45 사이의 숫자 하나여야 합니다.`
  - `[ERROR] 당첨번호에 이미 포함되어있는 숫자입니다.`
  - `[ERROR] 숫자가 아닌 값이 포함되어있습니다.`
  - `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`

[✅] ✏️당첨 내역을 출력한다. `SYSTEM.printResult(lottos, winningLotto, bonusNumber, cash)`  
 &nbsp;&nbsp;&nbsp;&nbsp; [✅] ✏️ 당첨 통계를 출력한다. `SYSTEM.printWinningHistory(results)`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [✅] ✏️  개별 로또의 등수를 값을 생성하여 반환한다. `SYSTEM.compare(lotto, winningLotto, bonusNumber)`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [✅] ✏️ 당첨 결과 데이터를 저장하는 배열을 생성한다. `SYSTEM.makeResults(lottos, winningLotto, bonusNumber)`  



 &nbsp;&nbsp;&nbsp;&nbsp; [✅] ✏️ 수익율을 출력한다. `SYSTEM.printResult(lottos, winningLotto, bonusNumber, cash)`
- 수익률이 `4자리 이상일 경우 단위별로 쉼표를 추가`
  - (ex. 100.0%, 51.5%, 1,000,000.0%)  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [✅] 수익률을 계산하여 반환한다. `SYSTEM.calulateRate(cash, result)`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수익률은 `소수점 둘째 자리에서 반올림` 

---  
## 📜실행 결과 예시
> 구입금액을 입력해 주세요.  
8000  
>  
> 8개를 구매했습니다.  
> [8, 21, 23, 41, 42, 43]  
> [3, 5, 11, 16, 32, 38]  
> [7, 11, 16, 35, 36, 44]  
> [1, 8, 11, 31, 41, 42]  
> [13, 14, 16, 38, 42, 45]  
> [7, 11, 30, 40, 42, 43]  
> [2, 13, 22, 32, 38, 45]  
> [1, 3, 5, 14, 22, 45]  
>   
> 당첨 번호를 입력해 주세요.  
> 1,2,3,4,5,6  
>   
> 보너스 번호를 입력해 주세요.  
> 7  
>   
> 당첨 통계  
> &#45;&#45;&#45;   
> 3개 일치 (5,000원) - 1개  
> 4개 일치 (50,000원) - 0개  
> 5개 일치 (1,500,000원) - 0개  
> 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개  
> 6개 일치 (2,000,000,000원) - 0개  
> 총 수익률은 62.5%입니다.  