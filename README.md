## 📔 로또 게임 Rule book

#### 게임 시작 전 참고사항 💡

```
- 콘솔로 구현된 간단한 로또 게임입니다. 당신의 운을 시험해보세요.✨
- 실제 로또와는 다르게 플레이어가 *당첨 번호와 보너스 번호를 직접 입력합니다.*
- 로또는 1장당 1000원 이며, 1등부터 5등까지 아래와 같은 기준으로 선별합니다.
    1등: 6개 번호 일치 / 2,000,000,000원
    2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    3등: 5개 번호 일치 / 1,500,000원
    4등: 4개 번호 일치 / 50,000원
    5등: 3개 번호 일치 / 5,000원
```

---

#### 구입금액 입력

- 게임이 시작되면 로또 구입금액을 입력합니다.
- 구입 금액은 1,000원 단위로 입력해야 합니다.
- 1,000원으로 나누어 떨어지지 않는 금액을 입력하면 **게임이 종료됩니다!**

```
구입금액을 입력해 주세요.
8000
```

---

#### 생성된 로또 번호 출력

- 이후 입력된 금액만큼의 로또를 자동 생성하여 출력합니다.
- 번호를 확인하세요!

```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

---

#### 당첨 번호 및 보너스 번호 입력

- 이후 당첨 번호와 보너스 번호를 순서대로 입력 합니다.
- 번호는 쉼표(,)로 구분하여 입력해주세요!
- 유효하지 않은 번호를 입력하면 **게임이 종료됩니다!**

```
당첨 번호를 입력해 주세요.
1,2,3,4,5,6
```

```
보너스 번호를 입력해 주세요.
7
```

---

#### 당첨 통계 출력

- 올바른 입력을 하셨다면, 로또 당첨 통계가 출력되고 게임은 종료됩니다.
- 수익률은 소수점 둘째 자리에서 반올림하여 출력됩니다.

```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

---

#### 실행 결과 예시

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

---

## ✏️ 과제 진행 요구 사항
