# Bug Descriptions

This document describes the bugs found in each file, including intended behavior, issue type, notes, and fix suggestions to help developers resolve the issues.

## Bug 1 – bug1.py
**Intended Behavior:** Return a list with the last n elements. For example, `get_last_n([10, 20, 30, 40, 50], 3)` should return `[30, 40, 50]`.
**Issue Type:** Off-by-one error.
**Notes:** Loop uses `len(items)+1` instead of `len(items)`, causing an IndexError because the last valid index is `len(items)-1`, so going beyond it exceeds the list boundary.
**Fix:** Change `range(start, len(items)+1)` to `range(start, len(items))`.

## Bug 2 – bug2.py
**Intended Behavior:** Calculate the factorial of n, where `factorial(0)` and `factorial(1)` should both return 1. For example, `factorial(5)` should return 120.
**Issue Type:** Logical error.
**Notes:** `result` is initialized to 0 instead of 1, and `range(1, n)` excludes n, so multiplication always produces 0 and the last number is never included.
**Fix:** Set `result=1` and change `range(1, n)` to `range(1, n+1)`.

## Bug 3 – bug3.js
**Intended Behavior:** Return the mean of all numeric values in an array, rounded to 2 decimal places. For example, `average([1, 2, 3, 4, 5])` should return `"3.00"`.
**Issue Type:** Logic error.
**Notes:** `typeof n === "number"` does not exclude NaN because `typeof NaN` is also `"number"`, corrupting the sum. Additionally, `reduce` has no initial value, causing it to throw an error on empty arrays.
**Fix:** Use `Number.isFinite(n)` in the filter and pass `0` as the initial value to `reduce`.

## Bug 4 – bug4.js
**Intended Behavior:** Fetch user data from a URL and return an array of names in uppercase. For example, the first name should appear as `"LEANNE GRAHAM"`.
**Issue Type:** Async/Await error.
**Notes:** Missing `await` before `fetch()` and `.json()` means the function operates on unresolved Promises instead of actual data, resulting in a TypeError at runtime.
**Fix:** Add `await` before both `fetch(url)` and `response.json()`.

## Bug 5 – bug5.java
**Intended Behavior:** Count word frequencies in a sentence and return the most frequent word. For example, in `"the cat sat on the mat the cat"`, the result should be `"the"`.
**Issue Type:** Runtime exception (NullPointerException).
**Notes:** Passing null as input causes a NullPointerException when calling `.toLowerCase()`. Also, accessing missing map keys with `counts.get(word)` returns null, and adding 1 to null throws another NPE.
**Fix:** Add a null check at the start of `countWords` and use `counts.getOrDefault(word, 0)` when updating counts.

## Bug 6 – bug6.py
**Intended Behavior:** Read student scores from a CSV file, compute the average for each student, and write the results to a new CSV file with columns `Name` and `Average`.
**Issue Type:** Type mismatch.
**Notes:** CSV values are read as strings by default, so calling `sum()` on them raises a TypeError. Also, files are opened without `with` blocks, risking data loss if an error occurs before `close()` is called.
**Fix:** Convert each score to `float()` before summing and use `with open(...)` blocks for safe file handling.
