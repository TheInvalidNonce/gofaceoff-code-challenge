import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import StudentList from './components/StudentList'
import StudentInfo from './components/StudentInfo'

class App extends Component {

  state = {
    "results": [
      {"firstName": "Sanket", "lastName":"Gadade","marks":{"english":70, "hindi":60,"mathematics":46}},
      {"firstName": "Shubham", "lastName":"Laad","marks":{"english":40, "hindi":55,"mathematics":46}},
      {"firstName": "Swapnil", "lastName":"Patil","marks":{"english":50, "hindi":60,"mathematics":77}},
      {"firstName": "Ankita", "lastName":"Pawar","marks":{"english":50, "hindi":55,"mathematics":46}},
      {"firstName": "Vijayraj", "lastName":"Nathe","marks":{"english":35, "hindi":45,"mathematics":11}}
    ]
  }

  render() {

    const { results } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Student List</h1>
        </header>
          <Switch>
            <Route exact path ='/'
              render={ () => (
                <StudentList
                  results={results}
                 />
              )}
            />
            <Route path='/:firstName'
                component={ routerProps => <StudentInfo 
                  {...routerProps} results={this.state.results} /> }
            />
                
          </Switch>
      </div>
    );
  }
}

export default App;
