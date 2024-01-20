import React from 'react'
import Headerİmg2 from '../BgcHeader2.jpg'
import './AboutHeader.css'
function AboutHeader() {
  return (
    <section className="Header">
    <img src={Headerİmg2} alt="" />
    <div>
      <b>SatQazan ilə <br /> gəlir karvanı yolda!</b>
      <br />
      <b style={{borderBottom:'1px solid white'}}>Məhsullarımızın dəyərinin <br /> 15%-i sizin olsun!</b>
      {/* <hr /> */}
      <p style={{paddingTop:'10px'}}>Onlayn iş dünyasına sürətli bir giriş etmək <br />
         istərdinizmi? Sat Qazan ilə öz sosial media <br />
         hesablarınızdan gəlir əldə edin. <span>WhatsApp</span>,<br />
          Instagram, TikTok...<br />
           İndi başlayın və qazanın!</p>
    </div>
  </section>
  )
}

export default AboutHeader