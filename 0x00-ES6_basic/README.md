# Project Title

This project includes a set of JavaScript functions that manipulate and iterate over employee data.

## Functions

1. `createEmployeesObject(departmentName, employees)`: Creates an object with a department name and an array of employees.

2. `createReportObject(employeesList)`: Creates a report object that includes all employees and a method to get the number of departments.

3. `createIteratorObject(report)`: Creates an iterator to iterate over each employee in each department.

4. `iterateThroughObject(reportWithIterator)`: Returns a string of all employee names, separated by '|'.

## Usage

```javascript
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator)); // Outputs: Bob | Jane | Sylvie
