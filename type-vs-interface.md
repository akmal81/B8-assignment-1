# 🚀 Core differences between type aliases and interface

Typescript Type Alias and Interface are both use to define object structure. But they have some core differences between them. Bellow the core difference are discussed

### 📌1. declaration Merging: 
If we declare multipule type with same name it will not merge throw error but multiple Interface with same name will merge autometically

```ts
type SalaryType=number
type SalaryType=number
// will show error 
Duplicate identifier 'Salary'.

//  but interface will merge

interface ISalary {salary:number}
interface ISalary {total:number}

const salary:ISalary={
    salary:1000,
    total:2000
}

```
---
### 📌2. Primitives & Unions
Type alias use for primitive type like string, number, union, tuple in the othr hand interface use to define object structure but it can be extended

```ts
// type
type name=string;
type age = number;
type id = string | number;
type empInfo = [string, number] 

// interface

interface IEmployee {
     name:string;
     age : number;
     id : string | number;
     empInfo :[string, number] 
}
```
---

### 📌3. Extending / Inheritance
Type alis can be extended useing intersection (&) operator. Interface can be extended useing extends keyword

```ts
// Use of &
type Employee = {
    name:string,
    address:string
};
type Role ={
    role:string
}

type Manager = Employee & Role;

// Use of extended keyword

interface IEmployee {
    name:string,
    address:string
}

interface Manager extends IEmployee{
    role:"MANAGER"
}

```
---
To summarize interface is preferred for defining object and object-oriented designs
in the other hand type alias is more flexible for premitive union or complex type combinations. we should use both according to project's requirements.