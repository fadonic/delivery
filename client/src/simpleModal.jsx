import React, { useState, useRef } from 'react'

import Modal from './modal'

import { dummyData } from './dummyData'

export const SimpleModal = () => {

  const modalRef = useRef(null)
  const pictureRef = useRef(null)
  const [chosenPicture, setChosenPicture] = useState(null)
  const [modalOpen, toggleModal] = useState(false)

  const checkForModal = () => {
    console.log('in ref check', chosenPicture)
    if (modalRef) {
      console.log(pictureRef)
      if (pictureRef && pictureRef.current) {
        pictureRef.current.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }

  const openModal = id => {
    setChosenPicture(id)
    toggleModal(true)

    setTimeout(checkForModal, 1000)
  }
  return (
    <>
      {dummyData &&
        dummyData.map(item => (
          <div>
            <button onClick={() => openModal(item.id)}>{item.title}</button>
          </div>
        ))}

      <Modal
        chosenPicture={chosenPicture}
        modalRef={modalRef}
        pictureRef={pictureRef}
        open={modalOpen}
        toggleModal={toggleModal}
      />
    </>
  )
}
