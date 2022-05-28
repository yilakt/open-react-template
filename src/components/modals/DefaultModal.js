import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
// import CloseIcon from "@mui/icons-material/Close";
import toast from "react-simple-toasts";
import { isMobile } from "react-device-detect";
import GlobalContext from "../../context/globalContext";
const DefaultModal = ({}) => {
  const { globalState, setGlobalContext } = useContext(GlobalContext);

  return (
    <Modal
      isOpen={globalState?.showDefaultModal}
      onRequestClose={() =>
        setGlobalContext({ ...globalState, showDefaultModal: false })
      }
      style={customStyles}
      contentLabel="Pickup Orders Configuration"
      overlay={{}}
    >
      <div
        onClick={() =>
          setGlobalContext({ ...globalState, showDefaultModal: false })
        }
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          margin: 0,
          paddingBottom: "1%",
        }}
      >
        {/* <CloseIcon style={{ cursor: "pointer" }} /> */}
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          margin: 0,
          padding: 0,
        }}
      >
        We're going from Beta to official Launch!
      </p>
    </Modal>
  );
};

const customStyles = {
  overlay: {
    backgroundColor: "#CCC",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    top: "50%",
    left: "50%",
    width: "70%",
    height: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
};

export default DefaultModal;
