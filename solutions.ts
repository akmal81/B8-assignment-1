
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};



const processInput = (
  value: string | number | boolean,
): string | number | undefined => {
  if (typeof value === "string") {
    const formatedValue = value.trim().toLowerCase();
    return formatedValue;
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? "Active" : "Inactive";
  }
};



const formatCoordinate = (
  dhakaLatLog: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = dhakaLatLog;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};



const concatenateArrays = <T>(...value: T[][]): T[] => {
  return value.flat();
};



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
    if (course.students >= minStudents && course.isPublished === true) {
      coursesArray.push(course);
    }
  }
  return coursesArray;
};





const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((itm) => itm[key]);
};




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





const  validateAgeAsync=async(age: number): Promise<string> =>{
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older")
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}

