#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Tuple


def index_range(start: int, page_size: int) -> Tuple[int, int]:
    """Returns index range in a tuple"""

    return (start, start + page_size)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get data from csv"""

        assert (type(page) == int and page > 0)
        assert (type(page_size) == int and page_size > 0)

        data = []

        indices = index_range(page, page_size)

        # print(indices[0])
        # print(indices[1])

        start = indices[0]
        end = indices[1]

        with open(self.DATA_FILE) as f:
            reader = csv.reader(f)
            rows = list(reader)

            for i in range(end - start):
                wanted_index = start + i + 1
                if wanted_index >= len(rows):
                    data = []
                    break

                data.append(rows[wanted_index])

        return data

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Returns metadata for hyperlink"""

        assert (type(index) == int and index >= 0)

        index = index * page_size
        next_index = index + page_size
        data = self.get_page(index, page_size)

        output = {
            'index': index,
            'next_index': next_index,
            'page_size': page_size,
            'data': data
        }

        return output
