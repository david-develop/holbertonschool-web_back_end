#!/usr/bin/env python3
"""Function that takes an integer max_delay and returns a asyncio.Task"""


import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Synchronous coroutine that takes in an integer argument that waits
    for a random delay  and eventually returns it."""
    list_sec = []
    sorted_list = []

    for _ in range(n):
        res = task_wait_random(max_delay)
        list_sec.append(res)
    
    for q in asyncio.as_completed(list_sec):
        result = await q
        sorted_list.append(result)

    return sorted_list
