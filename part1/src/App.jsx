const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  function Header({course}){
    return (<h1>{course.name}</h1>);
  }

  function Content ({course}){
    return(
      <div>
        <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
        <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
        <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
      </div>
    );
  }

  function Part({part, exercises}){
    return(
      <p>
        {part} {exercises}
      </p>
    );
  }

  function Total({course}){
    return(<p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>);
  }

  return (
    <section>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </section>
  )
}

export default App