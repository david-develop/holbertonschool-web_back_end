#!/usr/bin/env python3
"""Synchronous coroutine that takes in an integer argument that waits for a
random delay  and eventually returns it."""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Synchronous coroutine that takes in an integer argument that waits
    for a random delay  and eventually returns it."""
    list_sec = []
    sorted_list = []

    for _ in range(n):
        res = wait_random(max_delay)
        list_sec.append(res)
    
    for q in asyncio.as_completed(list_sec):
        result = await q
        sorted_list.append(result)

    return sorted_list
