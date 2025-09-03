// |============== Componente Principal App ==================|
const App = () => {
  const course = "Half Stack Application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using propos to pass data";
  const exercises2 = 7;
  const part3 = "State of component";
  const exercises3 = 14;

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
  console.log(props);
  return <h1>{props.course}</h1>;
};
// |===== Content  =====|

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

// |===== Total  =====|
const Total = (props) => {
  console.log(props);

  const total_exercices =
    props.exercises1 + props.exercises2 + props.exercises3;

  return (
    <div>
      <p>Number of Exercices {total_exercices}</p>
    </div>
  );
};

export default App;
