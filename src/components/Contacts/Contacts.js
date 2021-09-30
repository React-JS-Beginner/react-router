import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "../Contact/Contact";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <Container className="mb-5 pb-5">
      <h1 className="text-center pb-4">Contact</h1>
      <Row className="g-4">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact}></Contact>
        ))}
      </Row>
    </Container>
  );
};

export default Contacts;
