import React from 'react';
import StudentItem from './StudentItem'

class StudentList extends React.Component {
  
renderStudents = () => {
  return this.props.results.map( ({firstName, lastName, marks, index}) => {
    debugger
    return <StudentItem
            key={index}
            firstName={firstName}
            lastName={lastName}
            marks={marks}
            />

  })
}

render() {
  return (
    <div>
      {this.renderStudents()}
    </div>
  )
}

}


export default StudentList