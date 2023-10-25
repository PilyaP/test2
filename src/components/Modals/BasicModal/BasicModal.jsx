"use client";
import Modal from "react-modal";

export default function BasicModal({
  children,
  closeModal,
  modalIsOpen,
  contentStyle = {}, // Accept custom content styles
  overlayStyle = {}, // Accept custom overlay styles
}) {
  const defaultContentStyle = {
    width: "343px",
    height: "1002px",
    border: "4px solid #F2F2",
    margin: "auto",
    padding: "0px",
    borderRadius: "12px",
    overflow: "hidden",
  };

  const defaultOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: { ...defaultOverlayStyle, ...overlayStyle },
        content: { ...defaultContentStyle, ...contentStyle },
      }}
    >
      <div>{children}</div>
    </Modal>
  );
}