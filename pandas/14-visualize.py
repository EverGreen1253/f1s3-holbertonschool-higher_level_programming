#!/usr/bin/env python3

from datetime import date
import matplotlib.pyplot as plt
import pandas as pd
from_file = __import__('2-from_file').from_file

df = from_file('coinbaseUSD_1-min_data_2014-12-01_to_2019-01-09.csv', ',')

# Only want record from 2017 and beyond
df = df[df["Timestamp"] >= 1483228800]

df = df.drop(columns=["Weighted_Price"]).rename(columns={"Timestamp": "Date"})
df["Date"] = pd.to_datetime(df["Date"], unit="s").dt.date

# Reuse the code from Task 9 to fill in the missing values
df['Close'] = df['Close'].ffill()
df['Open'] = df['Open'].fillna(df['Close'])
df['High'] = df['High'].fillna(df['Close'])
df['Low'] = df['Low'].fillna(df['Close'])
df['Volume_(BTC)'] = df['Volume_(BTC)'].fillna(0)
df['Volume_(Currency)'] = df['Volume_(Currency)'].fillna(0)

# ASSIGN THE GROUPBY RETURN
df = df.groupby([df['Date']]).agg({
    'High': ['max'],
    'Low': ['min'],
    'Open': ['mean'],
    'Close': ['mean'],
    'Volume_(BTC)': ['sum'],
    'Volume_(Currency)': ['sum']
})

# print(df)

plt.plot(df.index.values, df['High'], label = "High")
plt.plot(df.index.values, df['Low'], label = "Low")
plt.plot(df.index.values, df['Open'], label = "Open")
plt.plot(df.index.values, df['Close'], label = "Close")
plt.plot(df.index.values, df['Volume_(BTC)'], label = "Volume_(BTC)")
plt.plot(df.index.values, df['Volume_(Currency)'], label = "Volume_(Currency)")
plt.legend()
# plt.show()
plt.savefig('graph.png')
