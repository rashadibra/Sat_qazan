import React from 'react';
import "./footer.css"
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>

      <footer className="footer">
 
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><Link to='/' className="menu__link" href="#">Əsas səhifə</Link></li>
          <li className="menu__item"><Link to='Categorys' className="menu__link" href="#">Bizə qoşul</Link></li>
          <li className="menu__item"><Link to='Contact' className="menu__link" href="#">Bizimlə əlaqə</Link></li>
        </ul>
        <p>&copy;2024 Bütün hüquqlar qorunur.</p>
        <a href="https://www.freepik.com/free-photo/3d-render-handshake-icon-isolated-business-concept_33062169.htm#query=3d%20money%20agreement&position=5&from_view=search&track=ais&uuid=ef70fe84-3529-4bbb-b75f-912b39835b3c">Image by upklyak</a> on Freepik
      </footer>
    </div>
  );
}

export default Footer;
