import React from "react";

function CategoryButton({ style, changeCategory }) {
  return (
    <button
      onClick={() => {
        changeCategory(style);
      }}
      className="my-3 ds:mr-4 mr-2 bg-yellow ds:py-3 ds:px-6 py-1 px-3 ds:text-l text-l text-white rounded-lg focus:bg-white focus:text-yellow active:bg-white active:text-yellow border-4 border-solid border-yellow"
    >
      {style.charAt(0).toUpperCase() + style.slice(1)}
    </button>
  );
}

export default CategoryButton;
