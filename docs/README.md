### 기능목록
App Class
역할 : 게임을 시작하는 클래스
함수 : 게임을 시작하는 함수 (play)(#1)


Game Class
역할 : 게임 진행을 관리하는 클래스 
함수 : 생성자 함수 (constructor)(#1)
       게임 시작 함수 (play)(#2)
       사용자의 복권 구입 금액을 받는 함수 (getUserMoney)(#3) 
       (#3)에 대한 콜백 함수이자 다음 입력 전까지 메인역할을 하는 함수 (start)(#4)
       복권 구입 금액의 유효성을 판단하는 함수 (checkMoney)(#5)
       복권 갯수를 출력하는 함수 (printUserLottoCount)(#6)
       유저의 복권을 출력하는 함수 (printUserLotto)(#7)
       이후의 입력을 지시하는 함수 (getAnotherInput)(#8)
       당첨 번호를 입력하는 함수 (inputCorrectNuumbers)(#9)
       당첨 번호를 검사하고 저장하는 함수 (setCorrectNumber)(#10)
       보너스 번호를 입력하는 함수 (inputBonusNumber)(#11)
       보너스 번호를 검사하는 함수 (checkBonusNumber)(#12)
       보너스 검사를 검사하고 저장하는 함수 (setBonusNumer)(#13)
       통계를 계산하는 함수 (calculateStatics)(#14)
       당첨 갯수와 등수를 출력하는 함수 (#printScore)(#15)
       수익률을 출력하는 함수 (printProfit)(#16)


InputOutput Class
역할: Api를 통한 입출력을 관리하는 클래스 
함수: 입력 함수 (input)(#1)
      출력 함수 (output)(#2)
      종료 함수 (close)(#3)


User Class
역할 : 유저에 대한 정보를 관리하는 클래스 
함수 : 생성자 함수 (constructor)(#1)
       유저가 산 로또 개수를 반환하는 함수 (getUserLottoCount)(#2)
       유저 로또 개수를 저장하는 함수 (setUserLottoCount) (#3)
       유저 로또를 반환하는 함수 (getUserLotto)(#4)
       유저 로또를 저장하는 함수 (setUserLotto)(#5)
       유저 로또를 생성하는 함수 (makeUserLotto)(#6)
       유저 로또 하나를 생성하는 함수 (makeUserRandomOneLotto)(#6)


Lotto Class 
역할 : 유저가 입력하는 당첨 번호를 관리하는 클래스
함수 : 생성자 함수 (constructor)(#1)
       당첨 번호 유효성 검사 함수 (validate)(#2)
       당첨번호를 반환하는 함수 (getCorrectNumber)(#3)


Message Class
역할 : 출력문들을 관리하는 클래스
함수 : 에러 상수 (#1)
       유저 로또 구매 갯수 출력 함수 (getLottoCountMessage)(#2)
       유저 수익률 출력 함수 (getProfitMessage)(#3)
       유저 당첨 통계 출력 함수 (getStaticsMessage)(#4)

Score Class
역할 : 유저의 점수 계산을 위한 데이터와 점수 계산 관리 클래스
함수 : 생성자 함수 (constructor)(#1)
       유저 로또 저장 함수 (setUserLotto)(#2)
       당첨 점수 저장 함수 (setCorrectNumber)(#3)
       유저 로또 구매 금액 저장 함수 (setMoney)(#4)
       유저 수익률 저장 함수 (setProfit)(#5)
       보너스 점수 저장 함수 (setBonusNumber)(#6)
       유저 로또 반환 함수 (getCorrectNumber)(#7)
       유저 점수 반환 함수 (getScore)(#8)
       유저 수익률 반환 함수 (getProfit)(#9)
       유저 각점수 계산 함수 (calculateMatchCount)(#10)
       유저 총 점수 계산 함수 (calculateCount)(#11)
       유저가 번 돈의 합을 계산하는 함수 (calculateSum)(#12)
       유저 수익률 계산 함수 (calculateProfit)(#13)
       당첨번호에 보너스 번호가 포함되어있는지 확인하는 함수 (#14)
       등수를 계산하는 클래스 (calculateGrade) (#15) 

Calculate Class
역할 : 간단한 계산을 해주는 클래스 
함수 : 로또 갯수 계산 함수 (calculateLottoCount)(#1)
       돈을 1000으로 나눈 나머지 계산 함수 (divideByOneThousand)(#2)
       수익률 계산 함수 (calculateProfit)(#3)
       유저 로또 정렬 함수 (sortUserLotto)(#4)
       합 계산 함수 (calculateSum)(#5)


      

       