import React from "react";

const SunriseImg = () => {
  return (
    <img
      src="data:image/png;base64,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"
      alt="sunrise"
    />
  );
};

export default SunriseImg;
