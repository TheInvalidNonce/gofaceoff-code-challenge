import React from 'react'
import StudentMarks from './StudentMarks'
import { Link } from 'react-router-dom';

const StudentInfo = props => {
	// debugger
		 return props.results.map( (marks, index) => {
			//  debugger
		 		return <div>
								<StudentMarks
									marks={marks.marks}
									key={index}
								/>
								<Link to='/'>
      						<div className='back'>
       						 <span>Back</span>
     					 		</div>
    						</Link>
							</div>
				})

		
	}




export default StudentInfo
