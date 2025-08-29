const Hello = () => {
  return (
    <div>
      <p>Hello en React</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1> Grettings </h1>
      <Hello />
    </div>
  );
};
// ============== 1 ==================
// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   console.log(now, a + b);

//   return (
//     <div>
//       <p> Hello React JS. it is {now.toString() }</p>
//       <p> {a} plus {b} is {a + b} </p>
//     </div>
//   );
// };

export default App;
