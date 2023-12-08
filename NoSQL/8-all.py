#!/usr/bin/env python3
"""Nameless module for task 8"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """lists all docs in collection"""
    output = []

    for v in mongo_collection.find():
        output.append(v)

    return output
