'use client'


import Image from "next/image";
import NewLanding from "./landing/newlanding";
import Header from "./Components/Header";
import Modal from "./Components/Modal/Modal";
import { useState, useEffect, useRef } from "react";

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



  const scrollToRef = (refName) => {
    const sectionRefs = {
      section1: section1Ref,
      section2: section2Ref,
      section3: section3Ref,
      section4: section4Ref
    };

    const ref = sectionRefs[refName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  return (
    <>
      <Modal scrollToRef={scrollToRef} isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} setOpenPrivacy={setOpenPrivacy} openPrivacy={openPrivacy}></Modal>
      <Header scrollToRef={scrollToRef} handleToggleModal={handleToggleModal} />

      <NewLanding 
        section1Ref={section1Ref} 
        section2Ref={section2Ref} 
        section3Ref={section3Ref} 
        section4Ref={section4Ref} 
      />

    </>
  )


}



