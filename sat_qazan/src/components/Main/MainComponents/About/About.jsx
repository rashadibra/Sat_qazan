import React from "react";
import "./About.css";
import AboutHeader from "./AboutHeader/AboutHeader";
import SatQazan from "./SatQazan/SatQazan";
import Advantages from "./Advantages/Advantages";
import Rules from "./Rules/Rules";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { useFormik } from "formik";
import Modal from 'react-bootstrap/Modal';
import CategoryModal from './CategoryModal';


function About() {
 

  // FORMIK
  const { values, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      handleReset();
    },
  });

  useEffect(() => {
    // ScrollReveal kütüphanesini başlatın
    const elements = document.querySelectorAll(".scroll-reveal");

    ScrollReveal().reveal(elements, {
      duration: 800,
      easing: "ease-in-out",
      scale: 0.5,
      distance: "40px",
      origin: "bottom",
      reset: true,
      delay: 0,
    });
  }, []);
// FORM
  const [show, setShow] = useState(false);

const handleClose = () =>setShow(false);
const handleShow = () => setShow(true);
const ModalOpen = () => setShow(true);
  return (
    <div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CategoryModal handleClose={handleClose}/>
          </Modal.Body>
      </Modal>
      <AboutHeader />
      <SatQazan />
      <Advantages />
      <Rules />
    </div>
  );
}

export default About;
