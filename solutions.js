"use strict";
const multiplyValue = (value, multiplier) => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished === true && course.students >= minStudents);
};
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
// Test 2: বয়স ১৮-এর কম
validateAgeAsync(16)
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    if (error instanceof Error) {
        console.log(error.message);
    }
});
