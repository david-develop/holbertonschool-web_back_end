#!/usr/bin/env python3
"""type-annotated function sum_mixed_list which takes a list mxd_lst
of integers and floats and returns their sum as a float."""


from typing import Union


def sum_mixed_list(mxd_lst: Union[int, float]) -> float:
    """type-annotated function sum_mixed_list which takes a list mxd_lst
    of integers and floats and returns their sum as a float.
    Args:
        sum_mixed_list: list of integers
    Returns:
        a float
    """
    total: float = 0
    for n in mxd_lst:
        total += float(n)
    return total
