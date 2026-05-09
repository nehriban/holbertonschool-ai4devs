# Bug Descriptions

## Bug 1 – bug1.py

**Intended Behavior:** Return a list with the last n elements.
**Issue Type:** Off-by-one error.
**Notes:** Loop uses `len(items)+1`. Change to `len(items)`.

---

## Bug 2 – bug2.py

**Intended Behavior:** Calculate factorial of n (factorial(0)=1).
**Issue Type:** Logical error.
**Notes:** Starts at 0 and excludes n. Set `result=1` and use `range(1, n+1)`.

---

## Bug 3 – bug3.js

**Intended Behavior:** Return mean of numbers rounded to 2 decimal places.
**Issue Type:** Logic error.
**Notes:** NaN passes the filter. Use `Number.isFinite` and provide initial value `0` to reduce.

---

## Bug 4 – bug4.js

**Intended Behavior:** Fetch JSON from a URL and return user names in uppercase.
**Issue Type:** Async/Await error.
**Notes:** Promises are not awaited. Add `await` before `fetch()` and `.json()`.

---

## Bug 5 – bug5.java

**Intended Behavior:** Count word frequencies and return the most frequent word in a sentence.
**Issue Type:** Runtime exception (NullPointerException).
**Notes:** Null input and missing map keys cause NPE. Add a null check before processing.

---

## Bug 6 – bug6.py

**Intended Behavior:** Read scores from a CSV file, compute averages, and write results to a new CSV.
**Issue Type:** Type mismatch.
**Notes:** CSV values are read as strings. Convert them to `float()` before summing. Also use `with` blocks for safe file handling.
