// |============== Componente Principal App ==================|
const App = () => {
  const course = "Half Stack Application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using propos to pass data";
  const exercises2 = 7;
  const part3 = "State of component";
  const exercises3 = 14;

  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

// |============== Componentes  ==================|

// |===== Header  =====|

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

// |===== Part  =====|

const Part = (props) => {
  return (
    <>
      {props.name} {props.exercices}
    </>
  );
};

// |===== Content  =====|

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercices={props.exercises1} />
      <Part name={props.part2} exercices={props.exercises2} />
      <Part name={props.part3} exercices={props.exercises3} />
    </div>
  );
};

// |===== Total  =====|
const Total = (props) => {
  const total_exercices =
    props.exercises1 + props.exercises2 + props.exercises3;

  return (
    <div>
      <p>Number of Exercices {total_exercices}</p>
    </div>
  );
};

export default App;
