#!/usr/bin/python3
import requests
import sys


if len(sys.argv) == 1:
    print("Please specify a user Id")
    sys.exit()

user_id = path = sys.argv[1]
url = "https://jsonplaceholder.typicode.com/users/"

user_api_url = url + user_id
todos_api_url = url + user_id + "/todos"

todos = requests.get(url=todos_api_url, timeout=10)
# print(todos.json())

user = requests.get(url=user_api_url, timeout=10)
employee = user.json()

name = employee["name"]

tasks_list = []
count = 0
completed = 0
for item in todos.json():
    if item['completed']:
        tasks_list.append(item["title"])
        completed = completed + 1
    count = count + 1

print("Employee " + name +
      " is done with tasks(" + str(completed) + "/" + str(count) + "):")
for task in tasks_list:
    print("\t", end="")
    print(task)
