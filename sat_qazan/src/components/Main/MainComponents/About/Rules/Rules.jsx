import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Rules.css'
import ScrollReveal from 'scrollreveal'
const howItworks = `<div class="rulesTitle">
<h1 >SatQazan piramidası nədir?</h1>
<div class='TitleLine' style="margin:10px auto">
</div>
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
`;
const businessPrinciples = `<div class="rulesTitle scroll-reveal">
<h1 >İş prinsipləri</h1>
<div class='TitleLine' style="margin:10px auto">
</div>
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
</div>`;


function Rules() {
  // SCROLLREVEAL
  useEffect(() => {
    ScrollReveal().reveal('.from-far', {
      origin: 'bottom',
      distance: '50px', // Büyük negatif değer, öğelerin ekranın dışından kaymasını sağlar
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
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

    ScrollReveal().reveal('.slide-from-left', {
      distance: '30px', // Kayma mesafesi
      origin: 'left', // Soldan gelme
      duration: 800, // Animasyon süresi
      easing: 'ease-in-out', // Animasyon eğrisi
    });

    ScrollReveal().reveal('.slide-from-right', {
      distance: '30px', // Kayma mesafesi
      origin: 'right', // Sağdan gelme
      duration: 800, // Animasyon süresi
      easing: 'ease-in-out', // Animasyon eğrisi
    });
  }, []); // Komponent yüklendiğinde sadece bir kez çalışacak
  // SCROLREVEAL
    const [BtnActive, setBtnActive] = useState(true);

    const howItWorks = () => {
      const RulesContainer = document.querySelector(".RulesContainer");
      RulesContainer.innerHTML = howItworks;
      setBtnActive(true);
    };
    const businessprinciples = () => {
      const RulesContainer = document.querySelector(".RulesContainer");
      RulesContainer.innerHTML = businessPrinciples;
      setBtnActive(false);
    };
  return (
    <section className="rules ">
    <div className="rulesBtns">
      <button
        className={`RulesBtn1 slide-from-left ${BtnActive ? "activeRulesBtn" : ""}`}
        onClick={() => howItWorks()}
      >
        SatQazan Piramidası
      </button>
      <button
        className={`RulesBtn2 slide-from-right ${BtnActive ? "" : "activeRulesBtn"}`}
        onClick={() => businessprinciples()}
      >
        İş prinsipləri
      </button>
    </div>
    <div className="RulesContainer from-bottom">
      <div className="rulesTitle">
        <h1>SatQazan piramidası nədir?</h1>
        <div className='TitleLine' style={{margin:'10px auto'}}>
              </div>
      </div>
      <div className="rulesInfo ">
        <p style={{ textAlign: "center", fontSize: "25px" }}>
          SatQazan piramidası: artan qazancın zirvəsinə qalxın!
        </p>
        <p>
          SatQazan piramidası (qazanc piramidası) qeyri-adi bir anlayışdır!
          Satış sayınız artdıqca yeni fürsətlər,imkanlar ilə qarşılaşım.
        </p>
        <p>3 mərhələdən ibrətdir: </p>
        <p> 

          <br />
         
            3-cü mərhələ(Aşağı səviyyəli qazanc): öz məhsullarınızı paylaşaraq
          pul qazanın, ancaq bununla məhdudlaşmayın! Həm də sizi izləyən
          dostlarınız və izləyicilərinizlə ortaq gəlirdən qazanc əldə edin.
         
          <br />
         2-ci mərhələ(Orta səviyyəli mükafatlar): yalnız dairənizi
          genişləndirməyin, başqalarını SatQazan ailəsinə cəlb edin. Orta
          səviyyəli Qazanc və xüsusi mükafatlarla daha çox gəlir əldə edin.
         
          <br />
         
            1-ci mərhələ(Pik performans bonusları):SatQazan piramidasının
          zirvəsinə qalxdığınız zaman performans bonusları və xüsusi
          imtiyazlar sizi gözləyir. Hər səviyyədə yüksəldikcə qazancınız
          eksponent olaraq artacaq!
          <br />
         <b>
Qeyd:SatQazan piramidinə qoşulmaq üçün Whatsapp qrupumuzda olmağınız şərtdir.</b>
        </p>
        <hr />
        <p style={{ textAlign: "center" }}>
          Sizin hər satışınız hesablanır və müəyyən miqdarı keçdikdən sonra
          mərhələni keçməyiniz haqqında məlumatlandırılırsınız.Ətraflı{" "}
          <a href="https://chat.whatsapp.com/IVYfcE8cGQq9A18dyWfXOX">Whatsapp</a> qrupumuzda.
        </p>
        <b style={{ textAlign: "center" }}>
          Bu bənzərsiz piramidal quruluşla SatQazan, istifadəçilərinə geniş
          qazanc potensialı təqdim edərək adi gəlir modellərini üstələyir.
          SatQazan piramidası ilə başlayın, paylaşın, inkişaf edin və yüksək
          gəlirlərdən zövq alın!
        </b>
      </div>
    </div>
  </section>
  )
}

export default Rules