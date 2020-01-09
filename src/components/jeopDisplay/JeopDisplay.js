import React from "react";
import Jeopardy from "../jeopardy/Jeopardy";

function JeopDisplay(props) {
  return (
    <div>
      Score: {props.score}
      <br />
      Question: {props.question}
      <br />
      Category: {JSON.stringify(props.category)}
      <br />
      Point Value: {props.pointValue}
      <br />
  
      <form onSubmit={props.handleSubmit}>
        <div>
      
          <label>Answer:</label>
          <input
            onChange={props.handleChange}
            type="text"
            name="answer"
            value={props.inputAnswer}
          />

        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default JeopDisplay;
