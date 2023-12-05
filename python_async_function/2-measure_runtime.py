#!/usr/bin/env python3
"""Nameless module for Python Async Task 2"""
import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    """returns average execution time per function call"""

    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    elapsed_time = end_time - start_time

    return elapsed_time / n
