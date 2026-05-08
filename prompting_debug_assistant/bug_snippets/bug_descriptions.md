## Bug 1 – bug1.py
**Intended Behavior**: Return the last n items of a list. For example, given [10, 20, 30, 40, 50] and n=3, should return [30, 40, 50]. When n == len(items), should return the entire list.
**Issue Type**: Off-by-one error.
**Notes**: The function uses items[-n + 1:] instead of items[-n:], causing it to skip the first element when n == len(items).

## Bug 2 – bug2.py
**Intended Behavior**: Return True if a number is prime, False otherwise. For example, is_prime(7) should return True, is_prime(4) should return False.
**Issue Type**: Logical error.
**Notes**: The loop returns True on the first non-divisor instead of continuing to check all divisors. Any composite number is incorrectly reported as prime.

## Bug 3 – bug3.js
**Intended Behavior**: Calculate and return the arithmetic average of an array of numbers. For example, calculateAverage([10, 20, 30]) should return 20.
**Issue Type**: Runtime exception (off-by-one in loop).
**Notes**: The loop condition uses <= instead of <. On the last iteration, numbers[numbers.length] returns undefined, making total become NaN.

## Bug 4 – bug4.js
**Intended Behavior**: Count how many times each word appears in a sentence. For example, wordCount("the cat sat on the mat") should return { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }.
**Issue Type**: Misuse of data types (falsy comparison pitfall).
**Notes**: The condition counts[word] == false fails on the second occurrence of a word. undefined + 1 produces NaN, so repeated words are always stored as NaN.

## Bug 5 – bug5.java
**Intended Behavior**: Reverse a string and check if it is a palindrome. isPalindrome("racecar") should return true, isPalindrome("hello") should return false, isPalindrome(null) should return false gracefully.
**Issue Type**: Syntax error + Runtime exception (NullPointerException).
**Notes**: Missing semicolon after return reversed causes a compile-time error. Loop starts at str.length() instead of str.length()-1, causing StringIndexOutOfBoundsException. No null check exists.

## Bug 6 – bug6.py
**Intended Behavior**: Perform binary search on a sorted list and return the index of the target. For example, binary_search([1, 3, 5, 7, 9], 7) should return 3. If not found, return -1.
**Issue Type**: Infinite loop (loop logic error).
**Notes**: low = mid and high = mid never shrink the search range, causing an infinite loop for any target not found on the first midpoint check.
