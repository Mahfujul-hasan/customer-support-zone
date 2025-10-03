## What is JSX, and why is it used?
ans: JSX means JavaScript XML. it allow us to write code that looks like HTML inside the javaScript file. and it is mainly use in React.


## What is the difference between State and Props?
Ans: props are input value which use in react component. it looks like arguments of function. we cannot change it.
But state works as component's own memory. we can make our component dynamic using state. we can change its value using hooks.


## What is the useState hook, and how does it work?
Ans: useState is a React Hook. it contain a state variable and its initial sate, can dynamically set the value of the state using setState. for example:
const [card, setCard]=useState([]);

## How can you share state between components in React?
Ans: it multiple components need the same state. then we need to lift state up to  their common parent and and use it as props.

## How is event handling done in React?
Ans: to handle event in react, we need to use camelCase naming. such as in html: onclic(), in react: oneClick(). we can only pass a function to handle event. if we use parameter in the function. we need to write like: 
<button onClick(()=>{handleBtn(data)})></button> 