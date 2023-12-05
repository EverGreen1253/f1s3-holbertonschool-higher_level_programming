#!/usr/bin/env python3
"""Nameless module for PYthon Asyn Task 0"""
from random import random
import asyncio

async def wait_random(max_delay = 10):
    """Waits for random amount of time up to specified maximum"""
    delay = random() * max_delay

    await asyncio.sleep(delay)

    return delay
