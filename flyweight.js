function Person(data) {
    this.ssId = data.ssId || "";
    this.name = data.name || "";
}
function Company(data) {
    this.name = data.name || "";
    this.address = data.address || "";
    this.country = data.country || "";
}
var personFactory = (function () {
        var people = {},
            personCount = 0;
        return {
            createPerson: function (data) {
                var person = people[data.ssId],
                    newPerson;
                if (person) {
                    return person;
                } else {
                    newPerson = new Person(data);
                    people[newPerson.ssId] = newPerson;
                    personCount++;
                    return newPerson;
                }
            },
            getPersonCount: function () {
                return personCount;
            }
        }
    }()),
    companyFactory = (function () {
        var companies = {},
            companyCount = 0;
        return {
            createCompany: function (data) {
                var company = companies[data.name],
                    newCompany;
                if (company) {
                    return company;
                } else {
                    newCompany = new Company(data);
                    companies[newCompany.name] = newCompany;
                    companyCount++;
                    return newCompany;
                }
            },
            getCompanyCount: function () {
                return companyCount;
            }
        }
    }()),
    employee = (function () {
        var employees = {},
            employCount = 0;
        return {
            add: function (data) {
                var person = personFactory.createPerson({
                        ssId: data.ssId,
                        name: data.name
                    }),
                    company = companyFactory.createCompany({
                        name: data.companyName,
                        address: data.companyAddress,
                        country: data.companyCountry
                    });
                employees[data.employeeId] = {
                    employeeId: data.employeeId,
                    occupation: data.occupation,
                    person: person,
                    company: company
                };
                employCount++;
            },
            getEmployees: function () {
                return employees;
            },
            getName: function (employeeId) {
                return employees[employeeId].person.name;
            },
            getOccupation: function (employeeId) {
                return employees[employeeId].occupation;
            },
            getCountry: function (employeeId) {
                return employees[employeeId].company.country;
            },
            getTotalCount: function () {
                return employCount;
            }
        }
    }());

var denOdell = employee.add({
        employeeId: 1456,
        ssId: '122321312',
        name: 'Den Odell',
        occupation: 'Head of web development',
        companyName: 'AKQA',
        companyAddress: "1 St.John's Lane,London",
        companyCountry: 'GB'
    }),
    denOdell = employee.add({
        employeeId: 1234,
        ssId: '32423423342',
        name: 'Den Odell',
        occupation: 'Head of web development',
        companyName: 'AKQA',
        companyAddress: "1 St.John's Lane,London",
        companyCountry: 'GB'
    }),
    denOdell = employee.add({
        employeeId: 1111,
        ssId: '1234-567-8901',
        name: 'Den Odell',
        occupation: 'Head of web development',
        companyName: 'AKQA',
        companyAddress: "1 St.John's Lane,London",
        companyCountry: 'GB'
    }),denOdell = employee.add({
        employeeId: 2222,
        ssId: '1234-567-8901',
        name: 'Den Odell',
        occupation: 'Head of web development',
        companyName: 'AKQB',
        companyAddress: "1 St.John's Lane,London",
        companyCountry: 'GB'
    });
console.log(personFactory.getPersonCount());
console.log(companyFactory.getCompanyCount());
console.log(employee.getTotalCount());
console.log(employee.getEmployees());