import React from 'react'
import  { useEffect,useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './Category.css'
import CategoryModal from './CategoryModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// OPEN/CLOSE MODAL

function Categorys() {
  useEffect(() => {
    // ScrollReveal kitabxanasi başlatın
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

// const [isCategoryModalOpen, setCategoryModalOpen] = useState(true);
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <CategoryModal handleClose={handleClose}/>
          </Modal.Body>
      </Modal>
 
      <section className='Info-SatQazan'>
        <h1>Başlayın</h1>
        <p >Qruplarımızda və ya səhifələrimizə daxil ol, paylaşılan elanları paylaşıb müştəri taparaq gəlir əldə et.
        </p>
        <b>Qeyd:SatQazan piramidinə qoşulmaq üçün Whatsapp qrupumuzda olmağınız şərtdir.</b>
      </section>
    <section className="Category">
    <div  className=" Category-container scroll-reveal">
<div className="Category-circle Category-circle-one"></div>
<div  onClick={handleShow} className="Category-info-container" >
<img src="" alt="" />
<h1>Whatsapp</h1>
 <br />
</div>
</div>
<div className=" Category-container scroll-reveal">
<div className="Category-circle Category-circle-one"></div>
<div className="Category-info-container">
<img src="" alt="" />
<h1>Instagram</h1>
 <br />
</div>
</div>
<div className=" Category-container scroll-reveal">
<div className="Category-circle Category-circle-one"></div>
<div className="Category-info-container">
<img src="" alt="" />
<h1>Tiktok</h1>
 <br />
</div>
</div>
    </section>
  </div>
  )
}

export default Categorys