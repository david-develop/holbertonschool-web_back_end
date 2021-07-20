#!/usr/bin/env python3
""" type-annotated function make_multiplier that takes a float multiplier as
argument and returns a function that multiplies a float by multiplier."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ type-annotated function make_multiplier that takes a float multiplier as
    argument and returns a function that multiplies a float by multiplier.
    Args:
        k: str
        v: int or float
    Returns:
        a float
    """
    def f_callable(n: float) -> float:
        return float(n * multiplier)

    return f_callable
