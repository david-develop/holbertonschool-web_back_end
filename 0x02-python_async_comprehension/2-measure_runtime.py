#!/usr/bin/env python3
"""Coroutine tat execute async_comprehension four times in parallel
using asyncio.gather"""


from time import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Coroutine tat execute async_comprehension four times in parallel
    using asyncio.gather"""
    s = time()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    elapsed = time() - s
    return elapsed
