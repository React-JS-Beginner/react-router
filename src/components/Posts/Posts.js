import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container className="mb-5 pb-5">
      <h1 className="text-center pb-4">Posts</h1>
      <Row className="g-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
