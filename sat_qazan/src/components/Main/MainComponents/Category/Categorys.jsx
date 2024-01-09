import React from 'react'
import {useState} from 'react'
import  { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Category.css'

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

  return (
    <div>
      <section className='Info-SatQazan'>
        <h1>Necə işləyir</h1>
        <p>Qruplarımızda və ya səhifələrimizdə paylaşılan elanları paylaşıb müştəri taparaq gəlir əldə edin.
        </p>
      </section>
    <section className="Category">
    <div className=" Category-container scroll-reveal">
<div className="Category-circle Category-circle-one"></div>
<div className="Category-info-container">
<img src="" alt="" />
<h1>Aksesuarlar</h1>
 <br />
</div>
</div>
<div className=" Category-container scroll-reveal">
<div className="Category-circle Category-circle-one"></div>
<div className="Category-info-container">
<img src="" alt="" />
<h1>Bijuteriyalar</h1>
 <br />
</div>
</div>
<div className=" Category-container scroll-reveal">
<div className="Category-circle Category-circle-one"></div>
<div className="Category-info-container">
<img src="" alt="" />
<h1>Geyimlər</h1>
 <br />
</div>
</div>
    </section>
  </div>
  )
}

export default Categorys