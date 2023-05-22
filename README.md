# Pair of Employees Who Have Worked Together

This application is designed to identify the pair of employees who have worked together on common projects for the longest period of time. The input data is provided in a CSV file with the following format: EmpID, ProjectID, DateFrom, DateTo.

## Input Data

The input data should be provided in a CSV file, where each row represents an employee's project assignment. The CSV file should have the following columns:

* EmpID: Employee I
* ProjectID: Project ID
* DateFrom: Start date of the project assignment
* DateTo: End date of the project assignment or NULL if it is equivalent to today

Here is an example of the input data format:

```csv
    1, 10, 2023-04-19T12:30:00, May 21 2023 12:30:00
    2, 10, 04/19/2023, 1684616400000
    3, 20, 19 April 2023, 2023-05-20T12:00:00Z
    4, 20, May 19 2023 12:30:00, NULL
    1, 30, 19 May 2023, NULL
    2, 30, January 25 2015, 2023-05-21
````
### Note

The application supports multiple date formats for the input data. It can handle different date formats in the DateFrom and DateTo columns.

## User Interface

The application provides a user interface (UI) that allows the user to select the input CSV file. After selecting the file, the application will display the common projects of the employee pair in a datagrid with the following columns:

* Employee ID #1: Employee ID of the first employee in the pair
* Employee ID #2: Employee ID of the second employee in the pair
* Project ID: ID of the common project
* Days worked: Number of days the pair has worked together on the common project


## Architecture

```bash
├───public
├───src
│   ├───components
│   │   ├───home
│   │   ├───Table
│   │   │   ├───Row
│   │   │   │   └───Cell
│   └───hooks
└───────────────────────
```
