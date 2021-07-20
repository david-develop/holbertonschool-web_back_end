#!/usr/bin/env python3
"""type-annotated function to_kv that takes a string k and an int
OR float v as arguments and returns a tuple."""


from typing import List, Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """type-annotated function to_kv that takes a string k and an int
    OR float v as arguments and returns a tuple.
    Args:
        k: str
        v: int or float
    Returns:
        a float
    """
    return (k, v ** 2)
