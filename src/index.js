const bar = (text) => console.log(text)
const helloWorld = () => 'Hello World'
const foo = (x=10, y=42) => console.log(x,y);

// String literals
bar(`${helloWorld()}`)  // Hello World

// Default Parameter Values
foo() // 10 42
