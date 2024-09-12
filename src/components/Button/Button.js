// import React from "react";

// function Button({ text, btnIndex, refFunction, setInfo }) {
//   return (
//     <button
//       className="border border-solid border-[black] border-1px my-1"
//       ref={refFunction}
//       onClick={() => {
//         const info = {
//           index: btnIndex,
//           buttonName: text,
//           visibility: "flex",
//         };
//         setInfo(info);
//       }}
//     >
//       {text}
//     </button>
//   );
// }

// export default Button;

import React from "react";

const Button = ({ text, btnIndex, refFunction, setInfo, className }) => {
  return (
    <button
      className={className}
      ref={refFunction}
      onClick={() =>
        setInfo({ index: btnIndex, buttonName: text, visibility: "block" })
      }
    >
      {text}
    </button>
  );
};

export default Button;
