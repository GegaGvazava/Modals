// import React, { useState } from "react";
// // import "./Modal.css";

// export default function Modal(props) {
//   return (
//     <>
//       <div>
//         <button
//           className="border border-solid border-[red] "
//           style={{
//             marginLeft: "20px",
//             marginTop: `${props.top}px`,
//             display: `${props.visibility}`,
//           }}
//         >
//           {props.text}
//         </button>
//       </div>
//     </>
//   );
// }
import React from "react";

const Modal = ({ text, top, left, visibility }) => {
  const modalStyle = {
    top: `${top}px`,
    left: `${left + 910}px`, // Positioning it next to the button with some offset
    display: visibility,
  };

  return (
    <div className="modal-window" style={modalStyle}>
      <span className="modal-close">&times;</span>
      <p>{text}</p>
    </div>
  );
};

export default Modal;
