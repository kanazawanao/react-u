# Next-Gen JavaScript
## Understanding "let" and "const"
### let
- new var, you use it for variable values
- use let if you want to create a variable that really is variable
### const
- you plan on creating a constant value
- something which you only assign once and never change

## Arrow FUnctions
- a different syntax for creating Javascript functions
```js
// normal funciton
function myFnc() {
  ...
}
//Arrow function
const myFnc = () => {
  ...
}
```


## Exports & Imports(Modules)
```js
const person = {
  name: 'Max'
}

export default person
```
```js
export const clean = () => {...}
export const baseData = 10;
```
```js
import person from './person.js'
import prs from './person.js'

import {baseData} from './utility.js'
import {clean} from './utility.js'
```
- the `default` keyword simply means if we just import something from that file it will always be ort default export
- in this case the person constant therefore in import person from person.js we can name person whatwver we want, which is why I printed it twice here, person or prs doesn't matter
- it always refers to the thing you marked as the default with the default keyword
- For utility, we import from two different constants and therefore the import syntax uses the curly braces to explicity target specific things from that file
- There are so-called named exports because we import the stuff by its name
### default export
```js
import person from './person.js'
import prs from './person.js'
```
### named export
```js
import {smth} from 'utility.js'
import {smth as Smth} from 'utility.js'
import * as bundled from 'utility.js'
```

## Classes
- Classes are essentially blueprints for objects
```js
// class
class Person {
  // property
  name = 'Max'
  // method
  call = () => {...}
}
// usage
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)
// inheritance
class Person extends Master
```
- example
```js
class Human {
  constructor() {
    this.gender = 'male';
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
  }
  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printGender();
```

## Classes, Properties & Method
- properties are like "variables attached to classes/ objects"
- you can assign a property directly inside your class with myPropety equlas value
- so you skip the constructor function call
```js
// ES6
constructor() {
  this.myProperty = 'value'
}
// ES7
myProperty = 'value'
```
- methods are like "functions attached to classes/ objects"
- use the syntax from the left where you set up a property and simply think of a method as a property which stores a functions as a value and then you end up with that
```js
// ES6
myMethod() {...}
// ES7
myMethod = () => {...}
```
- the great advantage of this syntax is that since you use an arrow function as property value here you've got no problems with the `this` keyword

## Spread & Rest Operators
- Actually it's only one operator three dots
### Spread
- used to split up array elements OR object properties
```js
const newArray = [...oldArray, 1, 2]
const newObjext = {...oldObject, newProp:5}
```
### Rest
- used to merge a list of function arguments into an array
```js
function sortArgs(...args) {
  return args.sort()
}
```

```js
// Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: 'Max'
};
const newPerson = {
  ...person,
  age: 28
}
console.log(newPerson);

// Rest
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3))
```

## Destructing
- Destructing allows you to easily extract array elements or objext properties and store them in variables
- Destructing allows you to pull out single elements or properties and store them in variables for arrays and object
### Array Destructing
```js
[a, b] = ['Heelo', 'Max']
console.log(a) // Hello
console.log(b) // Max
```
### Object Destructing
```js
{name} = {name: 'Max', age: 28}
console.log(name) // Max
console.log(age) //undefined
```
- ex
```js
const numbers = [1, 2, 3]
[num1, , num3] = numbers;
console.log(num1, num3) // 1 3
```

## Reference and Primitive Types Refresher
- numbers, strings, booleans, these are so-called primitive types whenever you reassign or you store a varuable in another variable it will copy the value
- objects and arrays are reference types
```js
const person = {
  name: 'Max'
}
const secondPerson = person;
console.log(secondPerson.name) // 'Max'
person.name = 'Manu'
console.log(secondPerson.name) // 'Manu'
```
- the reason for it is that it just copied the pointer and points to the exact same object in memory as person does
- Therefore we will learn techniques to copy this in an immutable way which means we copy that by really copying the object and not just a pointer for that we can use this spread operator
```js
const person = {
  name: 'Max'
}
const secondPerson = {
  ...person
};
console.log(secondPerson.name) // 'Max'
person.name = 'Manu'
console.log(secondPerson.name) // 'Max'
```

## Refreshing Array Functions
- `map()`
- `find()`
- `findIndex()`
- `filter()`
- `reduce()`
- `concat()`
- `slice()`
- `splice()`
```js
const numbers = [1, 2, 3]
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});
console.log(numbres); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]
```