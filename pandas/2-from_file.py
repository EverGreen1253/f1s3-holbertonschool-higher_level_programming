import numpy as np
import pandas as pd

def from_file(filename, delimeter):
    """ creates returns a dataframe from the file data passed in """

    df = pd.read_csv(filepath_or_buffer=filename, delimiter=delimeter)

    return df
