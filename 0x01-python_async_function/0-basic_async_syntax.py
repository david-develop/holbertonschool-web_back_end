#!/usr/bin/env python3
"""Synchronous coroutine that takes in an integer argument that waits for a
random delay  and eventually returns it."""


from random import uniform
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Synchronous coroutine that takes in an integer argument that waits
    for a random delay  and eventually returns it."""
    ran_num = uniform(0, max_delay)
    await asyncio.sleep(ran_num)
    return ran_num
