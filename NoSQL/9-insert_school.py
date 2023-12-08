#!/usr/bin/env python3
"""Nameless module for task 9"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """insers new doc in collection"""

    return mongo_collection.insert_one( kwargs ).inserted_id
