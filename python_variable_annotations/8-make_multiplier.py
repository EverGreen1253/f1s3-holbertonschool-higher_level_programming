#!/usr/bin/env python3
"""Nameless module for Task 8"""
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns function that multiplies"""

    def mult(v: float) -> float:
        return v * multiplier

    return mult
