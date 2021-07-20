#!/usr/bin/env python3
"""Annotate function"""


from typing import Any, Sequence, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """Safe element function"""
    if lst:
        return lst[0]
    else:
        return None
