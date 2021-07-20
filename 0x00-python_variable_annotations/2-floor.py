#!/usr/bin/env python3
"""type-annotated function floor which takes a float n
as argument and returns the floor of the float."""
import math


def floor(n: float) -> int:
    """type-annotated function floor which takes a float n
    as argument and returns the floor of the float.
    Args:
        n: float
    Returns:
        floor of n (int)
    """
    return math.floor(n)
