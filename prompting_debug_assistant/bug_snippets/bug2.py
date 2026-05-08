# Intended: Check if a number is prime
# Bug Type: Logical error

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
