#!/usr/bin/env python3


from time import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    s = time()
    for _ in range(4):
        await asyncio.gather(async_comprehension())
    elapsed = time() - s
    return elapsed
