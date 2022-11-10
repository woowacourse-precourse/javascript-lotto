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
  - [ ] throw error when user inputs wrong value
   - [ ] duplicates
   - [ ] NaN && Non-Positive-Integer
   - [ ] numbers has to be in range of between 1 to 45
- [x] compare user input to lottery number and print outcome
  - [x] print revenue(%) and result of win or loose