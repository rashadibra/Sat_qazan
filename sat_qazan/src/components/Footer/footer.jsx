import React,{useEffect} from 'react';
import ScrollReveal from 'scrollreveal'
import "./footer.css"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faWhatsapp,faFacebook,faTiktok } from '@fortawesome/free-brands-svg-icons'; // İnstagram simgesini buradan içe aktarın

function Footer({handleShow}) {
  useEffect(() => {
    // ScrollReveal başlatma
    ScrollReveal().reveal('.from-bottom', {
      origin: 'bottom', // Alt
      distance: '20px', // Mesafe
      duration: 800, // Süre
      delay: 200, // Gecikme
      easing: 'cubic-bezier(0.5, 0, 0, 1)', // Animasyon eğrisi
    });

    ScrollReveal().reveal('.from-top', {
      origin: 'top', // Üst
      distance: '20px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
  }, []); // Komponent yüklendiğinde sadece bir kez çalışacak

  return (
 
    <footer>
    <ul class="icons from-top">
        <li onClick={()=>handleShow()} ><a><FontAwesomeIcon icon={faWhatsapp} /></a></li>
        <li><a href="https://www.instagram.com/satqazan.az?igsh=MW5ieHhuZWhmbmRrbA=="><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=61555768259797&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></li>
    </ul>
    <ul class="menu">
            <li><Link to='/'>Ana səhifə</Link></li>
            <li><Link to='Contact'>Bizimlə əlaqə</Link></li>
    </ul>
        <div class="footer-copyright">
            <p>&copy; 2024 Bütün hüquqlar qorunur.</p>
        </div>
</footer>
  );
}

export default Footer;
