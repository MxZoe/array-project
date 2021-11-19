Create a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
_________________________________________________________________________________________________

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
takes an array and replaces any number that has a digit of 1 with "beep", 2 with "boop" and 3 with won't you be my neighbor

Test: Takes a sequence of numbers and outputs it as an array
Code: beepBoop("1, 2, 3")
Expected Output: [1 , 2, 3]

Test: Takes a sequence of numbers and calls hasNumber() on each.
Code: beepBoop("100, 25, 34, 5")
Expected Output:[1, 2, 3, 5]

Test: Takes a sequence of numbers and calls hasNumber() on each and then calls substitute() on the result of hasNUmber()
Code: beepBoop("100, 25, 34, 5")
Expected Output: ["Beep", "Boop", "Won't you be my neighbor?", 5]
