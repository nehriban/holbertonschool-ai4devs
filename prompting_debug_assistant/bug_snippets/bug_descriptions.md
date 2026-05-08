# Bug Descriptions

## Bug 1 – bug1.py
**Intended Behavior**: The function `get_last_n(items, n)` should return the last `n` elements of a list. For example, `get_last_n([10, 20, 30, 40, 50], 3)` should return `[30, 40, 50]`, and `get_last_n([10, 20, 30, 40, 50], 5)` should return the full list `[10, 20, 30, 40, 50]`.
**Issue Type**: Off-by-one error.
**Notes**: The function uses `items[-n + 1:]` instead of `items[-n:]`. This skips the first element and fails completely when `n == len(items)`.

## Bug 2 – bug2.py
**Intended Behavior**: The function `is_prime(n)` should return `True` if `n` is a prime number and `False` otherwise. For example, `is_prime(7)` should return `True`, `is_prime(4)` should return `False`, and `is_prime(1)` should return `False`.
**Issue Type**: Logical error.
**Notes**: The loop immediately returns `True` on the first iteration where `n % i != 0`, instead of continuing to check all divisors. As a result, composite numbers like `4` and `9` are incorrectly reported as prime.

## Bug 3 – bug3.js
**Intended Behavior**: The function `calculateAverage(numbers)` should return the arithmetic mean of all numbers in the array. For example, `calculateAverage([10, 20, 30])` should return `20`, and `calculateAverage([5, 15])` should return `10`.
**Issue Type**: Runtime exception (off-by-one error in loop).
**Notes**: The loop uses `i <= numbers.length` instead of `i < numbers.length`. On the final iteration, `numbers[numbers.length]` is `undefined`, causing `total` to become `NaN`. There is also no guard for empty arrays.

## Bug 4 – bug4.js
**Intended Behavior**: The function `wordCount(sentence)` should return an object mapping each unique word to its frequency. For example, `wordCount("the cat sat on the mat")` should return `{ the: 2, cat: 1, sat: 1, on: 1, mat: 1 }`, and `wordCount("hello hello hello")` should return `{ hello: 3 }`.
**Issue Type**: Misuse of data types (falsy comparison pitfall).
**Notes**: The condition `counts[word] == false` is `true` when `counts[word]` is `undefined`. On the second occurrence of a word, `undefined + 1` produces `NaN`. All words appearing more than once are incorrectly stored as `NaN`.

## Bug 5 – bug5.java
**Intended Behavior**: The method `isPalindrome(str)` should return `true` if the string reads the same forwards and backwards, and `false` otherwise. For example, `isPalindrome("racecar")` should return `true`, `isPalindrome("hello")` should return `false`, and `isPalindrome(null)` should return `false` without throwing an exception.
**Issue Type**: Syntax error and Runtime exception (NullPointerException).
**Notes**: A missing semicolon after `return reversed` causes a compile-time syntax error. The loop starts at `str.length()` instead of `str.length() - 1`, causing `StringIndexOutOfBoundsException`. There is no null check before calling `reverseString`, so passing `null` throws a `NullPointerException`.

## Bug 6 – bug6.py
**Intended Behavior**: The function `binary_search(items, target)` should return the index of `target` in a sorted list. For example, `binary_search([1, 3, 5, 7, 9], 7)` should return `3`. If the target is not found, it should return `-1`.
**Issue Type**: Infinite loop (loop logic error).
**Notes**: When the target is in the upper half, `low = mid` never advances past `mid`. When in the lower half, `high = mid` never retreats. The search range never shrinks, causing an infinite loop for almost all inputs.
