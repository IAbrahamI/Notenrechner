import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Grade = props =>(
    <tr>
        <td>{props.grade.username}</td>
        <td>{props.grade.subject}</td>
        <td>{props.grade.grade}</td>
        <td>
            <Link to={"/edit/"+props.grade._id}>edit</Link> | <button onClick={() =>{ props.deleteGrade(props.grade._id)}}>delete</button>
        </td>
    </tr>
)

export default class Gradelist extends Component{
    constructor(props) {
        super(props);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.state = {grades: []};
    }

    componentDidMount() {
        axios.get('https://localhost:5000/grades/')
            .then(response => {
                this.setState({grades: response.data})
            })
            .catch((err) =>{
                console.log(err);
            })
    }

    deleteGrade(id){
        axios.delete('http://localhost:5000/grades/'+id)
            .then(res => {console.log(res.data)});
        this.setState({
            grades: this.state.grades.filter(el => el.id !== id)
        })
    }
    gradeList(){
        return this.state.grades.map(currentgrade =>{
            return <Grade grade={currentgrade} deleteGrade={this.deleteGrade} key={currentgrade._id}/>;
        })
    }
    render() {
        return(
            <div>
                <h3>Logged Grades</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Subject</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gradeList()}
                    </tbody>
                </table>
            </div>
        )
    }
}