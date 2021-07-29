#!/usr/bin/env python3
"""
Function named index_range that takes two integer arguments page and page_size
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Function named index_range that takes two integer arguments page and page_size
    """
    start = (page - 1) * page_size
    end = page * page_size

    return (start, end)
