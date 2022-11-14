# 구현 기능

> 각 구현 기능과 달성 여부를 아래의 양식으로 작성한다.

|달성|구현 목표|비고|
|:---:|---|---|
|:heavy_minus_sign:|구현하고자 하는 기능|수행하지 않은 경우|
|:heavy_check_mark:|구현하고자 하는 기능|수행을 완료한 경우|

<br>

## :white_check_mark: 정상인 경우

|달성|구현 목표|비고|
|:---:|---|---|
|:heavy_check_mark:|내부적으로 사용할 상수들을 지정한다.|금액, 에러 메시지 등|
|:heavy_check_mark:|범위 내에서 6개의 임의의 숫자들을 뽑는 함수를 작성한다.||
|:heavy_check_mark:|위의 숫자들을 오름차순으로 정리한다.||
|:heavy_check_mark:|로또 구입 금액을 입력받는다.||
|:heavy_check_mark:|로또 구입 금액에 따른 로또 개수를 계산한다.||
|:heavy_check_mark:|Lotto class에 로또 숫자를 넣으며 인스턴스를 만든다.||
|:heavy_check_mark:|로또 개수만큼 인스턴스를 만든다.||
|:heavy_check_mark:|구매 개수와 함께 로또 숫자를 출력한다.||
|:heavy_check_mark:|당첨 번호와 보너스 번호를 개별적으로 입력받아 구분해 저장한다.||
|:heavy_check_mark:|입력된 당첨 번호와 보너스 번호를 임의의 숫자들과 대조하는 함수를 작성한다.||
|:heavy_check_mark:|각 로또마다 대조한다.||
|:heavy_check_mark:|대조하여 도출된 당첨 내역을 저장한다.||
|:heavy_check_mark:|당첨 내역을 출력한다.||
|:heavy_check_mark:|수익률을 계산하여 출력한다.||
|:heavy_check_mark:|게임을 종료한다.||

<br>

## :no_entry: 비정상인 경우

> 사용자의 입력이 비정상인 경우 throw문을 사용해 애플리케이션을 종료한다.
> **앞에 [ERROR]로 시작하는 에러 메시지를 출력한다!**

|달성|비정상 상황|비고|
|:---:|---|---|
|:heavy_check_mark:|로또 번호의 숫자가 6개가 아닌 경우||
|:heavy_check_mark:|로또 번호가 숫자형의 나열이 아닌 경우||
|:heavy_check_mark:|로또 번호가 정수형의 나열이 아닌 경우||
|:heavy_check_mark:|로또 번호의 숫자 범위가 1~45가 아닌 경우||
|:heavy_check_mark:|로또 번호의 숫자가 중복되는 경우||
|:heavy_check_mark:|보너스 번호의 숫자가 숫자형이 아닌 경우||
|:heavy_check_mark:|보너스 번호의 숫자가 정수형이 아닌 경우||
|:heavy_check_mark:|보너스 번호의 숫자 범위가 1~45가 아닌 경우||
|:heavy_check_mark:|보너스 번호가 로또 번호 내에 포함되는 경우||
|:heavy_check_mark:|로또 구입 금액이 숫자형이 아닌 경우||
|:heavy_check_mark:|로또 구입 금액이 자연수가 아닌 경우||
|:heavy_minus_sign:|로또 구입 금액이 1,000원 단위로 나누어 떨어지지 않는 경우||



