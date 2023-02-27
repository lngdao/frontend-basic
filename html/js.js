function person(name, age) {
  this.name = name
  this.age = age
}

person.height = 173

let newPer = new person('long', 22)



console.log(newPer)
