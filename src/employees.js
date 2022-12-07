const sectionElements = document.querySelectorAll("section");
const bouttonElements = document.querySelectorAll(".main-button");
const empFormElement = document.querySelector(".employee-form");
const fullListElement = document.querySelector(".employees-list-full");
const salaryListElement = document.querySelector(".employees-list-salary");
//  ------------------------
const inputElements = document.querySelectorAll(".form-class [name]");
const inputSalaryElements = document.querySelectorAll(".salary-form-class [name]");

const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
let from = -1;
let to = -1;
const company = new Company();

const dateErrorElement = document.getElementById("date_error");
const salaryErrorElement = document.getElementById("salary_error");
const fromToErrorElement = document.getElementById('from-to-salary-error');
const salaryTitleElement = document.getElementById('salary-sub-title');
const allEmpsTitleElement = document.getElementById('all-employees-list-title');

function show(index) 
{
    if(index==1) 
    {
        allEmpsTitleElement.innerHTML = `Full Employees List, length=${company.amountOfEmployees()}`;
        fullListElement.innerHTML = getFullEmployeesList();
    } else if(index==2) 

    {
        from = -1;
        to = -1;
    }
    sectionElements.forEach(section => section.hidden = true);
    sectionElements[index].hidden = false;
}

function onSubmit(event) 
{
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => 
        {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
    company.hireEmployee(employee);    
}

function onChange(event) 
{
    if (event.target.name == "salary") 
    {
        validateSalary(event.target)
    } else if (event.target.name == "birthDate") 
    {
        validateBirthdate(event.target);
    }

}
function validateSalary(element) 
{
    const value = +element.value;
    if (value < MIN_SALARY || value > MAX_SALARY) 
    {
        const message = value < MIN_SALARY ? `salary must be ${MIN_SALARY} or greater`
            : `salary must be ${MAX_SALARY} or less`;
        showErrorMessage(element, message, salaryErrorElement);
    }

}
function validateBirthdate(element) 
{
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) 
    {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function showErrorMessage(element, message, errorElement) 
{
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => 
    {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() 
{
    return new Date().getFullYear();
}

function Company() 
{
    this.employees = [];
}

Company.prototype.hireEmployee = function(employee) 
{
    this.employees.push(employee);
}

Company.prototype.getAllEmployees = function()
{
    return this.employees;
}

Company.prototype.getEmployeesBySalary = function(salaryFrom, salaryTo) 
{
    let empls =  this.employees.filter( (emp) => 
    {
        return emp.salary > salaryFrom && emp.salary < salaryTo;
        })
    return empls;
}

Company.prototype.amountOfEmployees = function() 
{
    return this.employees.length;
}




function getFullEmployeesList() 
{
    let arrEmps = company.getAllEmployees();
    console.log('len=', arrEmps.length);
    return getEmployeesDataArray(arrEmps);
}

function getEmployeeData1(emp) 
{
    console.log(emp);
    const keys = Object.keys(emp);
    let res = keys.reduce( (r, cur) => 
    {
        return r+cur+' : '+emp[cur]+' ';
    }, '');
    return `<li class="employee-item">${res}</li>`;
}

function getEmployeeData(emp) 
{
    return `<li class="employee-item">| Name: ${emp.employee_name} | Birthdate: ${emp.birthDate} |
    Department: ${emp.department} | Salary: ${emp.salary} | EMAIL: ${emp.email}</li>`
}

function getEmployeeSalariesList() 
{
    let arrEmps = company.getEmployeesBySalary(from, to);
    return getEmployeesDataArray(arrEmps);
}

function getEmployeesDataArray(arrEmps) 
{
    let arrItems = arrEmps.map( emp => getEmployeeData(emp));
    return arrItems.join('');
}

function onSubmitS(event) 
{
    event.preventDefault();
    salaryFromTo = Array.from(inputSalaryElements).reduce(
        (res, cur) => 
        {
            res[cur.name] = +(cur.value);
            return res;
        }, {}
    )
    console.log("submitted salaries", salaryFromTo);
    salaryTitleElement.innerHTML = `Employees with salary from ${from} to ${to}`;
    salaryListElement.innerHTML = getEmployeeSalariesList();
}

function onChangeS(event) 
{
    if (event.target.name == "salaryFrom") 
    {
        validateSalaryFrom(event.target)

    } else if (event.target.name == "salaryTo") 
    {
        validateSalaryTo(event.target);
    }

}
function validateSalaryFrom(element) 
{
    const value = +element.value;
    from = (value < 0) ? 0 : value;
    if(to > -1 && from > to) 
    {
        showErrorMessage(element, `salaryFrom= ${from} has to be less than ${to}`, fromToErrorElement);    
    }

}
function validateSalaryTo(element) 
{
    const value = +element.value;
    to = (value < 0) ? 0 : value;
    if(from > -1 && from > to) 
    {
        showErrorMessage(element, `salaryFrom= ${from} has to be less than ${to}`, fromToErrorElement);    
    }
}
