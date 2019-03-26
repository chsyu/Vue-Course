
// let second = 0;
// setInterval(
//   () => {
//     second++;
//     document.querySelector('#timer').innerHTML = `Second is ${second}`;
//   }, 
//   1000);

let setTime = () => {
  let second = 0;
  return (
    () => {
      second ++;
      document.querySelector('#timer').innerHTML = `Second is ${second}`;
    }
  );
};

setInterval(setTime(), 1000);

