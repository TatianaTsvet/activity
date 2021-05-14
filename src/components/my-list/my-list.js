import React, { Component } from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./my-list.scss";

export default class MyList extends Component {
  deleteItem = (key) => {
    this.props.deleteItem(key);
  };

  render() {
    const { activity } = this.props;

    const posts = activity.map((item) => {
      return (
        <>
          <ListGroup.Item
            key={item.key}
            className="flex justify-center mt-3 mb-3"
          >
            <Badge variant="success">{item.type}</Badge>
            <h5 className="success">{item.activity}</h5>
            <p className="success">{item.participants} participants</p>
            <Button
              variant="outline-success"
              size="md"
              onClick={() => this.deleteItem(item.key)}
            >
              Done
            </Button>
          </ListGroup.Item>
        </>
      );
    });
    return (
      <ListGroup>
        {activity.length === 0 ? (
          <>
            <ListGroup.Item
              key={activity.key}
              className="flex justify-center mt-3 error"
            >
              <p>You have nothing saved yet</p>
            </ListGroup.Item>
            <LinkContainer to="/activities">
              <Button variant="danger" className="mx-auto my-2">
                Go back to "Activities"!
              </Button>
            </LinkContainer>
          </>
        ) : (
          posts
        )}
      </ListGroup>
    );
  }
}
