#!/usr/bin/env python3
"""Nameless module for Task 5"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Python list elem summing function with annotations"""
    total :float = 0.0

    for i in input_list:
        total = total + i

    return total
