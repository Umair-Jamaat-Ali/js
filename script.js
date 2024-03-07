let x = 3;
let y = x++;
console.log("vale of x" ,x , "value of y", y);

let a = 3;
let b = ++a;
console.log("vale of a" ,a , "value of b", b);

let myArr = [1,2,3,4,54,]
console.log(myArr);

// let myarr2 = new myArr()
// console.log(myarr2);

const myarr2 = myArr.join()

console.log(myarr2);
console.log(typeof myarr2);

function person(name,age,fatherName,phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.fatherName = fatherName
}


const array = ["umair","subhan","ali"]

let studentsData = []
const user1 = new person("umair", 27, "jamat ali", "0223456677")
const user2 = new person("subhan", 27, "jamat ali", "0223456677")

studentsData.push(user1)
studentsData.push(user2)

console.log(array.includes("umair"));

const findObject = studentsData.some(item => item.name === "umair");

console.log(findObject);

console.log(user1);

console.log("students data array",studentsData);

let arr = [1,2,3,45,6]

let arr2 = [22,33,44,55]

console.log(arr.push(arr2));

let arr3 = arr.concat(arr2);

// console.log(arr3);

const name = "umair Ali";
const spd = [...name]
console.log( spd);
console.log(typeof spd);

const jon = spd.join("-")
console.log( jon);
console.log(typeof jon);

const sum_array = [1,2,3,4,5,67,8,9]
 
let sum = 1 ;

for (let index = 0; index < sum_array.length; index++) {
    sum  += sum_array[index];  
}

console.log(sum);


const namearr = ["umair", "umar", "ali", "subhan"]

const spd2 = [...namearr]

console.log(spd2);


const array_sort = [1,2,3,4,6,7,5,8,9,6];

const newArray = array_sort.sort()
console.log(newArray);

delete array_sort[2]
 console.log(array_sort);

 // ============================Objects =================

 const studentsRecord = {
    name : "umair",
    email: "umair@google.com",
    "phone Number" : "0234455678",
    "father name" : "jamaat ali"
 }

 console.log(studentsRecord["phone Number"]);
 console.log(studentsRecord.email);

 