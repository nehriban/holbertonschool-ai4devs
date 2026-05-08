# Bug Descriptions

## Bug 1 - bug1.py
**Intended Behavior**: Return the last n items of a list. For example, get_last_n([10, 20, 30, 40, 50], 3) should return [30, 40, 50]. When n == len(items), should return the full list.
**Issue Type**: Off-by-one error.
**Notes**: The function uses items[-n + 1:] instead of items[-n:]. Fails when n == len(items).

## Bug 2 - bug2.py
**Intended Behavior**: Return True if n is prime, False otherwise. is_prime(7) returns True, is_prime(4) returns False.
**Issue Type**: Logical error.
**Notes**: Returns True on first non-divisor instead of continuing the loop. Composite numbers incorrectly reported as prime.

## Bug 3 - bug3.js
**Intended Behavior**: Return the average of an array. calculateAverage([10, 20, 30]) should return 20.
**Issue Type**: Runtime exception.
**Notes**: Loop uses <= instead of <. Reads undefined on last iteration making total NaN.

## Bug 4 - bug4.js
**Intended Behavior**: Count word frequency in a sentence. wordCount("the cat sat on the mat") returns { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }.
**Issue Type**: Misuse of data types.
**Notes**: counts[word] == false fails on second occurrence. Repeated words stored as NaN.

## Bug 5 - bug5.java
**Intended Behavior**: Check if a string is a palindrome. isPalindrome("racecar") returns true, isPalindrome("hello") returns false, isPalindrome(null) returns false.
**Issue Type**: Syntax error and Runtime exception.
**Notes**: Missing semicolon causes compile error. Loop starts at str.length() instead of str.length()-1. No null check causes NullPointerException.

## Bug 6 - bug6.py
**Intended Behavior**: Binary search on a sorted list. binary_search([1, 3, 5, 7, 9], 7) returns 3. Returns -1 if not found.
**Issue Type**: Infinite loop.
**Notes**: low = mid and high = mid never shrink the search range causing infinite loop.
