import React, { Component } from "react";
import "./SMS.css";
import 'whatwg-fetch'

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      number: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var vm = this;
    event.preventDefault();
    fetch('/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({ "text": vm.state.text, "number": vm.state.number })
    })
      .then(res =>
        this.setState({
          text: "",
          number: "",
        })
      )
      .catch(err => console.log(err));
    alert("Message Sent");
  };

  render() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          rows="5"
          name="text"
          type="text"
          placeholder="Text Message"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input
          className="form-control"
          rows="1"
          name="number"
          type="text"
          placeholder="Phone Number"
          value={this.state.number}
          onChange={this.handleChange}

        />
        <button type="submit" value="Submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}> Send Text </button>
        <button type="submit" value="Submit" className="btn btn-danger btn-block" onClick={this.handleSubmit}> Pay Here </button>
      </div>


    );
  }
}




export default TextArea;
