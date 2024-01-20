import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
const PhoneRegex='/^(051|055|050|070|077|099|010)[0-9]{7}$/i'
function CategoryModal({handleClose}) {
    const {values,handleChange,handleReset,handleSubmit} = useFormik({
        initialValues: {
          name:'',
          surname:'',
          number: ''
        },
        validationSchema: Yup.object({
          name: Yup.string().required('Bu alan boş bırakılamaz'),
          surname: Yup.string().required('Bu alan boş bırakılamaz'),
          number: Yup.string().required('Bu alan boş bırakılamaz'),

          // diğer inputlar için gerekli validasyonlar
        }),
    onSubmit:values=>{
      console.log(values);
      handleReset()
    }
    })
  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="illustration"
          />
          <h1 className="opacity">Form</h1>
          <form onSubmit={handleSubmit}>
          <input 
          required="required"
          value={values.name}
          onChange={handleChange}
          type="text" 
          id='name'
          placeholder="Adınız"/>
            <input
            value={values.surname}
            onChange={handleChange}
          type="text"
          id='surname'
          placeholder="Soyadınız" />
          
            <input 
            value={values.number}
            onChange={handleChange}
            id='number'
          type="number" 
          placeholder="Nömrəniz" />
            <button 
            
            onClick={ handleClose}
            className="opacity">GÖNDƏR</button>
          </form>
          <div className="register-forget opacity">
          </div>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  )
}

export default CategoryModal