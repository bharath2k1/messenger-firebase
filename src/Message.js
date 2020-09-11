import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

function Message({ username, message }) {
  const isuser = username === message.username;

  return (
    <div>
      <Card className={`message ${isuser && `message__user`}`}>
        <CardContent
          className={isuser ? "message__usercard" : "message__guestcard"}
        >
          <Typography color="white" variant="h5" component="h2">
            {message.username}:{message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
