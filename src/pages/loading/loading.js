import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Loading(props) {
  let history = useHistory();
  useEffect(() => {
    setInterval(history.push("/"), 3000);
  }, []);
  return <>12345678</>;
}

export default Loading;
