//-----------------------------Assignment 1: Building Your Friend List------------------------------------------

                               
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends. 2. Create
// three separate objects, each representing a friend, with properties like firstName, lastName,
// and optionally id.
// 3. Add these friend objects to the friends array within the people object. 4. Output the
// entire people object to the console, displaying your information and your friend list.

type Friend={
    firstName:string;
    lastName:string;
    id?:number;
};

let people={
    friends:[] as Friend[]
};


let friend1:Friend ={
    firstName :"Muhammad",
    lastName :"Taha",
    id : 123
};
let friend2:Friend={
    firstName :"Awais",
    lastName :"Ali",
    id : 4444
};
let friend3:Friend={
    firstName :"Ayan",
    lastName :"Ali"

};
people.friends.push(friend1,friend2,friend3);
console.log(people);












//-------------------------------Assignment 2:Manipulating an Array: Rearranging Words------------------------


// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of
// GIAIC". Steps:

// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC"


const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.pop();
scrambledArray.unshift("I")
scrambledArray.splice(3,4);
scrambledArray.splice(1,0,"am","a")
console.log(scrambledArray.join(" "));











//-----------------------------------  Assignment 3: Company Product Catalog-----------------------------------




// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.

// Task: Create a program to represent a product catalog using an array and perform basic queries.

// 1. Define an array named inventory to store product information.

// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.

// 3. Add these product objects to the inventory array using an appropriate array method.

// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.

// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.



//Define an array named inventory to store product information.
let inventory =[] as Product[]

type Product ={
    name:string;
    model:number;
    cost:number;
    quantity:number
};


//Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
let product1 :Product ={
    name:"watch",
    model:2022,
    cost :2000,
    quantity:200
};
let product2 :Product ={
    name:"iphone",
    model:2023,
    cost :100000,
    quantity:100
};
let product3 :Product ={
    name:"HP-Laptop",
    model:2020,
    cost :50000,
    quantity:50
};

//Add these product objects to the inventory array using an appropriate array method.

inventory.push(product1,product2,product3)
console.log(inventory);

// Access and log the quantity property of a specific product  in theinventory array.
console.log("Quantity of 2nd product is",inventory[1].quantity);


//Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
let product4 :Product = {
    name: "Bracelet",
    model:2024,
    cost:1000,
    quantity:1500
}


inventory.push(product4)
console.log(inventory);

















//---------------------------- Assignment 4: Student List Organizer-----------------------------------------------



                             // Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.

// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!

// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?

// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?



interface Student {
    name:string;
    seniorStatus:boolean;
    hasCompletedAssignment:boolean;  
};

let Students : Student[] = [
    {
        name:"Taha",
        seniorStatus:true,
        hasCompletedAssignment:true
    },
    {
        name:"Ali",
        seniorStatus:false,
        hasCompletedAssignment:true
    },
    {
        name:"Ayan",
        seniorStatus:true,
        hasCompletedAssignment:true
    },
    {
        name:"Hadi",
        seniorStatus:true,
        hasCompletedAssignment:false
    },
]

// find the senior student  with using of filter method
const senior = (Students:Student[]) =>{
    return Students.filter(student => student.seniorStatus && student.hasCompletedAssignment === true);
};

console.log("Senior Student",senior(Students));


//class list update remove student who haven't completed their Assignments

const updateList=(Students:Student[]) =>{
    return   Students.filter(Student => Student.hasCompletedAssignment  === false);
};
console.log("Update list",updateList(Students));
