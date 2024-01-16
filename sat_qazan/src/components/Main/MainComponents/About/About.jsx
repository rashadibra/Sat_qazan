import React from "react";
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import {useFormik} from 'formik';
import "./About.css"
import Headerİmg2 from './BgcHeader2.jpg'
import Logo from './Logo.png'
import { Carousel } from 'antd';

// CAROUSEL
const contentStyle= {
  margin: 0,
  color: '#fff',
  lineHeight: '30px',
  textAlign: 'center',
  fontSize:'20px'
};
// CAROUSEL

const howItworks=`<div class="rulesTitle">
<h1 >SatQazan piramidası nədir?</h1>
</div>
<div class="rulesInfo">
<p style='text-align:center;font-size:25px'>
SatQazan piramidası: artan qazancın zirvəsinə qalxın!
</p>
  <p>SatQazan piramidası (qazanc piramidası) qeyri-adi bir anlayışdır! Satış sayınız artdıqca yeni fürsətlər,imkanlar ilə qarşılaşın.</p>
  <p>3 mərhələdən ibrətdir: </p>
  <p>
    1-ci mərhələ(Aşağı səviyyəli qazanc): məhsullarımızı paylaşaraq pul qazanın, ancaq bununla məhdudlaşmayın!dostlarınız və sosial şəbəkələrdəki izləyicilərinizlə qazanc əldə edin.
    <br />
    2-ci mərhələ(Orta səviyyəli mükafatlar): yalnız dairənizi genişləndirməyin, başqalarını SatQazan ailəsinə cəlb edin. Orta səviyyəli Qazanc və xüsusi mükafatlarla daha çox gəlir əldə edin.
<br />
3-cü mərhələ(Pik performans bonusları):SatQazan piramidasının zirvəsinə qalxdığınız zaman performans bonusları və xüsusi imtiyazlar sizi gözləyir. Hər səviyyədə yüksəldikcə qazancınız eksponent olaraq artacaq!
  </p>
  <hr />
  <p style='text-align:center'>Sizin hər satışınız hesablanır və müəyyən miqdarı keçdikdən sonra mərhələni keçməyiniz haqqında məlumatlandırılırsınız.Ətraflı <a href="">Whatsapp</a> qrupumuzda.</p>

  <b style='text-align:center'>Bu bənzərsiz piramidal quruluşla SatQazan, istifadəçilərinə geniş qazanc potensialı təqdim edərək adi gəlir modellərini üstələyir. SatQazan piramidası ilə başlayın, paylaşın, inkişaf edin və yüksək gəlirlərdən zövq alın!</b>
`
const businessPrinciples=
`<div class="rulesTitle scroll-reveal">
<h1 >İş prinsipləri</h1>
</div>
<div class="rulesInfo">
<p>
1)Məhsulları izlə: Üzvünüz satış və qazanc proqramına qoşulub, təklif olunan məhsulları baxmağa və tanımağa başlayır.
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
        <b>Sat və Qazan ilə <br /> gəlir karvanı yolda!</b>
        <br />
        <b style={{borderBottom:'1px solid white'}}>Məhsullarımızın 15%-i sizin olsun!</b>
        {/* <hr /> */}
        <p style={{paddingTop:'10px'}}>Onlayn iş dünyasına sürətli bir giriş etmək <br />
           istərdinizmi? Sat Qazan ilə öz sosial media <br />
           hesablarınızdan gəlir əldə edin. <span>WhatsApp</span>,<br />
            Instagram, TikTok... Hansını bəyənirsiniz?<br />
             İndi başlayın və qazanın!</p>
      </div>
    </section>
     <section className="SatQazan ">
      <div className="info-SatQazan">
        {/* <div className="circle circle-one"></div> */}
        <div className="form-SatQazan">
        <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="Containerillustration"
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
        <Carousel >
      <div>
        <h3 style={contentStyle}><p><b>Sərmayə qoymadan qazanc əldə edin:</b>Sat Qazan öz istifadəçilərinə pul qazanmaq üçün heç bir ilkin investisiya qoymadan gəlir əldə etmək imkanı təqdim edir. Pulsuz başlayın, məhsulları öz sosial media hesablarınızda paylaşın və qazanmağa başlayın.</p></h3>
      </div>
      <div>
        <h3 style={contentStyle}> <p><b>Azad qrafik:</b> Sat Qazan istifadəçilərə öz sürətlərində işləmək azadlığı verir. Öz məhsullarınızı paylaşın, müştəriləri cəlb edin və gəlirinizi artırın. İşinizə tam nəzarət edirsiniz, ona görə də öz tempinizdə və cədvəlinizdə işləyə bilərsiniz.</p></h3>
      </div>
      <div>
        <h3 style={contentStyle}>  <p><b>Müştəriləri tapın, indi qazanın:</b>Platforma öz istifadəçilərinə tez və effektiv şəkildə pul qazanmaq imkanı təqdim edir. Sat Qazan ilə öz müştəri bazanızı yaradın, məhsullarınızı paylaşın və ani ödənişlərlə qazancınızı əldə edin. İstifadəsi asan və praktiki prosesləri ilə gəlir əldə etmək heç vaxt asan olmayıb.</p> </h3>
      </div>
    </Carousel>
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
<h1 >SatQazan piramidası nədir?</h1>
</div>
<div className="rulesInfo">
<p style={{textAlign:'center',fontSize:'25px'}}>
SatQazan piramidası: artan qazancın zirvəsinə qalxın!
</p>
  <p>SatQazan piramidası (qazanc piramidası) qeyri-adi bir anlayışdır! Satış sayınız artdıqca yeni fürsətlər,imkanlar ilə qarşılaşım.</p>
  <p>3 mərhələdən ibrətdir: </p>
  <p>
    1-ci mərhələ(Aşağı səviyyəli qazanc): öz məhsullarınızı paylaşaraq pul qazanın, ancaq bununla məhdudlaşmayın! Həm də sizi izləyən dostlarınız və izləyicilərinizlə ortaq gəlirdən qazanc əldə edin.
    <br />
    2-ci mərhələ(Orta səviyyəli mükafatlar): yalnız dairənizi genişləndirməyin, başqalarını SatQazan ailəsinə cəlb edin. Orta səviyyəli Qazanc və xüsusi mükafatlarla daha çox gəlir əldə edin.
<br />
3-cü mərhələ(Pik performans bonusları):SatQazan piramidasının zirvəsinə qalxdığınız zaman performans bonusları və xüsusi imtiyazlar sizi gözləyir. Hər səviyyədə yüksəldikcə qazancınız eksponent olaraq artacaq!
  </p>
  <hr />
  <p style={{textAlign:'center'}}>Sizin hər satışınız hesablanır və müəyyən miqdarı keçdikdən sonra mərhələni keçməyiniz haqqında məlumatlandırılırsınız.Ətraflı <a href="">Whatsapp</a> qrupumuzda.</p>
  <b style={{textAlign:'center'}}>Bu bənzərsiz piramidal quruluşla SatQazan, istifadəçilərinə geniş qazanc potensialı təqdim edərək adi gəlir modellərini üstələyir. SatQazan piramidası ilə başlayın, paylaşın, inkişaf edin və yüksək gəlirlərdən zövq alın!</b>

</div>
</div>
    </section>
   </div>
  );
}

export default About;

     