#!/usr/bin/env python3

import pandas as pd
from_file = __import__('2-from_file').from_file

df1 = from_file('coinbaseUSD_1-min_data_2014-12-01_to_2019-01-09.csv', ',')
df2 = from_file('bitstampUSD_1-min_data_2012-01-01_to_2020-04-22.csv', ',')

df2 = df2[df2["Timestamp"] >= 1417411980]
df2 = df2[df2["Timestamp"] <= 1417417980]
df1 = df1[df1["Timestamp"] >= 1417411980]
df1 = df1[df1["Timestamp"] <= 1417417980]

df = pd.concat([df2, df1], keys=['bitstamp', 'coinbase']).reset_index().set_index("Timestamp").sort_values("Timestamp").drop(columns=["level_1"]).rename(columns={"level_0": ""})

print(df)
