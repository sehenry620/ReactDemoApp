import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      submitted: false,
      data: {},
      score: 0,
      formData: {
        answer: ""
      }
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  };

  handleChange = event => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  
  //display the results on the screen
  render() {
    if (this.state.data.category) {
      return (
        <div>
          Score: {this.state.score}
          <br />
          Question: {this.state.data.question}
          <br />
          Category: {JSON.stringify(this.state.data.category.title)}
          <br />
          Point Value: {this.state.data.value}
          <br />
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Answer:</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="answer"
                value={this.state.formData.answer}
              />
            </div>
            <button>Submit Form</button>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default Jeopardy;
