import numpy as np
import pandas as pd

def from_numpy(array):
    """ creates returns a dataframe from the array passed in """

    array_row_count, array_column_count = array.shape
    columns_list = list()

    for x in range(array_column_count):
        if x < 26:
            columns_list.append(chr(x + 65))

    return pd.DataFrame(array, columns=columns_list)
