import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../styles/navbar.css';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar-main">
                <div className="navbar-list">
                    <ul>
                        <li>
                            <Link to="/" className="nav-link">Grades</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Grade Log</Link>
                        </li>
                    </ul>
                </div>
                <section>
                    <div className="skewed"></div>
                </section>
            </nav>
        );
    }
}