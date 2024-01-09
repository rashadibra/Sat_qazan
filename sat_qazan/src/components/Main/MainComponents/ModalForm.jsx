import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Modal, Button } from 'react-bootstrap';
function ModalForm() {
  const { values, handleChange, handleReset,handleSubmit } = useFormik({
    initialValues: {
      Name: "",
      Surname: "",
      Email: "",
      Age: "",
    },
    onSubmit: (values) => {
      console.log(values);
      handleReset();
      
    },
  });

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

 
  return (
    <div>
     <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Haqqınızda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>Ad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Adınız"
          name="Name"
          value={values.Name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Soyad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Soyadınız"
          name="Surname"
          value={values.Surname}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>E-posta</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email adresiniz"
          name="Email"
          value={values.Email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formAge">
        <Form.Label>Yaş</Form.Label>
        <Form.Control
          type="number"
          placeholder="Yaşınız"
          name="Age"
          value={values.Age}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit"
      onClick={()=>{handleClose()
      handleSubmit()
      }}
      >
        Gönder
      </Button>
    </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default ModalForm;
