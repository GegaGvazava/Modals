import React, { useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const [info, setInfo] = useState({
    index: 0,
    buttonName: "",
    visibility: "none",
  });
  const btnRef = useRef([]);

  const top = btnRef.current[info.index]?.offsetTop;

  const btnNames = ["First", "Second", "Third", "Fourth"];
  return (
    <>
      <div className="button-container">
        <div className="button-column">
          {btnNames.map((btnName, btnIndex) => (
            <Button
              key={btnIndex}
              text={btnName}
              btnIndex={btnIndex}
              refFunction={(refElement) => {
                if (refElement) btnRef.current[btnIndex] = refElement;
              }}
              setInfo={setInfo}
              className="custom-button"
            />
          ))}
        </div>
        <Modal text={info.buttonName} top={top} visibility={info.visibility} />
      </div>
    </>
  );
}

export default App;
