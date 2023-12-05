#!/usr/bin/env python3
"""Nameless module for Task 6"""
from typing import List, Union


def sum_mixed_list(input_list: List[Union[int, float]]) -> float:
    """Python list elem summing function with annotations"""
    total: float = 0.0

    for i in input_list:
        total = total + float(i)

    return total
