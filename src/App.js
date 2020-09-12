import React, { useState, useEffect } from "react";
import { TextField, Button, IconButton } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([
    { username: "bunny", message: "hi" },
  ]);
  const [username, setusername] = useState("");

  const onButtonClick = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setmessages([...messages, { username: username, message: input }]);
    setinput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setusername(prompt("enter your name"));
  }, []);
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Messenger Clone</h1>
      <h2>Welcome {username}!</h2>
      <form className="app__form">
        <TextField
          value={input}
          onChange={(event) => setinput(event.target.value)}
          id="standard-basic"
          label="Enter message"
        />
        <IconButton disabled={!input} type="submit" onClick={onButtonClick}>
          <SendIcon />
        </IconButton>

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
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
