# Bug Descriptions

## Bug 1 – bug1.py
**Intended Behavior**: Given a list like `[10, 20, 30, 40, 50]` and `n=3`, the function should return `[30, 40, 50]`. When `n == len(items)`, it should return the entire list.
**Issue Type**: Off-by-one error.
**Notes**: The function uses `items[-n + 1:]` instead of `items[-n:]`, causing it to skip the first element. Fails completely when `n == len(items)`.

## Bug 2 – bug2.py
**Intended Behavior**: Given an integer like `7`, the function should return `True`. Given `4` or `9`, it should return `False`. For `n < 2`, it should return `False`.
**Issue Type**: Logical error.
**Notes**: The loop returns `True` on the very first iteration where `n % i != 0`, instead of continuing to check all divisors. Any composite number is incorrectly reported as prime.

## Bug 3 – bug3.js
**Intended Behavior**: Given `[10, 20, 30]`, the function should return `20`. Given `[5, 15]`, it should return `10`. Given an empty array `[]`, it should return `0` or handle gracefully.
**Issue Type**: Runtime exception (off-by-one in loop).
**Notes**: The loop condition uses `<=` instead of `<`. On the last iteration, `numbers[numbers.length]` returns `undefined`, making `total` become `NaN`. No empty array guard exists.

## Bug 4 – bug4.js
**Intended Behavior**: Given `"the cat sat on the mat"`, the function should return `{ the: 2, cat: 1, sat: 1, on: 1, mat: 1 }`. Given `"hello hello hello"`, it should return `{ hello: 3 }`.
**Issue Type**: Misuse of data types (falsy comparison pitfall).
**Notes**: The condition `counts[word] == false` behaves unexpectedly when `counts[word]` is `undefined`. On the second occurrence of a word, `undefined + 1` produces `NaN`, so repeated words are always stored as `NaN`.

## Bug 5 – bug5.java
**Intended Behavior**: Given `"racecar"`, the function should return `true`. Given `"hello"`, it should return `false`. Given `null`, it should return `false` gracefully without crashing.
**Issue Type**: Syntax error + Runtime exception (StringIndexOutOfBoundsException + NullPointerException).
**Notes**: A missing semicolon after `return reversed` causes a compile-time syntax error. The loop starts at `str.length()` instead of `str.length() - 1`, causing an out-of-bounds exception. No null check exists before calling `reverseString`.

## Bug 6 – bug6.py
**Intended Behavior**: Given `[1, 3, 5, 7, 9]` and target `7`, the function should return index `3`. Given a target not in the list like `15`, it should return `-1`.
**Issue Type**: Infinite loop (loop logic error).
**Notes**: When the target is in the upper half, `low = mid` never advances past `mid`. When in the lower half, `high = mid` never retreats. The search range never shrinks, causing an infinite loop for most inputs.
