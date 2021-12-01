import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./loading.css";

function Loading(props) {
  return (
    <div>
      <Loader
        type="Oval"
        color="#00BFFF"
        height={80}
        width={80}
        className="loadingPosition"
      />
    </div>
  );
}

export default Loading;
