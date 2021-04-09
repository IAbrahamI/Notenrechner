import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import GradeList from "./components/gradelist.component";
import EditGrade from "./components/editgrade.component";
import CreateGrade from "./components/creategrade.component";
import CreateUser from "./components/createuser.component";

function App() {
  return (
      <Router>
          <Navbar/>
          <br/>
          <Route path="/" exact component={GradeList}/>
          <Route path="/edit/:id" component={EditGrade}/>
          <Route path="/create" component={CreateGrade}/>
          <Route path="/user" component={CreateUser}/>
      </Router>
  );
}

export default App;
