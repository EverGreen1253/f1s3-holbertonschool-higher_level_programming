#!/usr/bin/env python3
"""Nameless module for task 10"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """update topics in collection"""

    mongo_collection.update_many(
        { 'name': name },
        { '$set': { 'topics': topics }},
        True
        )
