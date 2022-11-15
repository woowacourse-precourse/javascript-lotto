# Features (TODO)

- Vendor:

  - #Promptor: Read user input
    - [ ] `prompt`: Prompt user to receive input. Should be three kinds.
      - [ ] Reads for money
      - [ ] Reads for winning numbers
      - [ ] Reads for special number
    - [ ] Validator for user input from each promptor.
    - [ ] `getter` for money, winning numbers, special number.
  - [ ] `generate`: Create a `Lotto` class from random numbes.
  - [ ] `draw`: `generate` a # of `Lotto` classes; # being determined by (`money / price`).
  - Create Oracle Lotto based off of winning number.
  - Determine prizes & RoR.
  - Print result.

- MyErrorHandler:
  - [ ] Custom error thrower that integrates native `throw` and `MissionUtils.Console.close`.
