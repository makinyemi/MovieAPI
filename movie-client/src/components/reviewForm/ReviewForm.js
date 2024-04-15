import { Form, Button } from "react-bootstrap";

export default function ReviewForm({
  handleSubmit,
  reviewText,
  labelText,
  defaultValue,
}) {
  console.log(reviewText);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={reviewText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        ></Form.Control>
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
