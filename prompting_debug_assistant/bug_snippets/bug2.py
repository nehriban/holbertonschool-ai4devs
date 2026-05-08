## Bug 2 – bug2.py
## Intended Behavior: Return True if n is a prime number, False otherwise.
## Issue Type: Logical error.
## Notes: Returns True on first non-divisor instead of continuing the loop.

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i != 0:
            return True
        else:
            return False
    return True

print(is_prime(2))
print(is_prime(4))
print(is_prime(9))
print(is_prime(7))
print(is_prime(1))
