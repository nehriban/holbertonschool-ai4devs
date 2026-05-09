# Bug Descriptions

## Bug 1 – bug1.py
**Intended Behavior:** Return a list with the last n elements.
**Issue Type:** Off-by-one error.
**Notes:** Loop uses `len(items)+1` instead of `len(items)`, causing an IndexError by accessing an index that does not exist.

## Bug 2 – bug2.py
**Intended Behavior:** Calculate factorial of n, where factorial(0) equals 1.
**Issue Type:** Logical error.
**Notes:** `result` is initialized to 0 and `range(1, n)` excludes n, so the result is always 0. Set `result=1` and use `range(1, n+1)`.

## Bug 3 – bug3.js
**Intended Behavior:** Return the mean of numeric values in an array, rounded to 2 decimal places.
**Issue Type:** Logic error.
**Notes:** `typeof n === "number"` does not exclude NaN, corrupting the sum. Use `Number.isFinite` and pass `0` as the initial value to `reduce` to avoid errors on empty arrays.

## Bug 4 – bug4.js
**Intended Behavior:** Fetch JSON from a URL and return user names in uppercase.
**Issue Type:** Async/Await error.
**Notes:** Missing `await` before `fetch()` and `.json()` causes the function to operate on unresolved Promises instead of actual data, resulting in a TypeError at runtime.

## Bug 5 – bug5.java
**Intended Behavior:** Count word frequencies in a sentence and return the most frequent word.
**Issue Type:** Runtime exception (NullPointerException).
**Notes:** Passing null as input and accessing missing map keys both throw a NullPointerException. Add a null check at the start of `countWords` and use `getOrDefault` when updating counts.

## Bug 6 – bug6.py
**Intended Behavior:** Read scores from a CSV file, compute averages, and write results to a new CSV.
**Issue Type:** Type mismatch.
**Notes:** CSV values are read as strings, causing a TypeError in `sum()`. Convert each value to `float()` before summing. Use `with` blocks to ensure files are properly closed even if an error occurs.
