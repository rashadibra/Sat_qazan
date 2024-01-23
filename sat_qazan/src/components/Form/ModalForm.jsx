import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Modal, Button } from "react-bootstrap";

const regexNumber = /^(0?)(51|50|55|70|77)\d{7}$/;
function ModalForm() {
  const { values, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues: {
      Name: "",
      Surname: "",
      Number: "",
      Age: "",
    },
    onSubmit: (values) => {
      console.log(values);
      handleReset();
    },
  });

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Haqqınızda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Ad</Form.Label>
              <Form.Control
                required="required"
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
                required="required"
                type="text"
                placeholder="Soyadınız"
                name="Surname"
                value={values.Surname}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Label>Əlaqə nömrəniz</Form.Label>
              <Form.Control
                required="required"
                type="text"
                placeholder="Əlaqə nömrəniz"
                name="Number"
                value={values.Number}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Yaş</Form.Label>
              <Form.Control
                required="required"
                type="number"
                placeholder="Yaşınız"
                name="Age"
                value={values.Age}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              className="mt-3"
              variant="primary"
              type="submit"
              onClick={(e) => {
             e.preventDefault()
                if (
                  values.Name === "" ||
                  values.Surname === "" ||
                  values.Number === "" ||
                  values.Age === ""
                ) {
                  alert("Boş xanaları doldurun");
                  return false;
                }else if(!regexNumber.test(values.Number)){
                  alert("Nömrəni düzgün yazın!")
                }else if(parseInt(values.Age)<18){
                  alert("Minimum 18 yaş")
                }
                else {
                  handleClose();
                  handleSubmit();
                  window.location.href = "https://chat.whatsapp.com/IVYfcE8cGQq9A18dyWfXOX";
                }
              }}
            >
              Gönder
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalForm;
