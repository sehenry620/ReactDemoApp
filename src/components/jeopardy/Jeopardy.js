import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import JeopDisplay from "../jeopDisplay/JeopDisplay";

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
      console.log(this.state.data.answer);
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.formData.answer === this.state.data.answer) {
      // console.log("hi")
      let score = this.state.score;
      score = this.state.data.value + score;
      this.setState({ score });
    } else {
      let score = this.state.score;
      score = score - this.state.data.value;
      this.setState({ score });
      console.log("wrong answer :(");
    }
    this.setState({
      submitted: true
    });
    this.getNewQuestion();
    this.state.formData.answer = "";
  };

  handleChange = event => {
    let formData = this.state.formData;
    // console.log(formData);
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen

  // MEDIUM MODE 
  
  render() {
    if (this.state.data.category) {
      return( 
      <JeopDisplay
        score={this.state.score}
        question={this.state.data.question}
        category={JSON.stringify(this.state.data.category.title)}
        pointValue={this.state.data.value}
        actualAnswer={this.state.data.answer}
        inputAnswer={this.state.formData.answer}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        

      />
      )
      // EASY MODE

      // return (
      //   <div>
      //     Score: {this.state.score}
      //     <br />
      //     Question: {this.state.data.question}
      //     <br />
      //     Category: {JSON.stringify(this.state.data.category.title)}
      //     <br />
      //     Point Value: {this.state.data.value}
      //     <br />
      //     <form onSubmit={this.handleSubmit}>
      //       <div>
      //         <label>Answer:</label>
      //         <input
      //           onChange={this.handleChange}
      //           type="text"
      //           name="answer"
      //           value={this.state.formData.answer}
      //         />
      //       </div>
      //       <button>Submit Form</button>
      //     </form>
      //   </div>
      // );
    } else {
      return <div></div>;
    }
  }
}
export default Jeopardy;
