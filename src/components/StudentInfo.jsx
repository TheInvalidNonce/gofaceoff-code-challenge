import React from 'react'
import StudentMarks from './StudentMarks'
import { Link } from 'react-router-dom';

const StudentInfo = props => {
	const user = props.results.find(user => 
		user.firstName === props.match.params.firstName)
		 		return (
					<div>
						<h1>{user.firstName}'s Results</h1>
						<StudentMarks marks={user.marks} />
						<Link to='/'>
      				<div className='back'>
       					<span>Back</span>
     					</div>
    				</Link>
					</div>
				)

		
	}




export default StudentInfo
