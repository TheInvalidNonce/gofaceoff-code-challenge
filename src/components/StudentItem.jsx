import React from 'react';
import { Link } from 'react-router-dom'

const StudentItem = ({ index, firstName }) => {

  return (
    <div key={index}>
      <Link to={`/${firstName}`}>
        <h2>{firstName}</h2>
      </Link>
    </div>
  )
}

export default StudentItem