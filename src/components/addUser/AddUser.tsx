// addUser.js
import React, { useState } from "react";
import Modal from "../modal/modal";
import "./addUser.css";

const AddUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button onClick={toggleModal} className="open-modal-btn">
        Add User
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <form>
          <h2>Add User</h2>
          <div>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddUser;
