# React Overview
- React is a JavaScript library for building use interfaces
- HTML, CSS & JavaScript are about building user interfaces as well
- React makes building complex, interactive and reactive use interfaces simpler
- React is all about "Components" Because all user interfaces in the end are made up of components
- Waht is a "Component"?

## Component
- reusable building blocks in your user interface
- Components are in the end just a combination of HTML code, CSS code for styling and possibly JavaScript code for some logic
- All user interfaces on all kinds of web applications can be split up into components

### Why Components?
- Split big chunks of code into multiple smaller functions
#### Reusability
- Don't repeat yourself
#### Separation of Concerns
- Don't do too many things in one and the same place(function)

### How is a Component Build?
- Components are about combining HTML, CSS and JavaScript
- CSS is the most least important part
- Mostly React components are about combining HTML and JavaScript
- Build your own, cuttom HTML Elements
#### React & Components
- React allows you to create re-usable and reactive components consisting of HTML and JavaScript(and CSS)
##### Declarative Approach
- Define the desired targt state(s) and let React figure out the actual JavaScript DOM instructions

## Creating a new React Project
- https://github.com/facebook/create-react-app
```js
yarn create react-app food-order
// npx create-react-app react-complete-guide
cd react-complete-guide
yarn start
```
- `App.js` is root Component which means it's the main Component being rendered here in our starting file in index JS.
- A Component in React is just a JavaScript function

## Passing Data via "Props"
- We can pass data to the custom component by adding attribute
- And inside of that component, we can then get access to all these attributes which might have been set on our custom component
- This concept is just called props instead of attributes and props simply stands for properties
- We can set properties of our own custom components
- Props allows you to make your component reusable, and it allows you to pass data from another component to this component

## The consept of "Composition"
- props.children is a reserved name and it will always be the content
- props.children allows you to also create wrapper components which is a special type of component, you could say, which you also sometimes need.

## First Summary
### Component-Driven User Interface
- Building Interactive & Scalable UIs
### React Core Syntax & JSX
- Working with Components
- Working With Data

## Module Content
- Handling Events
- Updating the UI & Working with "State"
- A Closer Look At Components & State

## Lifting State Up
- we can only communicate from parent to child and from child to parent

## useState() vs useReducer()
- Generally, you'll know when you need useReducer() (-> when using useState() becomes cumbersome or you're getting a lot of bugs /; unintended behaviors)

### useState()
- The main state management "tool"
- Great for independent pieces of state / data
- Great if state updates are easy and lomited to a few kinds of updates

### useReducer()
- Great if you need "more power"
- Should be considered if you have related pieces of state / data
- Can be helpful if you have more complex state updates