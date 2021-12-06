import React from "react";

function StyleButton({ type, image, name, changeLayout }) {
  return (
    <button
      onClick={() => {
        changeLayout(type, image);
      }}
      className="my-3 ds:mr-4 mr-2 bg-yellow ds:py-3 ds:px-6 py-1 px-3 ds:text-l text-l text-white rounded-lg hover:bg-white hover:text-yellow focus:bg-white focus:text-yellow border-4 border-solid border-yellow"
    >
      {name}
    </button>
  );
}

export default StyleButton;
