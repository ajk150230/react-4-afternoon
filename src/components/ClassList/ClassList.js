import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    axios.get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(result => {
        this.setState({
          students: result.data,
        });
      });
  }

  render() {
    const map = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h1 key={i}>
          {student.first_name} {student.last_name}
        </h1>
      </Link>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {map}
      </div>
    );
  }
}
