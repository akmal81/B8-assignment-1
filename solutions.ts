// * 1
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

// console.log(multiplyValue(10));
// console.log(multiplyValue(10,5));
// console.log(multiplyValue(7,0));

// *2

const processInput = (value: string | number | boolean) => {
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

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));


// * 3

const formatCoordinate =()=>{
    
}