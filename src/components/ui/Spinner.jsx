import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner-border spinner-border-sm text-black text-center"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
