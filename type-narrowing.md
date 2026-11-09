# 🚀 Type Narrowing 

Type Narrowing is a very powerful feature of Typescript that use to narrow down or refine a variable's type within a specific block of code.

When a variable has multiple possible type like a Union type , TypeScript uses conditional checks to find out exactly which type that variable holds

For example, if a variable has union type string | number generally we can not run 
.toUpperCase() method, because toUpperCase() not work with number. By using type narrowing, we apply condition to assure the compiler which type the variable is.

-- Example:
```ts
type ValueFormat = string | number

const textFromater = (value:ValueFormat) =>{

    //Here appling condition to assure the compiler which type the variable is
    if(typeof value === "string"){
      return   value.toUpperCase()
    } else {
        return value
    }

}

```
---
# 🚀 Example of typeof instanceof, and the in operator

### 1. Type Narrowing with the typeof operator

```ts
const toggleStatus=(status:boolean | number)=>{
    if(typeof status === "boolean"){
        // In this block status must be a boolean 
        return  status? "Active" : "Inactive"
    }else {
        // In this block status must be a number 
        return status === 1 ? "Active" : "Inactive"
    }
}
```
---
### 2. Type Narrowing with the instanceof operator


```ts
class Truck {
    load(){
        console.log("5 ton hole Bangladesh");
    }
}

class Bus {
    passenger(){
        console.log("50 passenger per trip")
    }
}

const vehicleType =(vehicle:Truck | Bus)=>{
    // Type narrowing using instanceof
    if(vehicle instanceof Truck){
        vehicle.load();
    }else {
        vehicle.passenger()
    }
}


const myTruck = new Truck()
vehicleType(myTruck)
const myBus = new Bus()
vehicleType(myBus)

```
---
### 3. Type Narrowing with the in operator

```ts
interface IAdmin {
    name:string;
    adminRole: string[]
}

interface IUser{
    name:string;
    userRole:string[]
}

const handleUser=(user:IAdmin | IUser)=>{
    if("adminRole" in user){
        // In this block, TypeScript understands this is the Admin interface
        return "Admin User"
    }else{
        // In this block, it is the User interface
        return "General User"
    }
}

const normalUser: IUser = {
    name: "Rahim",
    userRole: ["Viewer", "client"]
};
const adminUser: IAdmin = {
    name: "Karim",
    adminRole: ["Editor"]
};

console.log(handleUser(adminUser));

```
---
Type Narrowing is an essential concept in Typescript. It allows us to ensure type safety and prevent runtime errors.
