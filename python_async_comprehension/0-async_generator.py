#!/usr/bin/env python3
"""Nameless module for Python Async Comp Task 0"""
from random import random
import asyncio
import time


async def async_generator():
    """Waits for random amount of time up to specified maximum"""

    for i in range(10):
        yield random() * 10
        await asyncio.sleep(1)
