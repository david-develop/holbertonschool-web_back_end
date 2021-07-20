#!/usr/bin/env python3
"""Annotate function"""


from typing import Iterable, Sequence, Tuple


def element_length(lst: Iterable) -> Tuple[Sequence, int]:
    """Annotate function"""
    return [(i, len(i)) for i in lst]