import React from 'react';

const StudentMarks = props => {
  const { marks } = props
  // debugger
  return (
    <div>
      <h3>English: {marks.english}</h3>
      <h3>Hindi: {marks.hindi}</h3>
      <h3>Mathematics: {marks.mathematics}</h3>
    </div>
  )
}


export default StudentMarks