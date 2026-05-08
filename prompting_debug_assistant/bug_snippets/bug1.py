# Intended: Return the last n items of a list
# Bug Type: Off-by-one error

def get_last_n(items, n):
    if n == 0:
        return []
    return items[-n + 1:]

my_list = [10, 20, 30, 40, 50]
print(get_last_n(my_list, 3))
print(get_last_n(my_list, 5))
print(get_last_n(my_list, 1))
