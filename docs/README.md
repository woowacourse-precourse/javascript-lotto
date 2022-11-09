# 구현할 기능 목록

## lotte 메서드 정의
- init() 중복되지 않는 6개의 숫자를 뽑아 numbers를 생성한 후 할당한다.
- validate(numbers) numbers와 winningNumber를 비교하여 포함된 숫자의 개수를 리턴
## App 메서드 정의
- play() 시작
- setMoney() 돈을 입력받아 money에 저장한다. buy를 호출한다.
- buy(money) 입력받은 돈으로 로또를 구매한다. setWinningNumber를 호출한다
- setWinningNumber() 당첨번호를 입력받아 winningNumber에 할당한다. setBonusNumber을 호출한다.
- setBonusNumber() 보너스 번호를 입력받고 result를 호출한다.
- result 로또번호들과 대조하여 당첨 내역과 수익률을 출력한다.