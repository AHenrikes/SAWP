import React from "react";

function OutputWindow() {
  return (
    <div className="flex">
      <button>
        <img src="./src/assets/images/Vector.png" alt="copy to clipboard icon" />
      </button>
      <textarea readOnly placeholder="tpye hree..."></textarea>
    </div>
  );
}

export default OutputWindow;
