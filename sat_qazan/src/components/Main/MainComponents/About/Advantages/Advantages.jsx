import React from "react";
import Logo from "../Logo.png";
import { Carousel } from "antd";
import './Advantages.css'

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
  return (
    <section className="advantages ">

      <div>
        <div className="title">
          <img src={Logo} alt="" />
          <br />
          Bizim üstünlüklərimiz
        </div>
        <div className="info">
          <Carousel>
            <div>
              <h3 style={contentStyle}>
                <p>
                  <b>Sərmayə qoymadan qazanc əldə edin:</b>Sat Qazan öz
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
