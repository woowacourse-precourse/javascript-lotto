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