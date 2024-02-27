'use client'


import Image from "next/image";
import NewLanding from "./landing/newlanding";
import Header from "./Components/Header";
import Modal from "./Components/Modal/Modal";
import { useState,useEffect } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('modalClosed', 'true');
  };

  const [openPrivacy, setOpenPrivacy] = useState(false);

  useEffect(() => {
    if (openPrivacy) {
      setIsModalOpen(true); // Open the modal
    } else {
      setIsModalOpen(false);
    }
  }, [openPrivacy]);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      // Disable scrolling when the modal is open
      body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      body.style.overflow = "auto";
    }

    // Cleanup: Reset the overflow style when the component unmounts
    return () => {
      body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleToggleModal = () => {
    setOpenPrivacy(!openPrivacy); // Toggle the privacy state
  };
  return (
    <>
      <Modal isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} setOpenPrivacy={setOpenPrivacy} openPrivacy={openPrivacy}></Modal>
      <Header setOpenPrivacy={setOpenPrivacy} handleToggleModal={handleToggleModal}>
      </Header>
      <NewLanding/>

    </>
  )
}

