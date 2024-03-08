let x = 3;
let y = x++;
console.log("vale of x", x, "value of y", y);

let a = 3;
let b = ++a;
console.log("vale of a", a, "value of b", b);

let myArr = [1, 2, 3, 4, 54,]
console.log(myArr);

// let myarr2 = new myArr()
// console.log(myarr2);

const myarr2 = myArr.join()

console.log(myarr2);
console.log(typeof myarr2);

function person(name, age, fatherName, phone) {
   this.name = name;
   this.age = age;
   this.phone = phone;
   this.fatherName = fatherName
}


const array = ["umair", "subhan", "ali"]

let studentsData = []
const user1 = new person("umair", 27, "jamat ali", "0223456677")
const user2 = new person("subhan", 27, "jamat ali", "0223456677")

studentsData.push(user1)
studentsData.push(user2)

console.log(array.includes("umair"));

const findObject = studentsData.some(item => item.name === "umair");

console.log(findObject);

console.log(user1);

console.log("students data array", studentsData);

let arr = [1, 2, 3, 45, 6]

let arr2 = [22, 33, 44, 55]

console.log(arr.push(arr2));

let arr3 = arr.concat(arr2);

// console.log(arr3);

const name = "umair Ali";
const spd = [...name]
console.log(spd);
console.log(typeof spd);

const jon = spd.join("-")
console.log(jon);
console.log(typeof jon);

const sum_array = [1, 2, 3, 4, 5, 67, 8, 9]

let sum = 1;

for (let index = 0; index < sum_array.length; index++) {
   sum += sum_array[index];
}

console.log(sum);


const namearr = ["umair", "umar", "ali", "subhan"]

const spd2 = [...namearr]

console.log(spd2);


const array_sort = [1, 2, 3, 4, 6, 7, 5, 8, 9, 6];

const newArray = array_sort.sort()
console.log(newArray);

delete array_sort[2]
console.log(array_sort);

// ============================Objects =================

const studentsRecord = {
   name: "umair",
   email: "umair@google.com",
   "phone Number": "0234455678",
   "father name": "jamaat ali"
}

console.log(studentsRecord["phone Number"]);
console.log(studentsRecord.email);

//================== for loops ========

for (let index = 0; index < 10; index++) {
   const element = array[index];
   console.log(element);
}

for (let i = 0; i <= 10; i++) {
   console.log(`value of outer loops i ${i}`);
   for (let j = 0; j <= 10; j++) {

      // console.log(`value of inner loops j ${j} : value of outer loops i ${i}`);

      console.log(i + "X" + j + "=" + i * j);
   }

}


//  for (let index = 0; index < 20; index++) {
//     if (index === 5) {
//         console.log(`decated the ${index}`);
//         break
//     }
//     console.log(`value of index ${index}`);
//  }


for (let index = 0; index < 20; index++) {
   if (index === 5) {
      console.log(`decated the ${index}`);
      continue
   }
   console.log(`value of index ${index}`);
}


let index = 0;

while (index <= 10) {
   console.log(`value of while ${index}`);
   index = index + 5
}


let arra = ["umair", "subhan", "ali", "mehran", "saqib"]

let i = 0;

while (i < arra.length) {
   console.log(`value of array ${arra[i]}`);
   i = i + 1
}


const newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newarr1 = newarr.filter((item) => {
   return item <= 5
})
console.log(newarr1);

const newarr2 = newarr.filter((item) => {
   return item > 5
})

console.log(newarr2);


let books = [
   {
      title: "Book One", genre: "History", publish: 1986, edition: 1996
   },
   {
      title: "Book Two", genre: "Science", publish: 1991, edition: 2000
   },
   {
      title: "Book Three", genre: "Arts", publish: 1998, edition: 2004
   },
   {
      title: "Book Four", genre: "History", publish: 2002, edition: 2010
   },
   {
      title: "Book Five", genre: "Science", publish: 2012, edition: 2016
   },
   {
      title: "Book Six", genre: "Arts", publish: 2014, edition: 2018
   },
   {
      title : "Book Seven", genre : "Science" , publish : 2019 , edition : 2022
   }
]

const filterBook = books.filter((item)=> {
   return item.publish >= 1995 
})
console.log(filterBook);

const filterBooks1 = books.filter((items) => {
   return items.publish >= 1995 && items.genre === "History"
})
console.log(filterBooks1);


let num = [1,2,3,4,5,6,7,8,9,10]

let newNum = num.map((item) => {return item + 1}).map((item) => { return item * 10}).filter((item) => {
  return item >= 50
})

console.log(newNum);

const input = [1, -4, 12, 0, -3, 29, -150]; 

let result = input.filter((item) => item >= 0)
console.log(result);