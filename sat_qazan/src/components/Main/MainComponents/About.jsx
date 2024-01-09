import React from "react";
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import {Link} from 'react-router-dom'
import {useFormik} from 'formik';



const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460"
  },
  {
    background: "#461220",
    color: "#FFFFFF",
    primaryColor: "#E94560"
  },
  {
    background: "#192A51",
    color: "#FFFFFF",
    primaryColor: "#967AA1"
  },
  {
    background: "#F7B267",
    color: "#000000",
    primaryColor: "#F4845F"
  },
  {
    background: "#F25F5C",
    color: "#000000",
    primaryColor: "#642B36"
  },
  {
    background: "#231F20",
    color: "#FFF",
    primaryColor: "#BB4430"
  }
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
};

const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
    const div = document.createElement("div");
    div.className = "theme-btn";
    div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
    btnContainer.appendChild(div);
    div.addEventListener("click", () => setTheme(theme));
  });
};



function About() {
  // FORMIK
  const {values,handleChange,handleReset,handleSubmit} = useFormik({
    initialValues: {
      name:'',
      email: '',
      password:''
    },
  onSubmit:values=>{
  console.log(values);
  handleReset()
  }
  })
    
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
  return (
    <section className="container scroll-reveal">
      <div className="info-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
        <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="illustration"
          />
              <h1>Sat qazan nədir </h1>
       <p>Sat Qazan, qeyri-adi alış-veriş təcrübəsi və sərfəli əlaqələr qurmaq fürsəti təklif edən onlayn marketinq platformasıdır. Saytımızda müxtəlif kateqoriyalar üzrə
         məhsulları paylaşaraq, alıcı taparaq pul qazana bilərsiniz.</p>
         <br />
         <hr style={{color:'white'}}/>
         
         <h1>Niyə Sat qazan </h1>
         <p>-İstifadəsi asan:İstifadəçi dostu interfeysimizlə tez və sadəcə işə başlayın.</p>
         <p>-Kateqoriyaların geniş diapazonu: Elektronikadan tutmuş modaya qədər geniş çeşiddə məhsullarla müxtəlifliyi hiss edin.</p>
         <p>-Mənfəətli Linklər:Məhsullarınızı paylaşaraq və alıcılar taparaq pul qazanın.</p>
         <p>-İcma dəstəyi:WhatsApp qrupları ilə əlaqə saxlayın, təcrübələrinizi bölüşün və cəmiyyətə töhfə verin.</p>
         <span className="Diqqet"><p>Sat Qazan alış-veriş və sərfəli əlaqələrin görüşmə nöqtəsidir. Bu maraqlı səyahətə qoşulun, məhsulları paylaşın və qazanın!</p></span>
         
        </div>
        <div className="circle circle-two"></div>
      </div>
    </section>
  );
}

export default About;

     