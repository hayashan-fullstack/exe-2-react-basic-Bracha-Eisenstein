import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    props.parts.map(i => <Part part={i.name} exercises={i.exercises} />)
  )
}
const Part = (props) => {
  return (
    <p>{props.part}{props.exercises}  </p>
  )
}
const Total = (props) => {
    return (
      <p>{props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} </p>
    )
  }
  ReactDOM.render(<App />, document.getElementById('root'))


