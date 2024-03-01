import "./App.css";

import { useState } from "react";

import {
  Button,
  FormGroup,
  Collapse,
  CardBody,
  Card,
  Label,
  Input,
  FormFeedback,
  FormText,
  UncontrolledPopover,
  PopoverBody,
  Spinner,
  PopoverHeader,
  Form,
  Fade,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Toast,
  ToastHeader,
  ToastBody,
  UncontrolledAlert,
} from "reactstrap";

const MyCustomButton = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>{props.children}</button>
  );
};

function App() {
  const [isValid, setIsValid] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const toggleCollapse = () => setShowCollapse((prev) => !prev);
  const toggleToast = () => setShowToast((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);
  
  return (
    <>
      <h1>ReactStrap</h1>

      <MyCustomButton color="red">Click Me!</MyCustomButton>

      <Button color="primary" size="sm">
        Click Me!
      </Button>
      <Button color="success" outline={true}>
        Click Me!
      </Button>
      <Button size="lg">Click Me!</Button>

      <Form className="form-col" onSubmit={(e) => e.preventDefault()}>
        <h2>Inputs</h2>
        <FormGroup floating>
          <Input
            required
            valid={isValid}
            invalid={!isValid}
            onKeyUp={(e) => {
              setIsValid(e.target.validity.valid);
            }}
            name="email"
            type="email"
            placeholder="email"
            minLength={8}
            id="example1"
          />
          <Label htmlFor="example1"></Label>
          <FormFeedback tooltip valid>
            Will Show if input is valid
          </FormFeedback>
          <FormText>Example help text, that remains unchanged</FormText>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </Form>
      <FormGroup>
        <Label htmlFor="exampleDate">Date</Label>
        <Input id="exampleDate" name="date" type="date" />
      </FormGroup>

      <Button onClick={toggleCollapse}>Toggle Collapse</Button>

      <Collapse isOpen={showCollapse}>
        <Card>
          <CardBody>Yay it is a card</CardBody>
        </Card>
      </Collapse>

      <Button type="button" id="UncontrolledPopover">
        Launch Popover
      </Button>

      <UncontrolledPopover
        placement="top"
        target="UncontrolledPopover"
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>I will display a message window!</PopoverBody>
      </UncontrolledPopover>

      <Button onClick={() => {}}>Show/Hide  Toast</Button>
      <Fade timeout={500} in={showToast}>
        <Toast isOpen={showToast}>
          <ToastHeader icon="primary" toggle={toggleToast}>New Message</ToastHeader>
          <ToastBody>Error Signing Up</ToastBody>
        </Toast>
      </Fade>

      <UncontrolledAlert color="info">
        I am an alert and I can be dismissed
      </UncontrolledAlert>

      <Spinner className="m-5" color="primary"></Spinner>
<div>
      <Button outline={true} color="info" onClick={toggleModal}>Toggle Modal</Button>
      <Modal centered={true} isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
        <ModalBody>Enter user info</ModalBody>
        <ModalFooter>
          <Button>Do Something</Button>
          <Button color="danger" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
</div>
    </>
  );
}

export default App;
