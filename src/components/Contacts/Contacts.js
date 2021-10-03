import { Container, Row } from "react-bootstrap";
import Contact from "../Contact/Contact";
import UserHook from "../hooks/UserHook";

const Contacts = () => {
  
  const [users] = UserHook();

  return (
    <Container className="mb-5 pb-5">
      
      <h1 className="text-center pb-4">Contact</h1>
      
      <Row className="g-4">
        {users.map((contact) => (
          <Contact key={contact.id} contact={contact}></Contact>
        ))}
      </Row>
    </Container>
  );
};

export default Contacts;
