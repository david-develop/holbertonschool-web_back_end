#!/usr/bin/env python3
"""type-annotated function sum_list which takes a list
input_list of floats as argument and returns their sum as a float"""


from typing import List


def sum_list(input_list: List[float]) -> float:
    """type-annotated function sum_list which takes a list
    input_list of floats as argument and returns their sum as a float
    Args:
        input_list: float list
    Returns:
        a float
    """
    total: float = 0
    for n in input_list:
        total += n
    return total
