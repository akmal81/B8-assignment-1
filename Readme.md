# Assignment-1 TypeScript Functions and Classes Overview
```
This Assignment demonstrates various TypeScript features, including utility functions, generics, object-oriented programming (OOP) principles, and asynchronous operations. Below is a detailed summary of each code block and function included:
```
---
### 📌1. Functions & Default Parameters
```
multiplyValue
Description: Takes a value and a multiplier (with a default value of 2) and returns the calculated product.
```
---
### 📌2. Type Guards & Union Types
```
processInput
Description: Accepts a union type (string | number | boolean) and uses the typeof operator to handle each type accordingly:

String: Trims the whitespace and converts the string to lowercase.

Number: Multiplies the number by 10.

Boolean: Returns "Active" if true, or "Inactive" if false.
```
---
### 📌3. Readonly Tuples
```
formatCoordinate
Description: Takes a readonly tuple (readonly [number, number, string]) containing latitude, longitude, and location name, and returns a formatted string.
```
---
### 📌4. Generic Functions
```
concatenateArrays
Description: A generic (<T>) utility function that flattens and merges multiple arrays into a single combined array.

pluckValues
Description: Takes an array of objects and a specific key, returning a new array containing all extracted values corresponding to that key.
```
---
### 📌5. Interfaces & Array Filtering
```
Course Interface & getPopularCourses
Description:

The Course interface defines title, students, and isPublished properties.

The getPopularCourses function filters an array of courses and returns only those that meet or exceed the minimum student requirement (minStudents) and are published (isPublished: true).
```
---
### 📌6. Object-Oriented Programming (OOP - Inheritance & Access Modifiers)
```
Employee & Manager Classes
Employee Class: Utilizes protected (name) and private (baseSalary) access modifiers, and provides a getDetails() method.

Manager Class: Extends the Employee class, introduces a department property, and implements a getRoleInfo() method.
```
---
### 📌7. Asynchronous Programming & Error Handling
```
validateAgeAsync
 An asynchronous function that checks a user's age. If the age is below 18, it throws an error ("Access Denied: Must be 18 or older"). Otherwise, it resolves with "Access Granted" after a 1-second delay.
```
