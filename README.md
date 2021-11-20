Create a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

# Array and Looping Independant Project

#### By _**{List of contributors}**

#### A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the substitutions for numbers containing a 1, 2, or 3 within the returned range.



## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description

A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the substitutions for numbers containing a 1, 2, or 3 within the returned range.

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Setup/Installation Requirements

Go to https://github.com/MxZoe/array-project to see the code and files for this project. From there you can clone, fork or download your own copy of the code.

You can also go to mxzoe.github.io/array-project to see the website in action.

## Known Bugs

* no known bugs

## License

https://opensource.org/licenses/MIT

Copyright (c) 2021 Zoe Weinstein
_________________________________________________________________________________________________

## Tests

Describe: substitute() 
Takes a single digit number and returns a "beep" for ones, "boop" for twos and "won't you be my neighbor?" for threes.

Test: It should return a with a "Beep" when given a 1 as input
Code: beepBoop(1);
Expected Output: "Beep"

Test: It should return  a "Boop" when given a 2 as input
Code: beepBoop(2);
Expected Output: "Boop"

Test: It should return an array with a "Won't you be my neighbor?" when given 3 as an input
Code: beepBoop(3)
Expected Output: "Won't you be my neighbor?"

_________________________________________________________________________________________________
Describe hasNumber()

Test: It should take a number and return that number
Code: hasNumber(4567)
Expected Output:4567

Test: It should return substitute(1) if a single digit number contains a 1
Code: hasNumber(1);
let hasOne = substitute(1);
Expected Output: Beep

Test: It should return substitute(1) if a multiple digit number contains a 1
Code: hasNumber(10);
let hasOne = substitute(1);
Expected Output: Boop

Test: It should return substitute(2) if a single digit number contain a 2
Code: hasNumber(2);
let hasTwo = substitute(2);
Expected Output: boop

Test:return substitute(2)if a multiple digit number contains a 2
Code: hasNumber(20);
let hasTwo = substitute(2);
Expected Output: boop

Test:return substitute(3) if a single digit number contain a 3
Code: hasNumber(3);
let hasThree = substitute(3);
Expected Output: Won't you be my neighbor?

Test:return substitute(3) if a multiple digit number contains a 3
Code: hasNumber(30);
let hasThree = substitute(3);
Expected Output: 3

_________________________________________________________________________________________________

Describe: beepBoop()
takes an number and  create a range from 0 to the number. It will replace any number that has a digit of 1 with "beep", 2 with "boop" and 3 with won't you be my neighbor

Test: Create an array of numbers from 0 to the inputed number
Code: beepBoop(5)
Expected output: 0 1 2 3 4 5


Test: calls hasNumber() on each number in the generated array
Code: beepBoop("5")
Expected Output: 0 1 2 3 4 5

Test: calls hasNumber() on each number in the range and then calls substitute() on the result of hasNUmber()
Code: beepBoop(5)
Expected Output: 0 "Beep" "Boop" "Won't you be my neighbor?" 4 5


