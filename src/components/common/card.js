import React from "react";
import { Card } from "react-bootstrap";

function CommonCard(props) {
  return (
    <>
      <Card className={props.className}>
        {props.cardType == "content" ? (
          <div className="content">
            <img src={props.image} /> 
            <p className="head">{props.header}</p>
            <p>{props.description}</p>
            <p>{props.extra}</p>
          </div>
        ) : (
          "Hello"
        )}
      </Card>
    </>
  );
}

export default CommonCard;
