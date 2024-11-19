import './App.css';
import React, {useState} from 'react';
import Modal from './Modal';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
 
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  return (
<div className='App'> 
        {isModalOpen && (
<Modal isOpen={isModalOpen}>
<Modal.Header title="Tytuł Modala" toggle={toggleModal} />
<Modal.Content>
<h1>to powinno tak działać </h1>
</Modal.Content>
<Modal.Footer callToActionLabel="Udało się" toggle={toggleModal} />
</Modal>
      )}
</div>
  );
}
 
export default App;