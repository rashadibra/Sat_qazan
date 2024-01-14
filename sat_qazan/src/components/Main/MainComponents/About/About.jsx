import React from "react";
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import {useFormik} from 'formik';
import "./About.css"
import Headerİmg2 from './BgcHeader2.jpg'
import Logo from './Logo.png'

const howItworks=` <div class="rulesTitle scroll-reveal">
<h1 >SatQazan piramidası</h1>
</div>
<div class="rulesInfo">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nesciunt blanditiis ipsam eos minima ullam nostrum unde pariatur, perspiciatis doloremque facere corporis natus velit nisi architecto obcaecati quisquam nobis aliquam inventore deleniti, quae culpa. Mollitia neque inventore iusto harum, voluptate eos at placeat, ducimus enim minima molestias sint dolores vel architecto laudantium quasi aperiam eveniet in earum commodi natus a ea! Natus, odio! Quia cum reprehenderit error natus pariatu
  r, dolorem explicabo vel? Quas sit 
  placeat, doloremque impedit, eveniet 
  ab illum totam repellat eligendi quis vol
  uptates pariatur? Minus nihil labore libero atque similique. Error voluptatibus ea iste. Provident sequi quidem necessitatibus.</p>
</div>`
const businessPrinciples=
`<div class="rulesTitle scroll-reveal">
<h1 >İş prinsipləri</h1>
</div>
<div class="rulesInfo">
<p>
1)Məhsulları izlə: Üzvünüz satış və qazanç proqramına qoşulub, təklif olunan məhsulları baxmağa və tanımağa başlayır.
<br />
2)Məhsul Şəkil və Xüsusiyyətlərinin Paylaşılması: Üzv, istədiyi məhsulun şəkil və xüsusiyyətlərini götürərək, öz sosial media hesabında paylaşmağa qərar verir. Bu, məhsulun tanıtımına yardım edir.
<br />
3)Yönləndirilmiş Alıcılar: siz, paylaşdığınız məhsulları ətrafınızda maraqlanan və məhsulu almağa qərar verən alıcıları tapmağa çalışırsız. Bu, sizin məhsulların satışından pul qazanmanıza imkan verir.
<br />
4)Alıcıları Bizə Yönləndirir: Üzv, potensial alıcıları bizim tərəfə yönləndirir. Bu, alıcıların məhsulu almağa qərar verməsi üçün bir kömək və təsiri təmin edir.
<br />
5)Məhsulu Təslim etmə və Ödəniş Almaq: Biz, üzvün təqdim etdiyi alıcıya məhsulu təqdim edirik və müqavilədə nəzərdə tutulan ödənişi qəbul edirik.
<br />
6)Anında Ödəniş: Üzvün əldə etdiyi qazancı mümkün olan ən qısa müddət ərzində ödəmək üçün tədbirlər görürük.
</p>
</div>`
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
  const [BtnActive, setBtnActive] = useState(true)

  const howItWorks=()=>{
    const RulesContainer =document.querySelector('.RulesContainer');
    RulesContainer.innerHTML=howItworks;
    setBtnActive(true)
  }
  const businessprinciples=()=>{
    const RulesContainer =document.querySelector('.RulesContainer');
    RulesContainer.innerHTML=businessPrinciples;
    setBtnActive(false)
  }
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
   <div>
    <section className="Header scroll-reveal">
      <img src={Headerİmg2} alt="" />
      <div>
        <b>Sosial Mediadan Qazan</b>
        <br />
        <b>Sat və Qazan ilə gəlir karvanı yolda!</b>
        <hr />
        <p>Onlayn iş dünyasına sürətli bir giriş etmək <br />
           istərdinizmi? Sat Qazan ilə öz sosial media <br />
           hesablarınızdan gəlir əldə edin. <span>WhatsApp</span>,<br />
            Instagram, TikTok... Hansını bəyənirsiniz?<br />
             İndi başlayın və qazanın!</p>
      </div>
    </section>
     <section className="container ">
      <div className="info-container">
        {/* <div className="circle circle-one"></div> */}
        <div className="form-container">
        <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="illustration"
          />
              <h1>SatQazan nədir </h1>
       <p>SatQazan, qeyri-adi alış-veriş təcrübəsi və heç bir maliyyə dəstəyi olmadan pul qazanmaq fürsəti təklif edən onlayn alış-satış platformasıdır. Saytımızda Linkləri yerləşdirilmiş sosial şəbəkələrimizə qoşulub məhsulları paylaşaraq, alıcı taparaq pul qazana bilərsiniz.</p>
         <br />
         <hr />
         
         <h1>Niyə SatQazan </h1>
         <p>-İstifadəsi asan:İstifadəçi dostu interfeysimizlə tez və sadəcə işə başlayın.</p>
         <p>-Kateqoriyaların geniş diapazonu: Elektronikadan tutmuş modaya qədər geniş çeşiddə məhsullarla müxtəlifliyi hiss edin.</p>
         <p>-Mənfəətli Paylaşımlar:Məhsullarımızı paylaşaraq və alıcılar taparaq pul qazanın.</p>
         <p>-İcma dəstəyi:WhatsApp qrupları ilə əlaqə saxlayın, təcrübələrinizi bölüşün və cəmiyyətə töhfə verin.</p>
         <span className="Diqqet"><p>SatQazan alış-veriş və sərfəli əlaqələrin görüşmə nöqtəsidir. Bu maraqlı səyahətə qoşulun, məhsulları paylaşın və qazanın!</p></span>
         
        </div>
        {/* <div className="circle circle-two"></div> */}
      </div>
    </section>
    <section className="advantages ">
      <div>
        <div className="title">
          <img src={Logo} alt="" />
          <br />
          Bizim üstünlüklərimiz</div>
        <div className="info">
         <p>1)<b>Sərmayə qoymadan qazanc əldə edin:</b>Sat Qazan öz istifadəçilərinə pul qazanmaq üçün heç bir ilkin investisiya qoymadan gəlir əldə etmək imkanı təqdim edir. Pulsuz başlayın, məhsulları öz sosial media hesablarınızda paylaşın və qazanmağa başlayın.</p>
         <p>2)<b>Azad qrafik:</b> Sat Qazan istifadəçilərə öz sürətlərində işləmək azadlığı verir. Öz məhsullarınızı paylaşın, müştəriləri cəlb edin və gəlirinizi artırın. İşinizə tam nəzarət edirsiniz, ona görə də öz tempinizdə və cədvəlinizdə işləyə bilərsiniz.</p>
         <p>3)<b>Müştəriləri tapın, indi qazanın:</b>Platforma öz istifadəçilərinə tez və effektiv şəkildə pul qazanmaq imkanı təqdim edir. Sat Qazan ilə öz müştəri bazanızı yaradın, məhsullarınızı paylaşın və ani ödənişlərlə qazancınızı əldə edin. İstifadəsi asan və praktiki prosesləri ilə gəlir əldə etmək heç vaxt asan olmayıb.</p>
        </div>
       
      </div>
    </section>
    <section className="rules ">
      <div className="rulesBtns">
        <button className={`RulesBtn1 ${BtnActive?'activeRulesBtn':''}`} onClick={()=>howItWorks()}>SatQazan Piramidası</button>
        <button className={`RulesBtn2 ${BtnActive?'':'activeRulesBtn'}`} onClick={()=>businessprinciples()}>İş prinsipləri</button>
      </div>
<div className="RulesContainer">
<div className="rulesTitle">
<h1 >SatQazan piramidası</h1>
</div>
<div className="rulesInfo">
<p>
<b>1)</b>Məhsulları izlə: Siz Qrup və səhifələrimzə qoşulub, təklif olunan məhsullara baxmağa və tanımağa başlayırsız.
<br />
<b>2)</b>Məhsul Şəkil və Xüsusiyyətlərinin Paylaşılması:İstədiyiniz məhsulun şəkil və xüsusiyyətlərini götürərək, öz sosial media hesabında paylaşırsız. Bu, məhsulun tanıtımına yardım edirsiz.
<br />
<b>3)</b>Yönləndirilmiş Alıcılar:Siz, paylaşdığınız məhsulları ətrafınızda maraqlanan və məhsulu almağa qərar verən alıcıları tapmağa çalışırsız. Bu, sizin məhsulların satışından pul qazanmanıza imkan verir.
<br />
<b>4)</b>Alıcıları Bizə Yönləndirir:Potensial alıcıları bizim tərəfə yönləndirsiz. Bu, alıcıların məhsulu almağa qərar verməsi üçün bir kömək və təsiri təmin edir.
<br />
<b>5)</b>Məhsulu Təslim etmə və Ödəniş Almaq: Biz, sizin təqdim etdiyiniz alıcıya məhsulu təqdim edirik və müqavilədə nəzərdə tutulan ödənişi qəbul edirik.
<br />
<b>6)</b>Anında Ödəniş: Sizin qazancınızı mümkün olan ən qısa müddət ərzində ödəmək üçün tədbirlər görürük.
</p>
</div>

</div>
    </section>
   </div>
  );
}

export default About;

     