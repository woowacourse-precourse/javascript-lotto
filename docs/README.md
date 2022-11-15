# 👉 Github commit convention

> Message format : <br>`[type of commit] : commit message`

<br>

**Type of commit**

* feat : new feature implementation
* fix : bug fix
* style : style fix (formatting, ...)
* refactor : code refactoring
* test : add or modify test case
* docs : add or modify documentations

---

# 👉 Feature Implementation list
## Random Number Generator
- [x] make number generator that creates 6 random number
  - [x] make sure that there are no duplicate numbers
  - [x] put numbers in a array
  - [x] generator receives amount to create number of arrays
    - [x] amount should be a positive integer and multiple of 1000
  - [x] each array contains 6 numbers and costs 1,000 won

## Find Winner
- [x] get input from user that has 6 random numbers and one bonus number
  - [x] throw error when user inputs wrong value
   - [x] duplicates
   - [x] NaN && Non-Positive-Integer
   - [x] numbers has to be in range of between 1 to 45
- [x] compare user input to lottery number and print outcome
  - [x] print revenue(%) and result of win or loose

## Refactor
- [x] divide UI logic and main logic in different class
- [x] divide constants from main and UI logics
- [x] check indent depth and length of functions
- [x] check variable and function names
- [x] extract functions from logic

## Test
- [x] write test cases of each feature of domain logic