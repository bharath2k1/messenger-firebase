import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState(["hi"]);
  const onButtonClick = (event) => {
    event.preventDefault();
    setmessages([...messages, input]);
    setinput("");
  };
  return (
    <div className="App">
      <h1>messenger clone</h1>
      <form>
        <TextField
          value={input}
          onChange={(event) => setinput(event.target.value)}
          id="standard-basic"
          label="Enter message"
        />

        <Button
          dissabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={onButtonClick}
        >
          ENTER
        </Button>
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
