#!/usr/bin/env python3
"""Nameless module for task 10"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """update topics in collection"""

    output = []
    for v in mongo_collection.find():
        if 'topics' in v:
            if topic in v['topics']:
                output.append(v)

    return output
