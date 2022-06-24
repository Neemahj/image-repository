import './App.css';
import Header from './components/Header';
import ImageForm from './components/ImageForm';
import Modal from "react-modal"
import { useState } from 'react';
import DisplayPage from './components/DisplayPage';

function App() {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <div className="App">
      <Header  handleOpenModal = { handleOpenModal }/>
      <Modal isOpen= {openModal}>
      <ImageForm handleCloseModal = {handleCloseModal} />
      </Modal>   

      <DisplayPage />
    </div>
  );
}

export default App;
