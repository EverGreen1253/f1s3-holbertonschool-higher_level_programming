#!/usr/bin/python3
import json
import requests
import sys


url = "https://jsonplaceholder.typicode.com/users/"
users_api_url = url

task_d = {}

users = requests.get(url=users_api_url, timeout=10)
for employee in users.json():
    user_id = str(employee["id"])
    name = employee["name"]
    username = employee["username"]
    # print(employee)

    task_d[user_id] = []

    todos_api_url = url + user_id + "/todos"
    todos = requests.get(url=todos_api_url, timeout=10)
    # print(todos.json())

    for item in todos.json():
        task_d[user_id].append({
            'username': username,
            'task': item['title'],
            'completed': item['completed']
        })

tasks_json = str(json.dumps(task_d))
json_file_name = "todo_all_employees.json"
with open(json_file_name, "w", encoding="utf-8") as f:
    f.write(str(tasks_json))
