// |============== props: pasar datos a componentes ==================|

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      {/* <p> Hola {props.name}</p> */}
      Hello {props.name}, you are {props.age} years old
    </div>
  );
};

// const App = () => {
//   const name = "Peter";
//   const age = 10;
//   return (
//     <div>
//       <h1> Grettings </h1>
//       {/* <Hello name="Nombre Antonio" />
//       <Hello name="Nombre Juan" /> */}

//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// Array de componenetes tambine se puede utulizar

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

/*
const App = () => {
  return [<h1>Greetings</h1>, <Hello name="Maya" age={26 + 10} />, <Footer />];
};
*/

// |============== Componentes múltiples ==================|

/*
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
*/

// ============== 1 ==================

/*
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  return (
    <div>
      <p> Hello React JS. it is {now.toString() }</p>
      <p> {a} plus {b} is {a + b} </p>
    </div>
  );
};
*/
export default App;
