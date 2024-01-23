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
              Heç bir sərmayə sərf etmədən  şəxsi onlayn  biznesinizi qurmaq imkanı yaradırıq. <br />
                 Satdığınız məhsulu istənilən ünvana çatdırırıq.
                </p>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                {" "}
                <p>
                  Sizin sata biləcəyiniz və təklif etdiyiniz məhsulları təqdim edirik. <br />
               Müştərilərinizə endirimli kampaniyalar və sərfəli təkliflər etməyinizə zəmin yaradırıq.
                </p>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                {" "}
                <p>
                Hər ay sonu fəal üzvlərimizə supriz hədiyyələr və pul mükafatları təqdim edirik. <br />
                Sizin üçün günün 16 saatı operativ xidmət göstəririk.

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
