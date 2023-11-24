// Testing basic JavaScript functionality

console.log('----------------------------------------------------------')
console.log('VARIABLES')
console.log('----------------------------------------------------------')


const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
// x = 4               // causes an error


console.log('----------------------------------------------------------')
console.log('ARRAYS')
console.log('----------------------------------------------------------')


const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})                    

const newArray = [1, -1, 3]

const t2 = newArray.concat(5)  // creates new array

console.log(newArray)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

// map functions
const m1 = t.map(value => value * 2)
console.log(m1)   

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed


// destructive assignment
const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t4

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed


console.log('----------------------------------------------------------')
console.log('OBJECTS')
console.log('----------------------------------------------------------')

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

object1.address = 'Helsinki'
object1['secret number'] = 12341


console.log('----------------------------------------------------------')
console.log('FUNCTIONS')
console.log('----------------------------------------------------------')

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => {
    console.log(p)
    return p * p
}

const square2 = p => p * p

const nums = [1, 2, 3]
const tSquared = nums.map(p => p * p)
// tSquared is now [1, 4, 9]

function product(a, b) {
    return a * b
}
  
const result1 = product(2, 6)
// result is now 12

const average = function(a, b) {
    return (a + b) / 2
}
  
const result = average(2, 5)
// result is now 3.5

console.log('----------------------------------------------------------')
console.log('METHODS FOR OBJECTS')
console.log('----------------------------------------------------------')

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    },
}
  
arto.greet()  // "hello, my name is Arto Hellas" gets printed

// Assigning methods after object creation
arto.growOlder = function() {
    this.age += 1
}
  
console.log(arto.age)       // 35 is printed
arto.growOlder()
console.log(arto.age)       // 36 is printed

arto.doAddition(1, 4)       // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) // 25 is printed


console.log('----------------------------------------------------------')
console.log('CLASSES')
console.log('----------------------------------------------------------')

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
  const adam = new Person('Adam Ondra', 29)
  adam.greet()
  
  const janja = new Person('Janja Garnbret', 23)
  janja.greet()