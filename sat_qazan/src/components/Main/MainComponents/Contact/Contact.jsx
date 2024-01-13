import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from 'scrollreveal';
import "./Contact.css"

const ContactForm = () => {
  // CLASSS
  class userMessage{
    constructor(Name,Email,Message){
      this.Name=Name;
      this.Email=Email;
      this.Message=Message
    }
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // E-posta doğrulama regex'i
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputValue) && inputValue !== '') {
      // Eğer geçerli bir e-posta değilse ve boş değilse, hata mesajı gösterilebilir.
      console.log("Geçerli bir e-posta adresi girin.");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Burada form verilerini kontrol etmek ve gerekirse hata mesajlarını göstermek
    // API'ye gönderme işlemleri de burada yapılabilir.
    const UserMessage=new userMessage(name,email,message)
console.log(UserMessage);
    //  formu sıfırlamaq
    setName('');
    setEmail('');
    setMessage('');
  };

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
    <section className="contact scroll-reveal">
      <div className="content">
        <h2>Bizimlə əlaqə</h2>
        <p>İrad, rəy və iş birliyi üçün bizə mesaj göndərin. 3 gün ərzində mesajınız dəyərləndiriləcək</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faPhone} style={{color:"white"}} /></div>
            <div className="text">
              <h3>Telefon</h3>
              <p>+(994)510-727-50-95</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faEnvelope} style={{color:"white"}}/></div>
            <div className="text">
              <h3>Email</h3>
              <p>İbrahimlirsad666@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>Mesaj göndərin</h2>
            <div className="inputBox">
              <input type="text" required="required" value={name} onChange={handleNameChange} />
              <span>Adınız</span>
            </div>
            <div className="inputBox">
              <input type="email" required="required" value={email} onChange={handleEmailChange} />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required" value={message} onChange={handleMessageChange}></textarea>
              <span>Mesaj yazın</span>
            </div>
            <div className="inputBox">
              <input className='inputBox_btn' type="submit" value="Göndər"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
