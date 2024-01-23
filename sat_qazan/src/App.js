import './App.css';
import Navbar from './components/Navbar/navbar'
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import ModalForm from './components/Form/ModalForm'
import { useState } from 'react';
function App() {
const [ModalOpen, setModalOpen] = useState(false)
const FormShow=()=>setModalOpen(true)
const FormHide=()=>setModalOpen(false)
  return (
  <div>
    <Navbar/>
    <Main FormShow={FormShow}/>
   {ModalOpen? <ModalForm FormHide={FormHide}/>:''}
    <Footer FormShow={FormShow}/>
  </div>
  );
}

export default App;
