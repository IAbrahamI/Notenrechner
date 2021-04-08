import React, {Component} from "react";
import axios from 'axios';
export default class Creategrade extends Component{
    constructor(props) {
        super(props);
        this.userInput = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeGrade = this.onChangeGrade.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            subject: '',
            grade: 0,
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users')
            .then(res =>{
                if(res.data.length>0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    });
                }
            })

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }

    onChangeGrade(e) {
        this.setState({
            grade: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.userInput.current.focus();
        const grade = {
            username: this.state.username,
            subject: this.state.subject,
            grade: this.state.grade
        }
        console.log(grade);
        axios.post('http://localhost:5000/grades/add', grade)
            .then(res => console.log(res.data));
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Grade Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select ref={this.userInput} required className="form-control" value={this.state.username}
                                onChange={this.onChangeUsername}>{
                            this.state.users.map(function (user) {
                                return <option key={user} value={user}>{user}</option>;
                            })
                        }</select>
                    </div>
                    <div className="form-group">
                        <label>Subject:</label>
                        <input type="text" required className="form-control" value={this.state.subject} onChange={this.onChangeSubject}/>
                    </div>
                    <div className="form-group">
                        <label>Grade:</label>
                        <input type="number" required className="form-control" value={this.state.grade} onChange={this.onChangeGrade}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Grade Log" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}