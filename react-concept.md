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
npx create-react-app react-complete-guide
cd react-complete-guide
yarn start
```
- `App.js` is root Component which means it's the main Component being rendered here in our starting file in index JS.
- A Component in React is just a JavaScript function