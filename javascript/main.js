const path = require("path");

// variable
var a = 1;
var b = "abc";
var c = 1.5;
let d = [1, 2, 3, 4];
const e = Math.PI;

console.log(a, b, c, d, e);

// noi chuoi
let string1 = "dao";
let string2 = "long";
let string3 = string1 + " " + string2;

console.log(string3);
console.log(`${string1} ${string2}`); // literal string

// so sanh
console.log(1 !== 2);

// toan tu logic
console.log(true || false);
console.log(true && false);
console.log(!true);

// kieu du lieu
// ham la gi
// declaration function
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));

// expression function
var sumFunction = function (num1, num2) {
  console.log(num1 + num2);
};

sumFunction(2, 3);

// arrow function
const aArrowFunc = (num1, num2) => num1 + num2;

console.log(aArrowFunc(4, 5));

// bt1: viet 1 ham hien thi thong tin ca nhan

function showInformation(name, age, address) {
  console.log(`name: ${name}\nage: ${age}\naddress: ${address}`);
}

showInformation("long dao", 22, "Ha noi");

// bt2: viet ham tinh dien tich tam giac va hien thi ra man hinh canh1: , canh2: , dien tich:

function dientich(cgv1, cgv2) {
  const result = (cgv1 * cgv2 * 1) / 2;
  console.log(`canh1: ${cgv1} canh2: ${cgv2}, dien tich: ${result}`);
}

dientich(20, 40);

console.log(path.dirname(__filename));

// lam viec voi mang
const aArray = [1, 'long', true];
const aArray2 = [1, 'trong', true];

const aObject = {
  a: '1',
  b: '2',
};

for (const item of aArray) {
  console.log(item);
}

aArray.forEach(function (item, index, array) {
  console.log(item);
});

Array.prototype.forEach2 = function (callback) {
  // this o day chinh la aArray
  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

// o truong hop nay callback:
aArray.forEach2(function (item) {
  console.log(item);
});

aArray2.forEach2(function (item) {
  console.log(item);
});

// truong hop dung ham fillter build-in
const newArray = aArray.filter((item, index) => typeof item == 'number');
console.log(newArray);

Array.prototype.fillter2 = function (callback) {
  let result = [];

  // logic
  for (const index in this) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
};

// truong hop dung ham fillter custom
const newArray2 = aArray.fillter2((item) => typeof item == 'number');
console.log(newArray2);

// form validation
