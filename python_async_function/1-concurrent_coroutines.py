#!/usr/bin/env python3
"""Nameless module for PYthon Asyn Task 0"""
from random import random
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int = 10) -> List:
    """calls wait_random n number of times"""

    delays = []
    for x in range(n):
        timing = await wait_random(max_delay)
        delays.append(timing)

    return delays
