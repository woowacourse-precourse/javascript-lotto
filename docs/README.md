## 기능 구현 목록

#### 1. 구입금액 입력 기능 <code>payMoney()</code>

#### 2. 복권 갯수와 금액에 맞는 복권 랜덤 배열 출력 기능 <code>issueLottery()</code>

#### 3. 플레이어 당첨 번호 입력 기능 <code>askWinningNum()</code>

#### 4. 보너스 번호 입력 기능 <code>askBonusNum()</code>

#### 5. 당첨 번호와 복권 비교 통계자료 추출 기능 <code>getStatsResult()</code>
#### 6. 통계자료 출력 기능 <code>printResults()</code>

## 예외 처리 목록 

#### 1. 사용자의 투입 금액에 따른 예외처리 
  <pre><code>isRightMoney()</code> -  입력값이 0 혹은 1000원 단위인지 검사합니다.</pre>

#### 2. 사용자의 당첨번호 입력에 따른 예외처리
  <pre><code>isRightInput()</code> - 입력값으로 들어온 배열 길이가 6을 초과하는지 검사합니다. 
<code>isRightSingleNum()</code> - 입력값이 요소마다의 범위, 타입을 검사합니다.</pre>

#### 3. 사용자의 보너스 번호 입력에 따른 예외처리 
  <pre><code>isRightBonus()</code> - 입력값이 기존 당첨번호와 중복이 있는지 검사합니다.
<code>isRightSingleNum()</code> - 입력값의 범위, 타입을 검사합니다.</pre>

<hr>

## Flow Chart

<div align="center">
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbfVmt2%2FbtrQZzekG06%2FgdOjtFD8IxlsshXAJBGf5k%2Fimg.png" width="600px" >
</div>


<hr>

# 체크 리스트 

## 기능 요구사항 

- [x] : 사용자가 잘못된 값을 입력했을때, <code>[ERROR]</code>로 시작하는 에러 메시지를 출력 후 종료.

- [x] : 로또 구입 금액이 1000원으로 나누어 떨어지지 않는 다면 예외 처리
:
- [x] : 당첨번호 입력 시 ','를 기준으로 구분한다.

- [x] : 발권된 복권은 오름차순으로 정렬해서 보여준다.

- [x] : 수익률의 소수점 둘째 자리에서 반올림 한다. 

## 프로그래밍 요구사항 

- [x] : indent max-depth < 3

- [x] : 함수는 한가지 일만 한다.

- [x] : Jest를 이용해 기능 목록 정상 동작을 확인한다.

- [x] : 함수길이가 15라인 이상 넘어가지 않도록 한다.

- [x] : else를 최대한 지양한다. 

- [x] : 도메인 로직에 단위 테스트를 구현한다. (Console 관련아닌)


