// * 1
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

// Sample Input:
// multiplyValue(10);
// multiplyValue(10, 5);
// multiplyValue(7, 0);

// *2

const processInput = (
  value: string | number | boolean,
): string | number | boolean | undefined => {
  if (typeof value === "string") {
    const formatedValue = value.trim().toLowerCase();
    return `"${formatedValue}"`;
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return `"Active"`;
    }
    if (value === false) {
      return `"Inactive"`;
    }
  }
};

// Sample Input:
// processInput("  TypeScript  ");
// processInput(7);
// processInput(true);
// processInput(false);

// * 3

const formatCoordinate = (dhakaLatLog: readonly [number, number, string]) => {
  return `"Location: ${dhakaLatLog[2]} (${dhakaLatLog[0]}, ${dhakaLatLog[1]})"`;
};

// Sample Input:
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

//* 4

const concatenateArrays = <T>(...value: T[][]) => {
  console.log(value.flat());
};

// Sample Input:
// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

//* 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const coursesArray: Course[] = [];

  for (const course of courses) {
    if (course.students > minStudents && course.isPublished === true) {
      coursesArray.push(course);
    }
  }
  return coursesArray;
};

// Sample Input:
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];

// console.log(getPopularCourses(courses, 80));

//* 6

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((itm) => itm[key]);
};
// Sample Input:
// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" },
// ];

// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));

// *7

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo() {
    return `"Manager of ${this.department}: ${this.name}"`;
  }
}

// Sample Input:
// const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());

// * 8

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
};

// console.log(await validateAgeAsync(20));
// console.log(await validateAgeAsync(15));
