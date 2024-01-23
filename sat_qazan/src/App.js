import './App.css';
import Navbar from './components/Navbar/navbar'
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import ModalForm from './components/Form/ModalForm'
import { useState } from 'react';
function App() {
// const [Modalİ, setModalİ] = useState(false)
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow=()=>{
// return true
// }
  return (
  <div>
    <Navbar/>
    <Main />
    {/* <ModalForm/> */}
    <Footer />
  </div>
  );
}

export default App;
