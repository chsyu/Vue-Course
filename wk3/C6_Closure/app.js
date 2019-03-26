// global counter
let counter = 0;
let addglobal = () => {
  counter += 1;
  console.log(counter);
}
addglobal();
addglobal();
addglobal();

// local counter
let addlocal = () => {
  let counter = 0;
  counter += 1;
  console.log(counter);
}
addlocal();
addlocal();
addlocal();

// closure
let addclosure = (() => {
  let counter = 0;
  return () => {
    counter += 1;
    console.log(counter);
  }
})();
addclosure();
addclosure();
addclosure();

// closure
let add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}

let add5 = add(5);
add5(3);

