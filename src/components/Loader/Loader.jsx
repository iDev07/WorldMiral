import React from "react";
import { Plane } from "react-loader-spinner";
function LoaderPage() {
  return (
    <div align="center" className="loader">
      <Plane
        type="Plane"
        style={{ display: "flex", backgroundColor: "#000" }}
        color="#fff"
        height={100}
        width={100}
        timeout={20000}
      />
    </div>
  );
}

export default LoaderPage;
