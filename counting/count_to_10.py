"""
Разные способы считать от 0 до 10 в Python.
"""


def count_with_for():
    """Способ 1: цикл for + range"""
    print("Способ 1 — for + range:")
    for i in range(11):
        print(i, end=" ")
    print()


def count_with_while():
    """Способ 2: цикл while"""
    print("Способ 2 — while:")
    i = 0
    while i <= 10:
        print(i, end=" ")
        i += 1
    print()


def count_with_list_comprehension():
    """Способ 3: генератор списка"""
    print("Способ 3 — list comprehension:")
    numbers = [i for i in range(11)]
    print(*numbers)


def count_with_recursion(n=0):
    """Способ 4: рекурсия"""
    if n == 0:
        print("Способ 4 — рекурсия:")
    print(n, end=" ")
    if n < 10:
        count_with_recursion(n + 1)
    else:
        print()


def count_with_map():
    """Способ 5: map + print"""
    print("Способ 5 — map:")
    result = list(map(str, range(11)))
    print(" ".join(result))


def count_with_generator():
    """Способ 6: функция-генератор"""
    def counter():
        n = 0
        while n <= 10:
            yield n
            n += 1

    print("Способ 6 — генератор (yield):")
    for num in counter():
        print(num, end=" ")
    print()


def count_with_reduce():
    """Способ 7: functools.reduce (накопление строки)"""
    from functools import reduce
    print("Способ 7 — reduce:")
    result = reduce(lambda acc, x: acc + [x], range(11), [])
    print(*result)


if __name__ == "__main__":
    count_with_for()
    count_with_while()
    count_with_list_comprehension()
    count_with_recursion()
    count_with_map()
    count_with_generator()
    count_with_reduce()
