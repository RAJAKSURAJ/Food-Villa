import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} className="mb-3 col-4">
          <Form.Label column md={2}>
            Email:
          </Form.Label>
          <Col md={9}>
            <Form.Control type="text" placeholder="Enter Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 col-4">
          <Form.Label column md={2}>
            Password:
          </Form.Label>
          <Col md={9}>
            <Form.Control type="password" placeholder="Enter Password" />
            <div className="mt-2">
              <Button type="submit">Submit</Button>
            </div>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;
