import './App.css';
import Header from './components/Header';
import ImageForm from './components/ImageForm';
import Modal from "react-modal"
import { useState } from 'react';
import DisplayPage from './components/DisplayPage';
import Search from './components/Search';

Modal.setAppElement("#root");

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
      <Search />
      <Modal className="modal-field" isOpen= {openModal}>
      <ImageForm handleCloseModal = {handleCloseModal} />
      </Modal>   
      
      <DisplayPage />
    </div>
  );
}

export default App;
