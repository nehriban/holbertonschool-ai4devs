# Bug Descriptions

## Bug 1 – bug1.py
**Intended Behavior**: Return the last n items of a list.
**Issue Type**: Off-by-one error.
**Notes**: The function fails when n == len(items).

## Bug 2 – bug2.py
**Intended Behavior**: Check if a number is prime.
**Issue Type**: Logical error.
**Notes**: Returns True on first non-divisor instead of continuing the loop.

## Bug 3 – bug3.js
**Intended Behavior**: Calculate the average of an array of numbers.
**Issue Type**: Runtime exception.
**Notes**: Loop uses <= instead of <, reads undefined on last iteration.

## Bug 4 – bug4.js
**Intended Behavior**: Count how many times each word appears in a sentence.
**Issue Type**: Misuse of data types.
**Notes**: Words appearing more than once are stored as NaN.

## Bug 5 – bug5.java
**Intended Behavior**: Reverse a string and check if it is a palindrome.
**Issue Type**: Syntax error + NullPointerException.
**Notes**: Missing semicolon and no null check causes crashes.

## Bug 6 – bug6.py
**Intended Behavior**: Perform binary search on a sorted list.
**Issue Type**: Infinite loop.
**Notes**: low and high never update correctly, causing infinite loop.
