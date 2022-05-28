import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
// import CloseIcon from "@mui/icons-material/Close";
import toast from "react-simple-toasts";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

import { isMobile } from "react-device-detect";
import GlobalContext from "../../context/globalContext";

const DefaultModal = ({}) => {
  const { globalState, setGlobalContext } = useContext(GlobalContext);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      toast("Missing email field", 3000);
      return;
    }
    // save to firebase
    firebase.database().ref("/prelaunchSignups").push(email);
    toast("We'll be notifying you soon!", 6000);
    setGlobalContext({ ...globalState, showDefaultModal: false });
  };
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
          color: "black",
        }}
      >
        We're Officially Launching On June 8, 2022
      </p>
      <div
        style={{
          marginTop: "5%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <form>
          <label>
            Get notified:
            <input
              placeholder="Enter your email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handleSubmit()}
        >
          <p style={{ color: "blue", fontSize: 50, cursor: "pointer" }}>➮</p>
        </div>
      </div>
    </Modal>
  );
};

const customStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    backgroundColor: "#fff",
    top: "50%",
    left: "50%",
    width: "70%",
    minHeight: "10%",
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
