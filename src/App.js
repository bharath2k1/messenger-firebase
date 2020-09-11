import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([{ username: "bunny", text: "hi" }]);
  const [username, setusername] = useState("");

  const onButtonClick = (event) => {
    event.preventDefault();
    setmessages([...messages, { username: username, text: input }]);
    setinput("");
  };

  useEffect(() => {
    setusername(prompt("enter your name"));
  }, []);
  return (
    <div className="App">
      <h1>messenger clone</h1>
      <h2>hello {username}</h2>
      <form>
        <TextField
          value={input}
          onChange={(event) => setinput(event.target.value)}
          id="standard-basic"
          label="Enter message"
        />

        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={onButtonClick}
        >
          ENTER
        </Button>
      </form>
      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
