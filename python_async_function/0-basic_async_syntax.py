#!/usr/bin/env python3
"""Nameless module for Python Async Task 0"""
from random import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Waits for random amount of time up to specified maximum"""
    delay = random() * max_delay

    await asyncio.sleep(delay)

    return delay
