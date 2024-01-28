import React, { useState,useEffect } from 'react'
import './SatQazan.css'
import ScrollReveal from 'scrollreveal'
function SatQazan() {
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
  return (
    <section className="SatQazan ">
      <div className="Statics from-top">
      
        <div className='SecondStatics'>
          <h3>50+ fəal üzv</h3>
        </div>
        <div className='thirdStatics'>
          <h3>200+ satış</h3>
        </div>
      </div>
      <div className="info-SatQazan">
        <div className="form-SatQazan">
              <h1 className='slide-from-left' style={{textAlign:'center',margin:'30px 0'}}>SatQazan nədir <br />
              <div className='TitleLine' style={{margin:'10px auto'}}>
              </div>
               </h1 >
       <p className='slide-from-right' style={{textAlign:'center',margin:'30px 0'}}>SatQazan heç bir maliyyə dəstəyi olmadan biznes yaratmaq fürsəti təklif edən onlayn satış platformasıdır. Saytımızda linkləri yerləşdirilmiş sosial şəbəkələrimizə qoşulun və məhsulları paylaşaraq, alıcı taparaq pul qazaın.</p>
         <br />
         <hr />
         <h1 className='from-top' style={{textAlign:'center',margin:'30px 0'}}>Niyə SatQazan <br /><div className='TitleLine' style={{margin:'10px auto'}}>
              </div> </h1>
         <p className='slide-from-left' style={{textAlign:'center',margin:'30px 0'}}>Mənfəətli Paylaşımlar:Məhsulları paylaşaraq və alıcılar taparaq pul qazanın.</p>
         <p className='slide-from-right' style={{textAlign:'center',margin:'30px 0'}}>İstifadəsi asan:İstifadəçi dostu interfeysimizlə tez işə başlayın.  </p>
         <p className='slide-from-right' style={{textAlign:'center',margin:'30px 0'}}>Kateqoriyaların geniş diapazonu: Elektronikadan tutmuş modaya qədər geniş çeşiddə məhsullarla müxtəlifliyi hiss edin.</p>
         <span className="Diqqet slide-from-left"><p style={{textAlign:'center',margin:'30px 0'}}>SatQazan alış-veriş və sərfəli əlaqələrin görüşmə nöqtəsidir. Bu maraqlı səyahətə qoşulun, məhsulları paylaşın və qazanın!</p></span>
         
        </div>
      </div>
    </section>
  )
}

export default SatQazan