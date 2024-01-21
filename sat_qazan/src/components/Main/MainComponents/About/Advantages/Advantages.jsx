import React,{useEffect} from "react";
import Logo from "../Logo.png";
import { Carousel } from "antd";
import './Advantages.css'
import ScrollReveal from 'scrollreveal'
// CAROUSEL
const contentStyle = {
  margin: 0,
  color: "#fff",
  lineHeight: "30px",
  textAlign: "center",
  fontSize: "20px",
};
// CAROUSEL
function Advantages() {
  useEffect(() => {
    ScrollReveal().reveal('.from-far', {
      origin: 'bottom',
      distance: '50px', // Büyük negatif değer, öğelerin ekranın dışından kaymasını sağlar
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
    ScrollReveal().reveal('.fade-in', {
      opacity: 0,
      duration: 1200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
    ScrollReveal().reveal('.fade-inLogo', {
      opacity: 0,
      duration: 4000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
  }, []); // Komponent yüklendiğinde sadece bir kez çalışacak
  return (
    <section className="advantages fade-in">

      <div>
        <div className="title fade-inLogo">
          <img src={Logo} alt="" />
          <br />
          Bizim üstünlüklərimiz
        </div>
        <div className="info">
          <Carousel>
            <div>
              <h3 style={contentStyle}>
                <p>
                  Sərmayə qoymadan qazanc əldə edin:Sat Qazan öz
                  istifadəçilərinə pul qazanmaq üçün heç bir ilkin investisiya
                  qoymadan gəlir əldə etmək imkanı təqdim edir. Pulsuz başlayın,
                  məhsulları öz sosial media hesablarınızda paylaşın və
                  qazanmağa başlayın.
                </p>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                {" "}
                <p>
                  <b>Azad qrafik:</b> Sat Qazan istifadəçilərə öz sürətlərində
                  işləmək azadlığı verir. Öz məhsullarınızı paylaşın,
                  müştəriləri cəlb edin və gəlirinizi artırın. İşinizə tam
                  nəzarət edirsiniz, ona görə də öz tempinizdə və cədvəlinizdə
                  işləyə bilərsiniz.
                </p>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                {" "}
                <p>
                  <b>Müştəriləri tapın, indi qazanın:</b>Platforma öz
                  istifadəçilərinə tez və effektiv şəkildə pul qazanmaq imkanı
                  təqdim edir. Sat Qazan ilə öz müştəri bazanızı yaradın,
                  məhsullarınızı paylaşın və ani ödənişlərlə qazancınızı əldə
                  edin. İstifadəsi asan və praktiki prosesləri ilə gəlir əldə
                  etmək heç vaxt asan olmayıb.
                </p>{" "}
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
