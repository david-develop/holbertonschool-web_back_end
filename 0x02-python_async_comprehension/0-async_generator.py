#!/usr/bin/env python3
"""coroutine will loop 10 times, each time asynchronously wait 1
second, then yield a random number between 0 and 10."""

import random
import asyncio


async def async_generator():
    """coroutine will loop 10 times, each time asynchronously wait 1
    second, then yield a random number between 0 and 10."""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
