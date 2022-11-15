# 기능 목록

1. 로또 구매 (LottoPayment)
- [X] 로또 구매 금액 입력
    (e) 1000원 단위 외 입력 불가
    (e) 문자 입력 불가
- [X] 로또 구매 가능 수량 계산

2. 구매한 로또 개수 출력

3. 로또 발행 (LottoIssued)
- [X] 로또 개수만큼 로또 발행
- [X] 로또 번호 생성 (make)
    - `pickUniqueNumbersInRange`사용
    - 1~45사이 숫자 6개
    (e) 중복숫자 불가
- [X] 로또 숫자 정렬
- [X] 로또 번호 출력
- [X] 발행한 로또 출력

4. 당첨번호(LottoWinning)
- [X] 당첨 번호 입력
    - 6개 숫자 입력(1~45)
    - 구분자 ,
    (e) 중복된 숫자 불가
    (e) 문자 입력 불가
- [X] 보너스 번호 입력
    (e) 당첨번호와 중복 불가
    (e) 문자 입력 불가
    (e) 범위 외 숫자 입력 불가(1~45)

5. 추첨 (MatchedCount)
- [X] 발행한 로또에서 몇 개의 숫자가 당첨번호와 겹치는지 확인
- [X] 보너스 볼 확인

6. 추첨 결과 (ranking)
- [X] 당첨 결과 계산
- [X] 당첨 결과 출력
- [X] 수익률 계산
- [X] 수익률 출력

---

```프로젝트 구조
├── models
│   ├── Lotto.js
│   ├── LottoIssued.js
│   ├── LottoPayment.js
│   └── LottoWinning.js
├── utils
│   ├── Utils.js
│   └── Constants.js
└── Views.js
└── App.js
``` 
