# 기능 목록

1. (입력) 로또 구매 (ex. 8000 >> 8개 구매로 간주)
2. 구매한 수만큼 배열 객체 만들어서 랜덤 수 생성 (lotto1 = [4,7,8,15,23,35,45] ...)
3. (입력) 당첨 번호 기입 + 보너스 번호 기입
4. 저장되어있는 랜덤 생성 번호 배열들을 당첨번호와 비교
   당첨 여부 판별 배열 생성 (조건 : 1등 - 6개 / 2등 - 5개 / 3등 - 4개 / 4등 - 3개)
   (만약에 5개가 일치하면 보너스 번호 비교)
   판별 갯수에 따라 당첨여부판별 배열에 +1

5. 당첨내역 출력
   당첨여부판별배열을 출력하고 ((얻은 금액 / 로또 구매 금액) x 100) : 수익률 출력
   (index:0 => 5000원 ,index:1 => 50000원 ) > for문 돌리면서 sum++ 로 얻은 금액 구하기

6. 예외처리
   1~45 사이가 아닌 경우 throw를 통한 예외처리
   당첨 번호 입력할 때 범위의 수가 아닌 경우 예외처리 검사

---

핵심 로직 함수

1. 로또 갯수 반환 함수 - LottoGenerator#getLottoNumber
2. 랜덤 로또 생성 함수 - LottoGenerator#makeLottoArray
3. 수익률 계산 함수 - LottoGenerator#calculateProfit
4. 총 이익 액수 계산 함수 - LottoGenerator#estimateProfit

---

UI 로직 함수

LottoGameStart

1. 금액 입력 및 갯수 출력 함수 - LottoGameStart#changePriceToCount
2. 랜덤 생성 로또 배열 출력 함수 - LottoGameStart#printLottoArray
3. 당첨 번호 입력 및 보너스 번호 입력 함수 - LottoGameStart#makeWinLottoNumber
4. 당첨 통계 출력 함수 - LottoGameStart#printResultStatic
   수익률 출력 함수 - LottoGameStart#estimateProfit
