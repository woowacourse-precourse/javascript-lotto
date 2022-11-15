## JavaScript-LOTTO Commit List

feat($App): inputMoney method

Added new method to $App:
- get input from user
- print the error message and stop the process if input from user is wrong
- print the counts of lotto

---
feat($App): buyLotto method

Added new method to $App:
- print the random lotto numbers
- sort the numbers

Breaks LottoCount, which was removed from $App.play
Changes $App.inputMoney, which calls $App.buyLotto

---
feat($App): inputWinning method

Added new method to $App:
- get input, which is WinningNumbers from user
- get input, which is BonusNumber from user

Breaks $App.buyLotto, which calls $App.inputWinning

---
feat($Lotto): validate method

Changed the validate method of $Lotto:
- check if the number overlapped
- check if the number is not in range(1~45)

Breaks $Lotto.validate, which the check conditions are added

---
feat($LottoTest): test case addition

Added new test case
- print the error message and quit, if $Lotto contains number which is not in range

---
feat($Lotto): statistics, check, checkBonus method

Added new methods to $Lotto:
- check the count of the winning lotto
- check if user's lotto includes the winning Bonus

Breaks, $Lotto.statistics, $Lotto.check, $Lotto.checkBonus

---
feat($App): check, statistics method

Added new methods to $App:
- check the lotto numbers
- print the statistics of the result