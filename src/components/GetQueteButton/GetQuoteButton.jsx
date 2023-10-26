"use client";


import React, { useState } from "react";
import BasicModal from "../Modals/BasicModal/BasicModal";
import GetQuoteWidgetModal from "../Modals/GetQuoteWidgetModal/GetQuoteWidgetModal";

export default function GetQuoteButton() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showGetQuoteModal, setShowGetQuoteModal] = useState(false);
  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  const toggleGetQuoteModal = () => {
    setShowGetQuoteModal(!showGetQuoteModal);
  };
  return (
    <>
      <button
        onClick={toggleGetQuoteModal}
        className="fixed shadowButton rounded-[50px] w-[72px] h-[72px] leading-[16px] font-bold text-[16px] text: bg-accentYellow text-[#FAFCF8] hover:bg-accentHoverYellow right-[120px] top-[702px]"
      >
        GET A QUOTE
      </button>

      {showGetQuoteModal && (
        <BasicModal
          // contentStyle={{ width: "120px", height: "120px" }}
          modalIsOpen={showGetQuoteModal}
          closeModal={toggleGetQuoteModal}
        >
          <GetQuoteWidgetModal
            modalIsOpen={showGetQuoteModal}
            closeModal={toggleGetQuoteModal}
          />
        </BasicModal>
      )}
    </>
  );
}
