import numpy as np
import pandas as pd

def from_numpy(array):
    """ creates returns a dataframe from the array passed in """

    # 1. figure out the row and column counts for the array passed in
    array_row_count, array_column_count = array.shape
    columns_list = list()

    # 2. The task requirements said that we shouldn't have more than 26 columns
    for x in range(array_column_count):
        if x < 26:
            columns_list.append(chr(x + 65))

    # columns_list should now contain a list of uppercase alphabets
    return pd.DataFrame(array, columns=columns_list)
