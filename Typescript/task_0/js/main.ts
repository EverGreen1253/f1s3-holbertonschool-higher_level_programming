interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let student1: Student = {
    firstName: "Bruce",
    lastName: "Lee",
    age: 84,
    location: "Seattle"
}

let student2: Student = {
    firstName: "Kiara",
    lastName: "Takanashi",
    age: 999,
    location: "Earth"
}

let studentsList: Array<Student> = [student1, student2]

// Init
let body = document.getElementsByTagName('body')[0]
let tableContainer = document.createElement("div");

let css = "<style> \
    table, th, td { border: 1px solid #CCC; } \
    table { border-spacing: 0; } \
    th, td { padding: 10px; } \
    </style>"

let tableHtml = ""
tableHtml = "<table>"
tableHtml += "<thead><tr><th>Name</th><th>Location</th></tr></thead>"
tableHtml += "<tbody>"

for (let row of studentsList) {
    tableHtml += "<tr><td>" + row.firstName + "</td><td>" + row.location + "</td></tr>"
}
tableHtml += "</tbody></table>"

tableContainer.innerHTML = css + tableHtml

tableContainer.setAttribute('id', 'table-container')
body.prepend(tableContainer)