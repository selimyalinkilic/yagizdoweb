import React from 'react';

import { Col, Card } from 'react-bootstrap';
import './Post.css';

const Post = ({posts}) => {
  return (
    posts.map(post => (
      <Col xs={12} lg={4} key={post.id}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={post.img} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              {post.text}
            </Card.Text>
            <a href={post.url} className="btn btn-primary" variant="primary" target="_blank" rel="noopener noreferrer">Devamı</a>
          </Card.Body>
        </Card>
      </Col>
    ))
  )
}

export default Post;