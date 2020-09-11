import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isuser = username === message.username;

  return (
    <div>
      <Card ref={ref} className={`message ${isuser && `message__user`}`}>
        <CardContent
          className={isuser ? "message__usercard" : "message__guestcard"}
        >
          <Typography color="white" variant="h5" component="h2">
            {message.username}:{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
