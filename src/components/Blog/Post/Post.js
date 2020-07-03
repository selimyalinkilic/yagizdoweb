import React from 'react';

import PropTypes from 'prop-types';

import { Col, Card } from 'react-bootstrap';
import './Post.css';

const Post = (props) => {
  return (
    <Col xs={12} lg={4}>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <a href={props.url} className="btn btn-primary" variant="primary" target="_blank" rel="noopener noreferrer">Devamı</a>
        </Card.Body>
      </Card>
    </Col>
  )
}

Post.propTypes = {
  img : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired
}

export default Post;