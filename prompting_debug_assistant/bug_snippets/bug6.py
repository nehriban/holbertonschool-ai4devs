# Intended: Perform binary search on a sorted list
# Bug Type: Infinite loop

def binary_search(items, target):
    low = 0
    high = len(items) - 1

    while low <= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] < target:
            low = mid
        else:
            high = mid

    return -1

print(binary_search([1, 2, 3, 4, 5], 3))
