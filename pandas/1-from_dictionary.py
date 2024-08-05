import numpy as np
import pandas as pd

def task_two():
    """ creates a dataframe using data from a dictionary """

    output = pd.DataFrame(
        {
            "First": [0.0, 0.5, 1.0, 1.5],
            "Second": ['one', 'two', 'three', 'four'],
        }
    )

    return output

df = task_two()
