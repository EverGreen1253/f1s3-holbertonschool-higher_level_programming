#!/usr/bin/env python3
"""Nameless module for Task 9"""
from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list containing... stuff"""
    return [(i, len(i)) for i in lst]
